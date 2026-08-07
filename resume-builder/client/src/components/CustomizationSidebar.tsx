import { useResumeStore } from '@/store/resumeStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Trash2, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { TEMPLATE_NAMES } from './templates';

export default function CustomizationSidebar() {
  const {
    resumeData,
    customization,
    updateResumeData,
    updateCustomization,
    addWorkExperience,
    removeWorkExperience,
    addEducation,
    removeEducation,
    addSkill,
    removeSkill,
  } = useResumeStore();

  const [newSkill, setNewSkill] = useState('');

  return (
    <div className="w-full lg:w-80 bg-sidebar border-r border-border overflow-y-auto p-4 space-y-6">
      {/* Header Info */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Personal Info</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={resumeData.fullName}
          onChange={(e) => updateResumeData({ fullName: e.target.value })}
          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background text-foreground"
        />
        <input
          type="email"
          placeholder="Email"
          value={resumeData.email}
          onChange={(e) => updateResumeData({ email: e.target.value })}
          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background text-foreground"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={resumeData.phone}
          onChange={(e) => updateResumeData({ phone: e.target.value })}
          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background text-foreground"
        />
        <input
          type="text"
          placeholder="Location"
          value={resumeData.location}
          onChange={(e) => updateResumeData({ location: e.target.value })}
          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background text-foreground"
        />
      </div>

      {/* Professional Summary */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Professional Summary</h3>
        <textarea
          placeholder="Write your professional summary..."
          value={resumeData.professionalSummary}
          onChange={(e) => updateResumeData({ professionalSummary: e.target.value })}
          className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background text-foreground h-24 resize-none"
        />
      </div>

      {/* Work Experience */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-foreground">Work Experience</h3>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              addWorkExperience({
                id: Date.now().toString(),
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                description: '',
              })
            }
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {resumeData.workExperience.map((exp) => (
            <Card key={exp.id} className="p-2 bg-background">
              <div className="flex justify-between items-start mb-2">
                <input
                  type="text"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => {
                    const updated = resumeData.workExperience.map((item) =>
                      item.id === exp.id ? { ...item, position: e.target.value } : item
                    );
                    updateResumeData({ workExperience: updated });
                  }}
                  className="flex-1 px-2 py-1 border border-border rounded text-xs bg-background text-foreground"
                />
                <button
                  onClick={() => removeWorkExperience(exp.id)}
                  className="text-destructive hover:text-destructive/80 ml-2"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => {
                  const updated = resumeData.workExperience.map((item) =>
                    item.id === exp.id ? { ...item, company: e.target.value } : item
                  );
                  updateResumeData({ workExperience: updated });
                }}
                className="w-full px-2 py-1 border border-border rounded text-xs bg-background text-foreground mb-1"
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-foreground">Education</h3>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              addEducation({
                id: Date.now().toString(),
                school: '',
                degree: '',
                field: '',
                graduationDate: '',
              })
            }
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {resumeData.education.map((edu) => (
            <Card key={edu.id} className="p-2 bg-background">
              <div className="flex justify-between items-start mb-1">
                <input
                  type="text"
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => {
                    const updated = resumeData.education.map((item) =>
                      item.id === edu.id ? { ...item, school: e.target.value } : item
                    );
                    updateResumeData({ education: updated });
                  }}
                  className="flex-1 px-2 py-1 border border-border rounded text-xs bg-background text-foreground"
                />
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="text-destructive hover:text-destructive/80 ml-2"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Skills</h3>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Add skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && newSkill.trim()) {
                addSkill(newSkill.trim());
                setNewSkill('');
              }
            }}
            className="flex-1 px-3 py-2 border border-border rounded-md text-sm bg-background text-foreground"
          />
          <Button
            size="sm"
            onClick={() => {
              if (newSkill.trim()) {
                addSkill(newSkill.trim());
                setNewSkill('');
              }
            }}
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill) => (
            <div
              key={skill}
              className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs flex items-center gap-1"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="hover:opacity-70"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Customization Settings */}
      <div className="space-y-4 border-t border-border pt-4">
        <h3 className="text-sm font-semibold text-foreground">Design Settings</h3>

        {/* Font Size */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground">Font Size: {customization.fontSize}px</label>
          <Slider
            value={[customization.fontSize]}
            onValueChange={(value) => updateCustomization({ fontSize: value[0] })}
            min={10}
            max={16}
            step={1}
            className="w-full"
          />
        </div>

        {/* Line Height */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground">Line Height: {customization.lineHeight.toFixed(1)}</label>
          <Slider
            value={[customization.lineHeight * 10]}
            onValueChange={(value) => updateCustomization({ lineHeight: value[0] / 10 })}
            min={10}
            max={20}
            step={1}
            className="w-full"
          />
        </div>

        {/* Margin Spacing */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground">Margin: {customization.marginSpacing}px</label>
          <Slider
            value={[customization.marginSpacing]}
            onValueChange={(value) => updateCustomization({ marginSpacing: value[0] })}
            min={8}
            max={32}
            step={2}
            className="w-full"
          />
        </div>

        {/* Primary Color */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground">Primary Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={customization.primaryColor}
              onChange={(e) => updateCustomization({ primaryColor: e.target.value })}
              className="w-10 h-10 rounded border border-border cursor-pointer"
            />
            <input
              type="text"
              value={customization.primaryColor}
              onChange={(e) => updateCustomization({ primaryColor: e.target.value })}
              className="flex-1 px-2 py-1 border border-border rounded text-xs bg-background text-foreground"
            />
          </div>
        </div>

        {/* Secondary Color */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground">Secondary Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={customization.secondaryColor}
              onChange={(e) => updateCustomization({ secondaryColor: e.target.value })}
              className="w-10 h-10 rounded border border-border cursor-pointer"
            />
            <input
              type="text"
              value={customization.secondaryColor}
              onChange={(e) => updateCustomization({ secondaryColor: e.target.value })}
              className="flex-1 px-2 py-1 border border-border rounded text-xs bg-background text-foreground"
            />
          </div>
        </div>

        {/* Font Family */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground">Font Family</label>
          <select
            value={customization.fontFamily}
            onChange={(e) => updateCustomization({ fontFamily: e.target.value })}
            className="w-full px-2 py-2 border border-border rounded text-xs bg-background text-foreground"
          >
            <option value="Inter">Inter</option>
            <option value="Geist">Geist</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>

        {/* Template Selection */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground">Template</label>
          <select
            value={customization.templateId}
            onChange={(e) => updateCustomization({ templateId: e.target.value })}
            className="w-full px-2 py-2 border border-border rounded text-xs bg-background text-foreground"
          >
            {Object.entries(TEMPLATE_NAMES).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
