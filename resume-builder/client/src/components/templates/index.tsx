import { ResumeData, CustomizationSettings } from '@/store/resumeStore';

// Executive Templates
export const ExecutiveTemplate1 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#ffffff', color: '#1e293b' }}>
    <div style={{ borderBottom: `3px solid ${settings.primaryColor}`, paddingBottom: '20px', marginBottom: '20px' }}>
      <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0, color: settings.primaryColor }}>{data.fullName}</h1>
      <p style={{ margin: '8px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.email} | {data.phone} | {data.location}</p>
    </div>
    {data.professionalSummary && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Work Experience</h2>
        {data.workExperience.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ color: '#1e293b' }}>{exp.position}</strong>
              <span style={{ color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.startDate} - {exp.endDate}</span>
            </div>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.company}</p>
            <p style={{ margin: '4px 0 0 0', color: '#475569' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>🎓 Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ color: '#1e293b' }}>{edu.degree} in {edu.field}</strong>
              <span style={{ color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</span>
            </div>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.school}</p>
          </div>
        ))}
      </div>
    )}
    {data.skills.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>🛠️ Skills</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.skills.join(', ')}</p>
      </div>
    )}
  </div>
);

export const ExecutiveTemplate2 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#f8fafc', color: '#1e293b' }}>
    <div style={{ backgroundColor: settings.primaryColor, color: '#ffffff', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
      <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0 }}>{data.fullName}</h1>
      <p style={{ margin: '8px 0 0 0', fontSize: `${settings.fontSize - 1}px` }}>{data.email} | {data.phone} | {data.location}</p>
    </div>
    {data.professionalSummary && (
      <div style={{ marginBottom: '20px', backgroundColor: '#ffffff', padding: '15px', borderRadius: '6px', borderLeft: `4px solid ${settings.secondaryColor}` }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>💼 Work Experience</h2>
        {data.workExperience.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '12px', backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ color: '#1e293b' }}>{exp.position}</strong>
              <span style={{ color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.startDate} - {exp.endDate}</span>
            </div>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.company}</p>
            <p style={{ margin: '4px 0 0 0', color: '#475569' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>🎓 Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} style={{ marginBottom: '12px', backgroundColor: '#ffffff', padding: '12px', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ color: '#1e293b' }}>{edu.degree} in {edu.field}</strong>
              <span style={{ color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</span>
            </div>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.school}</p>
          </div>
        ))}
      </div>
    )}
    {data.skills.length > 0 && (
      <div>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>🛠️ Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {data.skills.map((skill, idx) => (
            <span key={idx} style={{ backgroundColor: settings.secondaryColor, color: '#ffffff', padding: '6px 12px', borderRadius: '20px', fontSize: `${settings.fontSize - 1}px` }}>{skill}</span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export const ExecutiveTemplate3 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#ffffff', color: '#1e293b', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
    <div>
      <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0, color: settings.primaryColor }}>{data.fullName}</h1>
      <p style={{ margin: '8px 0 20px 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.location}</p>
      {data.professionalSummary && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Summary</h2>
          <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
        </div>
      )}
      {data.skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>🛠️ Skills</h2>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#475569' }}>
            {data.skills.map((skill, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <div>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ margin: 0, color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.email}</p>
        <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.phone}</p>
      </div>
      {data.workExperience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Experience</h2>
          {data.workExperience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#1e293b' }}>{exp.position}</strong>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.company} ({exp.startDate} - {exp.endDate})</p>
              <p style={{ margin: '4px 0 0 0', color: '#475569' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      {data.education.length > 0 && (
        <div>
          <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>🎓 Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#1e293b' }}>{edu.degree}</strong>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.school} - {edu.graduationDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export const ExecutiveTemplate4 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#ffffff', color: '#1e293b' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', paddingBottom: '20px', borderBottom: `2px solid ${settings.primaryColor}` }}>
      <div>
        <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0, color: settings.primaryColor }}>{data.fullName}</h1>
        <p style={{ margin: '8px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.location}</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p style={{ margin: '0 0 4px 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.email}</p>
        <p style={{ margin: '0 0 4px 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.phone}</p>
      </div>
    </div>
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px', borderLeft: `4px solid ${settings.secondaryColor}`, paddingLeft: '12px' }}>💼 Work Experience</h2>
        {data.workExperience.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ color: '#1e293b' }}>{exp.position}</strong>
              <span style={{ color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.startDate} - {exp.endDate}</span>
            </div>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{exp.company}</p>
            <p style={{ margin: '4px 0 0 0', color: '#475569' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px', borderLeft: `4px solid ${settings.secondaryColor}`, paddingLeft: '12px' }}>🎓 Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#1e293b' }}>{edu.degree} in {edu.field}</strong>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.school} - {edu.graduationDate}</p>
          </div>
        ))}
      </div>
    )}
    {data.skills.length > 0 && (
      <div>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px', borderLeft: `4px solid ${settings.secondaryColor}`, paddingLeft: '12px' }}>🛠️ Skills</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.skills.join(' • ')}</p>
      </div>
    )}
  </div>
);

// Creative Templates
export const CreativeTemplate1 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#f8fafc', color: '#1e293b' }}>
    <div style={{ background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`, color: '#ffffff', padding: '30px', borderRadius: '12px', marginBottom: '20px' }}>
      <h1 style={{ fontSize: `${settings.fontSize + 14}px`, fontWeight: 700, margin: 0 }}>{data.fullName}</h1>
      <p style={{ margin: '12px 0 0 0', fontSize: `${settings.fontSize}px`, opacity: 0.9 }}>{data.location}</p>
    </div>
    {data.professionalSummary && (
      <div style={{ marginBottom: '20px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', borderTop: `4px solid ${settings.secondaryColor}` }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>💼 Work Experience</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {data.workExperience.map((exp) => (
            <div key={exp.id} style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', borderLeft: `4px solid ${settings.secondaryColor}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{exp.position}</strong>
                <span style={{ color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.startDate} - {exp.endDate}</span>
              </div>
              <p style={{ margin: '4px 0 0 0', color: '#0891b2', fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{exp.company}</p>
              <p style={{ margin: '6px 0 0 0', color: '#475569' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>🎓 Education</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {data.education.map((edu) => (
            <div key={edu.id} style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', borderLeft: `4px solid ${settings.secondaryColor}` }}>
              <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{edu.degree} in {edu.field}</strong>
              <p style={{ margin: '4px 0 0 0', color: '#0891b2', fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{edu.school}</p>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    {data.skills.length > 0 && (
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>🛠️ Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {data.skills.map((skill, idx) => (
            <span key={idx} style={{ backgroundColor: settings.primaryColor, color: '#ffffff', padding: '8px 16px', borderRadius: '20px', fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{skill}</span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export const CreativeTemplate2 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: 0, backgroundColor: '#ffffff', color: '#1e293b', display: 'grid', gridTemplateColumns: '250px 1fr' }}>
    <div style={{ backgroundColor: settings.primaryColor, color: '#ffffff', padding: `${settings.marginSpacing}px`, minHeight: '100vh' }}>
      <h1 style={{ fontSize: `${settings.fontSize + 10}px`, fontWeight: 700, margin: '0 0 20px 0' }}>{data.fullName}</h1>
      <p style={{ margin: '0 0 20px 0', fontSize: `${settings.fontSize - 1}px`, opacity: 0.9 }}>{data.location}</p>
      <div style={{ borderTop: '2px solid rgba(255,255,255,0.3)', paddingTop: '20px', marginBottom: '20px' }}>
        <p style={{ margin: '0 0 4px 0', fontSize: `${settings.fontSize - 1}px` }}>{data.email}</p>
        <p style={{ margin: '4px 0 0 0', fontSize: `${settings.fontSize - 1}px` }}>{data.phone}</p>
      </div>
      {data.skills.length > 0 && (
        <div>
          <h3 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, marginBottom: '8px' }}>🛠️ Skills</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: `${settings.fontSize - 1}px` }}>
            {data.skills.map((skill, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <div style={{ padding: `${settings.marginSpacing}px` }}>
      {data.professionalSummary && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Professional Summary</h2>
          <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
        </div>
      )}
      {data.workExperience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>💼 Work Experience</h2>
          {data.workExperience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
              <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{exp.position}</strong>
              <p style={{ margin: '4px 0 0 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{exp.company}</p>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.startDate} - {exp.endDate}</p>
              <p style={{ margin: '6px 0 0 0', color: '#475569' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      {data.education.length > 0 && (
        <div>
          <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>🎓 Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{edu.degree}</strong>
              <p style={{ margin: '4px 0 0 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{edu.school}</p>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export const CreativeTemplate3 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#ffffff', color: '#1e293b' }}>
    <div style={{ marginBottom: '30px' }}>
      <h1 style={{ fontSize: `${settings.fontSize + 14}px`, fontWeight: 700, margin: 0, color: settings.primaryColor }}>{data.fullName}</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '12px', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>
        <span>{data.email}</span>
        <span>{data.phone}</span>
        <span>{data.location}</span>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
      <div>
        {data.workExperience.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>💼 Experience</h2>
            {data.workExperience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: `2px solid ${settings.secondaryColor}` }}>
                <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{exp.position}</strong>
                <p style={{ margin: '4px 0 0 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{exp.company}</p>
                <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.startDate} - {exp.endDate}</p>
                <p style={{ margin: '6px 0 0 0', color: '#475569' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {data.education.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>🎓 Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: `2px solid ${settings.secondaryColor}` }}>
                <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{edu.degree}</strong>
                <p style={{ margin: '4px 0 0 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{edu.school}</p>
                <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        )}
        {data.skills.length > 0 && (
          <div>
            <h2 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>🛠️ Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.skills.map((skill, idx) => (
                <span key={idx} style={{ backgroundColor: settings.secondaryColor, color: '#ffffff', padding: '6px 12px', borderRadius: '4px', fontSize: `${settings.fontSize - 1}px` }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    {data.professionalSummary && (
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8fafc', borderLeft: `4px solid ${settings.primaryColor}` }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
  </div>
);

export const CreativeTemplate4 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#f8fafc', color: '#1e293b' }}>
    <div style={{ textAlign: 'center', marginBottom: '30px', paddingBottom: '20px', borderBottom: `3px solid ${settings.primaryColor}` }}>
      <h1 style={{ fontSize: `${settings.fontSize + 14}px`, fontWeight: 700, margin: 0, color: settings.primaryColor }}>{data.fullName}</h1>
      <p style={{ margin: '8px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{data.location}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '12px', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>
        <span>{data.email}</span>
        <span>{data.phone}</span>
      </div>
    </div>
    {data.professionalSummary && (
      <div style={{ marginBottom: '30px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '8px' }}>💼 Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px', textAlign: 'center' }}>💼 Work Experience</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {data.workExperience.map((exp) => (
            <div key={exp.id} style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', borderTop: `3px solid ${settings.secondaryColor}` }}>
              <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{exp.position}</strong>
              <p style={{ margin: '4px 0 0 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{exp.company}</p>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.startDate} - {exp.endDate}</p>
              <p style={{ margin: '6px 0 0 0', color: '#475569', fontSize: `${settings.fontSize - 1}px` }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px', textAlign: 'center' }}>🎓 Education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {data.education.map((edu) => (
            <div key={edu.id} style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '8px', borderTop: `3px solid ${settings.secondaryColor}` }}>
              <strong style={{ color: '#1e293b', fontSize: `${settings.fontSize + 1}px` }}>{edu.degree}</strong>
              <p style={{ margin: '4px 0 0 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{edu.school}</p>
              <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    {data.skills.length > 0 && (
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 4}px`, fontWeight: 600, color: settings.primaryColor, marginBottom: '12px' }}>🛠️ Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {data.skills.map((skill, idx) => (
            <span key={idx} style={{ backgroundColor: settings.primaryColor, color: '#ffffff', padding: '8px 16px', borderRadius: '20px', fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{skill}</span>
          ))}
        </div>
      </div>
    )}
  </div>
);

// Academic Templates
export const AcademicTemplate1 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#ffffff', color: '#1e293b', maxWidth: '8.5in', margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: `2px solid #1e293b` }}>
      <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0 }}>{data.fullName}</h1>
      <p style={{ margin: '4px 0 0 0', fontSize: `${settings.fontSize - 1}px`, color: '#475569' }}>{data.location} | {data.email} | {data.phone}</p>
    </div>
    {data.professionalSummary && (
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Professional Experience</h2>
        {data.workExperience.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{exp.position}</strong>
              <span style={{ fontSize: `${settings.fontSize - 1}px`, color: '#64748b' }}>{exp.startDate} – {exp.endDate}</span>
            </div>
            <p style={{ margin: '2px 0 0 0', fontSize: `${settings.fontSize - 1}px`, color: '#64748b', fontStyle: 'italic' }}>{exp.company}</p>
            <p style={{ margin: '4px 0 0 0', color: '#475569' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{edu.degree} in {edu.field}</strong>
              <span style={{ fontSize: `${settings.fontSize - 1}px`, color: '#64748b' }}>{edu.graduationDate}</span>
            </div>
            <p style={{ margin: '2px 0 0 0', fontSize: `${settings.fontSize - 1}px`, color: '#64748b', fontStyle: 'italic' }}>{edu.school}</p>
          </div>
        ))}
      </div>
    )}
    {data.skills.length > 0 && (
      <div>
        <h2 style={{ fontSize: `${settings.fontSize + 2}px`, fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Technical Skills</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.skills.join(', ')}</p>
      </div>
    )}
  </div>
);

export const AcademicTemplate2 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#ffffff', color: '#1e293b' }}>
    <div style={{ marginBottom: '20px' }}>
      <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0 }}>{data.fullName}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '8px', fontSize: `${settings.fontSize - 1}px`, color: '#475569' }}>
        <div>
          <p style={{ margin: 0 }}>{data.location}</p>
          <p style={{ margin: '2px 0 0 0' }}>{data.email}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0 }}>{data.phone}</p>
        </div>
      </div>
    </div>
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, margin: '0 0 12px 0', paddingBottom: '4px', borderBottom: '1px solid #1e293b' }}>Professional Experience</h2>
        {data.workExperience.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '12px' }}>
            <strong style={{ fontSize: `${settings.fontSize + 1}px` }}>{exp.position}</strong>
            <p style={{ margin: '2px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{exp.company}, {exp.startDate} – {exp.endDate}</p>
            <p style={{ margin: '4px 0 0 0', color: '#475569' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, margin: '0 0 12px 0', paddingBottom: '4px', borderBottom: '1px solid #1e293b' }}>Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} style={{ marginBottom: '12px' }}>
            <strong style={{ fontSize: `${settings.fontSize + 1}px` }}>{edu.degree} in {edu.field}</strong>
            <p style={{ margin: '2px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.school}, {edu.graduationDate}</p>
          </div>
        ))}
      </div>
    )}
    {data.skills.length > 0 && (
      <div>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, margin: '0 0 8px 0', paddingBottom: '4px', borderBottom: '1px solid #1e293b' }}>Skills</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.skills.join(', ')}</p>
      </div>
    )}
  </div>
);

export const AcademicTemplate3 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#ffffff', color: '#1e293b' }}>
    <div style={{ marginBottom: '24px', paddingBottom: '12px', borderBottom: `3px solid ${settings.primaryColor}` }}>
      <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0, color: settings.primaryColor }}>{data.fullName}</h1>
      <p style={{ margin: '8px 0 0 0', fontSize: `${settings.fontSize - 1}px`, color: '#475569' }}>{data.location} • {data.email} • {data.phone}</p>
    </div>
    {data.professionalSummary && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 8px 0' }}>Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 12px 0' }}>Professional Experience</h2>
        {data.workExperience.map((exp, idx) => (
          <div key={exp.id} style={{ marginBottom: idx === data.workExperience.length - 1 ? 0 : '16px', paddingBottom: idx === data.workExperience.length - 1 ? 0 : '16px', borderBottom: idx === data.workExperience.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <strong style={{ fontSize: `${settings.fontSize + 1}px` }}>{exp.position}</strong>
              <span style={{ fontSize: `${settings.fontSize - 1}px`, color: '#64748b' }}>{exp.startDate} – {exp.endDate}</span>
            </div>
            <p style={{ margin: '2px 0 4px 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{exp.company}</p>
            <p style={{ margin: 0, color: '#475569' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 12px 0' }}>Education</h2>
        {data.education.map((edu, idx) => (
          <div key={edu.id} style={{ marginBottom: idx === data.education.length - 1 ? 0 : '12px', paddingBottom: idx === data.education.length - 1 ? 0 : '12px', borderBottom: idx === data.education.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
            <strong style={{ fontSize: `${settings.fontSize + 1}px` }}>{edu.degree} in {edu.field}</strong>
            <p style={{ margin: '2px 0 0 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{edu.school}</p>
            <p style={{ margin: '2px 0 0 0', color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</p>
          </div>
        ))}
      </div>
    )}
    {data.skills.length > 0 && (
      <div>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 8px 0' }}>Skills</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.skills.join(' • ')}</p>
      </div>
    )}
  </div>
);

export const AcademicTemplate4 = ({ data, settings }: { data: ResumeData; settings: CustomizationSettings }) => (
  <div style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px`, lineHeight: settings.lineHeight, padding: `${settings.marginSpacing}px`, backgroundColor: '#f8fafc', color: '#1e293b' }}>
    <div style={{ backgroundColor: '#ffffff', padding: '20px', marginBottom: '20px', borderRadius: '8px', borderLeft: `5px solid ${settings.primaryColor}` }}>
      <h1 style={{ fontSize: `${settings.fontSize + 12}px`, fontWeight: 700, margin: 0 }}>{data.fullName}</h1>
      <p style={{ margin: '8px 0 0 0', fontSize: `${settings.fontSize - 1}px`, color: '#475569' }}>{data.location} | {data.email} | {data.phone}</p>
    </div>
    {data.professionalSummary && (
      <div style={{ backgroundColor: '#ffffff', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 8px 0' }}>Professional Summary</h2>
        <p style={{ margin: 0, color: '#475569' }}>{data.professionalSummary}</p>
      </div>
    )}
    {data.workExperience.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 12px 0' }}>Professional Experience</h2>
        {data.workExperience.map((exp) => (
          <div key={exp.id} style={{ backgroundColor: '#ffffff', padding: '15px', marginBottom: '12px', borderRadius: '8px', borderTop: `3px solid ${settings.secondaryColor}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ fontSize: `${settings.fontSize + 1}px` }}>{exp.position}</strong>
              <span style={{ fontSize: `${settings.fontSize - 1}px`, color: '#64748b' }}>{exp.startDate} – {exp.endDate}</span>
            </div>
            <p style={{ margin: '2px 0 4px 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{exp.company}</p>
            <p style={{ margin: 0, color: '#475569' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    )}
    {data.education.length > 0 && (
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 12px 0' }}>Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} style={{ backgroundColor: '#ffffff', padding: '15px', marginBottom: '12px', borderRadius: '8px', borderTop: `3px solid ${settings.secondaryColor}` }}>
            <strong style={{ fontSize: `${settings.fontSize + 1}px` }}>{edu.degree} in {edu.field}</strong>
            <p style={{ margin: '2px 0 4px 0', color: settings.secondaryColor, fontSize: `${settings.fontSize - 1}px`, fontWeight: 500 }}>{edu.school}</p>
            <p style={{ margin: 0, color: '#64748b', fontSize: `${settings.fontSize - 1}px` }}>{edu.graduationDate}</p>
          </div>
        ))}
      </div>
    )}
    {data.skills.length > 0 && (
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: `${settings.fontSize + 3}px`, fontWeight: 600, color: settings.primaryColor, margin: '0 0 12px 0' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {data.skills.map((skill, idx) => (
            <span key={idx} style={{ backgroundColor: settings.primaryColor, color: '#ffffff', padding: '6px 12px', borderRadius: '4px', fontSize: `${settings.fontSize - 1}px` }}>{skill}</span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export const TEMPLATES = {
  'executive-1': ExecutiveTemplate1,
  'executive-2': ExecutiveTemplate2,
  'executive-3': ExecutiveTemplate3,
  'executive-4': ExecutiveTemplate4,
  'creative-1': CreativeTemplate1,
  'creative-2': CreativeTemplate2,
  'creative-3': CreativeTemplate3,
  'creative-4': CreativeTemplate4,
  'academic-1': AcademicTemplate1,
  'academic-2': AcademicTemplate2,
  'academic-3': AcademicTemplate3,
  'academic-4': AcademicTemplate4,
};

export const TEMPLATE_NAMES = {
  'executive-1': 'Executive Classic',
  'executive-2': 'Executive Modern',
  'executive-3': 'Executive Minimal',
  'executive-4': 'Executive Elegant',
  'creative-1': 'Creative Vibrant',
  'creative-2': 'Creative Sidebar',
  'creative-3': 'Creative Modern',
  'creative-4': 'Creative Card',
  'academic-1': 'Academic Standard',
  'academic-2': 'Academic Clean',
  'academic-3': 'Academic Professional',
  'academic-4': 'Academic Boxed',
};
