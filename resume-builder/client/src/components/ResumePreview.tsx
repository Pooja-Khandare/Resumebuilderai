import { useResumeStore } from '@/store/resumeStore';
import { TEMPLATES } from './templates';
import { Button } from '@/components/ui/button';
import { Download, FileImage, Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';

export default function ResumePreview() {
  const { resumeData, customization } = useResumeStore();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const Template = TEMPLATES[customization.templateId as keyof typeof TEMPLATES] || TEMPLATES['executive-1'];

  const handlePrintPDF = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${resumeData.fullName}-Resume.pdf`,
  });

  const handleExportJPEG = async () => {
    if (!resumeRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.download = `${resumeData.fullName}-Resume.jpg`;
      link.click();
    } catch (error) {
      console.error('Error exporting JPEG:', error);
      alert('Failed to export JPEG. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex-1 bg-background flex flex-col">
      {/* Export Buttons */}
      <div className="sticky top-0 bg-card border-b border-border p-4 flex gap-2 z-10">
        <Button
          onClick={() => handlePrintPDF()}
          className="flex items-center gap-2"
          variant="default"
        >
          <Download className="w-4 h-4" />
          Export PDF
        </Button>
        <Button
          onClick={handleExportJPEG}
          disabled={isExporting}
          className="flex items-center gap-2"
          variant="outline"
        >
          {isExporting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <FileImage className="w-4 h-4" />
          )}
          Export JPEG
        </Button>
      </div>

      {/* Resume Preview */}
      <div className="flex-1 overflow-auto p-4">
        <div
          ref={resumeRef}
          className="bg-white mx-auto shadow-lg"
          style={{
            width: '8.5in',
            minHeight: '11in',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          }}
        >
          <Template data={resumeData} settings={customization} />
        </div>
      </div>
    </div>
  );
}
