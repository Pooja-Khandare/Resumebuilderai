import { create } from 'zustand';

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  professionalSummary: string;
  workExperience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    graduationDate: string;
  }>;
  skills: string[];
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
  }>;
}

export interface CustomizationSettings {
  fontSize: number;
  lineHeight: number;
  marginSpacing: number;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  templateId: string;
}

interface ResumeStore {
  resumeData: ResumeData;
  customization: CustomizationSettings;
  updateResumeData: (data: Partial<ResumeData>) => void;
  updateCustomization: (settings: Partial<CustomizationSettings>) => void;
  addWorkExperience: (item: ResumeData['workExperience'][0]) => void;
  removeWorkExperience: (id: string) => void;
  addEducation: (item: ResumeData['education'][0]) => void;
  removeEducation: (id: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  addCertification: (cert: ResumeData['certifications'][0]) => void;
  removeCertification: (id: string) => void;
  resetResume: () => void;
}

const defaultResumeData: ResumeData = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  professionalSummary: 'Experienced professional with a passion for innovation and excellence.',
  workExperience: [
    {
      id: '1',
      company: 'Tech Corp',
      position: 'Senior Engineer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: 'Led development of scalable systems and mentored junior engineers.',
    },
  ],
  education: [
    {
      id: '1',
      school: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      graduationDate: 'May 2019',
    },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
  certifications: [
    {
      id: '1',
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Dec 2022',
    },
  ],
};

const defaultCustomization: CustomizationSettings = {
  fontSize: 12,
  lineHeight: 1.5,
  marginSpacing: 16,
  primaryColor: '#1e3a5f',
  secondaryColor: '#0891b2',
  fontFamily: 'Inter',
  templateId: 'executive-1',
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resumeData: defaultResumeData,
  customization: defaultCustomization,

  updateResumeData: (data) =>
    set((state) => ({
      resumeData: { ...state.resumeData, ...data },
    })),

  updateCustomization: (settings) =>
    set((state) => ({
      customization: { ...state.customization, ...settings },
    })),

  addWorkExperience: (item) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        workExperience: [...state.resumeData.workExperience, item],
      },
    })),

  removeWorkExperience: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        workExperience: state.resumeData.workExperience.filter((item) => item.id !== id),
      },
    })),

  addEducation: (item) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: [...state.resumeData.education, item],
      },
    })),

  removeEducation: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: state.resumeData.education.filter((item) => item.id !== id),
      },
    })),

  addSkill: (skill) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        skills: [...state.resumeData.skills, skill],
      },
    })),

  removeSkill: (skill) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        skills: state.resumeData.skills.filter((s) => s !== skill),
      },
    })),

  addCertification: (cert) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        certifications: [...state.resumeData.certifications, cert],
      },
    })),

  removeCertification: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        certifications: state.resumeData.certifications.filter((cert) => cert.id !== id),
      },
    })),

  resetResume: () =>
    set({
      resumeData: defaultResumeData,
      customization: defaultCustomization,
    }),
}));
