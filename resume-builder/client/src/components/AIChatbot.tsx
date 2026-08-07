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
      // Mock AI response - in production, connect to OpenAI or similar
      const mockResponses = [
        `Based on your background, here's a professional summary: "Experienced professional with expertise in ${userMessage}. Proven track record of delivering results and leading teams to success."`,
        `Here's a summary tailored to your experience: "Results-driven ${userMessage} professional with strong analytical and leadership skills. Passionate about innovation and continuous improvement."`,
        `Try this: "Dynamic ${userMessage} specialist with ${resumeData.workExperience.length}+ years of experience. Dedicated to driving business growth and fostering collaborative team environments."`,
      ];

      const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];

      setMessages((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: response },
      ]);

      setInput('');
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    await generateSummary(input);
  };

  const applySummary = (summary: string) => {
    // Extract the summary text from the assistant's response
    const match = summary.match(/"([^"]+)"/);
    if (match) {
      updateResumeData({ professionalSummary: match[1] });
      setIsOpen(false);
      alert('Professional summary updated!');
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-accent text-accent-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
          aria-label="Open AI Chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-96 flex flex-col shadow-2xl z-50 bg-card">
          {/* Header */}
          <div className="bg-accent text-accent-foreground p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">AI Writing Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
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
                  {msg.role === 'assistant' && msg.content.includes('"') && (
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

          {/* Input */}
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
