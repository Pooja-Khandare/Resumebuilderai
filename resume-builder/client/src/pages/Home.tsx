import CustomizationSidebar from '@/components/CustomizationSidebar';
import ResumePreview from '@/components/ResumePreview';
import AIChatbot from '@/components/AIChatbot';

/**
 * Design Philosophy: Modern Professional Elegance
 * - Dual-panel layout: sidebar for customization, main area for live preview
 * - Deep slate blue primary color (#1e3a5f) conveys professionalism
 * - Teal accents (#0891b2) add modern energy
 * - Real-time feedback on all customization changes
 * - Smooth transitions and micro-interactions
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-primary text-primary-foreground p-4 text-center">
        <h1 className="text-2xl font-bold">AI Resume Builder</h1>
        <p className="text-sm opacity-90 mt-1">Create your professional resume</p>
      </div>

      {/* Sidebar - Hidden on mobile, visible on lg */}
      <div className="hidden lg:block lg:max-h-screen">
        <div className="sticky top-0 bg-primary text-primary-foreground p-4">
          <h1 className="text-xl font-bold">Resume Builder</h1>
          <p className="text-sm opacity-90">Customize & Export</p>
        </div>
        <CustomizationSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <ResumePreview />
      </div>

      {/* Mobile Sidebar - Drawer on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 max-h-96 bg-sidebar border-t border-border overflow-y-auto rounded-t-lg shadow-2xl">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Edit Resume</h2>
          <CustomizationSidebar />
        </div>
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
