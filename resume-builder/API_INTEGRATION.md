# API Integration Guide - AI-Powered Resume Builder

This guide explains how to integrate real AI services (OpenAI, Claude, etc.) for the chatbot feature.

## Current Implementation

The application currently uses **mock AI responses** for demonstration purposes. The chatbot generates realistic-sounding suggestions without requiring external API calls.

### Mock AI Features
- Generates contextual professional summaries
- Provides industry-relevant suggestions
- Works offline without API keys
- Perfect for testing and development

## Upgrading to Real AI

### Option 1: OpenAI Integration

#### Step 1: Get OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Navigate to API keys section
4. Create a new API key
5. Copy and save securely

#### Step 2: Set Up Environment Variables

Create `.env.local` file in project root:

```env
VITE_OPENAI_API_KEY=sk-your-api-key-here
VITE_OPENAI_MODEL=gpt-3.5-turbo
```

#### Step 3: Update AIChatbot Component

Replace `client/src/components/AIChatbot.tsx`:

```typescript
import { useState, useRef, useEffect } from 'react';
import { useResumeStore } from '@/store/resumeStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Send, Loader2, MessageCircle } from 'lucide-react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI writing assistant. I can help you craft a compelling professional summary. What's your current role or field?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { resumeData, updateResumeData } = useResumeStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateSummary = async (userMessage: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a professional resume writing assistant. Generate compelling professional summaries based on user input. Keep responses concise and professional.',
            },
            {
              role: 'user',
              content: `Generate a professional resume summary for someone who is: ${userMessage}`,
            },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: aiResponse },
      ]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: 'Sorry, I encountered an error. Please check your API key and try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    await generateSummary(input);
    setInput('');
  };

  const applySummary = (summary: string) => {
    updateResumeData({ professionalSummary: summary });
    setIsOpen(false);
    alert('Professional summary updated!');
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-accent text-accent-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
          aria-label="Open AI Chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-96 flex flex-col shadow-2xl z-50 bg-card">
          <div className="bg-accent text-accent-foreground p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">AI Writing Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {msg.content}
                  {msg.role === 'assistant' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => applySummary(msg.content)}
                      className="mt-2 w-full text-xs"
                    >
                      Use This
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-border p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me about your role..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 border border-border rounded-md text-sm bg-background text-foreground disabled:opacity-50"
            />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !input.trim()}
              className="flex items-center gap-1"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </form>
        </Card>
      )}
    </>
  );
}
```

#### Step 4: Test Integration

```bash
# Start development server
pnpm run dev

# Test the chatbot with your API key
# Click the chat bubble and send a message
```

### Option 2: Anthropic Claude Integration

#### Step 1: Get Claude API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Create API key
4. Copy and save securely

#### Step 2: Set Environment Variables

```env
VITE_CLAUDE_API_KEY=sk-ant-your-api-key-here
VITE_CLAUDE_MODEL=claude-3-sonnet-20240229
```

#### Step 3: Update Integration

```typescript
const generateSummary = async (userMessage: string) => {
  setIsLoading(true);
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: import.meta.env.VITE_CLAUDE_MODEL,
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `Generate a professional resume summary for: ${userMessage}`,
          },
        ],
      }),
    });

    const data = await response.json();
    const aiResponse = data.content[0].text;

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
      { role: 'assistant', content: aiResponse },
    ]);
  } catch (error) {
    console.error('Error calling Claude API:', error);
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
      { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
    ]);
  } finally {
    setIsLoading(false);
  }
};
```

### Option 3: Backend Proxy (Recommended for Production)

For security, use a backend proxy instead of exposing API keys in frontend.

#### Create Backend Endpoint

In `server/index.ts`:

```typescript
import express from 'express';
import axios from 'axios';

const app = express();

app.post('/api/generate-summary', async (req, res) => {
  try {
    const { message } = req.body;
    
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a professional resume writing assistant.',
          },
          {
            role: 'user',
            content: `Generate a professional resume summary for: ${message}`,
          },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json({
      summary: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate summary' });
  }
});

export default app;
```

#### Update Frontend

```typescript
const generateSummary = async (userMessage: string) => {
  setIsLoading(true);
  try {
    const response = await fetch('/api/generate-summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    const aiResponse = data.summary;

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
      { role: 'assistant', content: aiResponse },
    ]);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};
```

## API Pricing Comparison

| Provider | Model | Cost | Speed | Quality |
|----------|-------|------|-------|---------|
| OpenAI | GPT-3.5 | $0.0005/1K tokens | Fast | Good |
| OpenAI | GPT-4 | $0.03/1K tokens | Slower | Excellent |
| Claude | Sonnet | $0.003/1K tokens | Fast | Excellent |
| Claude | Opus | $0.015/1K tokens | Slower | Best |

## Best Practices

### Security
- Never expose API keys in frontend code
- Use backend proxy for API calls
- Store keys in environment variables
- Rotate keys regularly

### Performance
- Cache AI responses when possible
- Implement rate limiting
- Add request timeouts
- Handle errors gracefully

### Cost Management
- Monitor API usage
- Set spending limits
- Use cheaper models for simple tasks
- Implement caching

### User Experience
- Show loading states
- Provide clear error messages
- Allow multiple suggestions
- Enable one-click application

## Troubleshooting

### API Key Not Working
- Verify key is correct
- Check API provider dashboard
- Ensure key has required permissions
- Check rate limits

### Slow Responses
- Use faster models
- Reduce max_tokens
- Implement caching
- Check network connection

### High Costs
- Use cheaper models
- Implement response caching
- Limit API calls
- Monitor usage

## Testing

```bash
# Test with mock AI (default)
pnpm run dev

# Test with real API (after setup)
# Set environment variables
# Restart dev server
# Test chatbot functionality
```

## Deployment Considerations

### Environment Variables
```bash
# Production .env
VITE_OPENAI_API_KEY=sk-prod-key
VITE_OPENAI_MODEL=gpt-3.5-turbo
```

### Backend Deployment
- Deploy backend separately
- Use secure environment variables
- Implement API authentication
- Monitor API usage

### Monitoring
- Track API errors
- Monitor response times
- Alert on high costs
- Log user interactions

## Support

For API-specific issues:
- OpenAI: [help.openai.com](https://help.openai.com)
- Anthropic: [support.anthropic.com](https://support.anthropic.com)
- General: Check API documentation

---

**Ready to add real AI? Follow the steps above and enjoy enhanced resume writing!**
