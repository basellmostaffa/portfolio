import React, { createContext, useContext, useEffect, useState } from 'react';

const copy = {
  en: {
    nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
    home: 'Home',
    lab: 'SOC Lab',
    heroAvailability: 'Open to SOC Level 1 internships',
    heroGreeting: "👋 Hello, I'm",
    heroTitle: 'SOC Internship Candidate | Blue Team | Detection Engineering',
    heroDescription: 'I am a cybersecurity undergraduate turning hands-on IT experience into a focused path toward SOC operations. I support real users by day, then build and test detections in my home lab to understand what suspicious activity looks like in the evidence.',
    heroStory: 'The story so far: endpoint deployment and infrastructure support at Pinnacle Misr, incident-response training at DEPI, and a multi-VM SOC lab built with Wazuh, Elastic, and FortiGate.',
    explore: 'Explore My Work', download: 'Download CV',
    labTitle: 'Home SOC Lab Architecture',
    labSubtitle: 'A practical detection pipeline: endpoint activity becomes evidence, then a validated alert.',
    endpoints: 'Monitored endpoints', telemetry: 'Telemetry collection', siem: 'SIEM & detection', firewall: 'Network perimeter',
    endpointDetail: 'Windows clients and servers', telemetryDetail: 'Sysmon events and agent logs', siemDetail: 'Elastic, Wazuh and KQL rules', firewallDetail: 'FortiGate network context',
    labFlow: 'Attack simulation → alert triage → investigation notes → MITRE ATT&CK mapping → detection validation',
    aboutTitle: 'From IT Support to SOC', aboutSubtitle: 'Cybersecurity undergraduate, SOC Analyst candidate, and IT Support & System Administration Intern building practical experience across security operations and live IT environments.',
    aboutParagraphs: [
      'I am a cybersecurity undergraduate at Arab Open University building a practical path into Blue Team security operations. My foundation includes the CCNA curriculum, Windows Server, Active Directory, and Linux administration.',
      'In my home SOC lab, I build visibility with Sysmon and Elastic SIEM, write and tune detection rules, reproduce techniques to validate coverage, and map findings to MITRE ATT&CK.',
      'I am currently a Cyber Security Incident Response Analyst Trainee at DEPI, covering network and OS fundamentals, security and attack techniques, incident response, digital forensics, and SIEM/SOC operations. I was selected as group leader for a five-member capstone team.',
      'Alongside DEPI, I work as an IT Support & System Administration Intern at Pinnacle Misr, supporting 600+ users across two Cairo offices and a Saudi branch. I deploy workstations, troubleshoot endpoints and IP phones, assist with Active Directory, and work with switches, routers, and the perimeter firewall.'
    ],
    skillsTitle: 'SOC Capability Dashboard', skillsSubtitle: 'A quick view of how I collect evidence, investigate activity, and build detections as a Blue Team practitioner.',
    projectsTitle: 'My Projects', projectsSubtitle: 'Selected work from my GitHub profile, with the strongest focus on detection engineering, SOC lab building, and network security foundations.',
    contactTitle: 'Get In Touch', contactSubtitle: 'Open to conversations about SOC operations, detection engineering, cybersecurity projects, and collaboration.',
    projectFilter: ['All Projects', 'SOC', 'Network & Cybersecurity'], viewGithub: 'View on GitHub',
    skillNames: ['Detection Engineering', 'SOC & Incident Response', 'MITRE ATT&CK', 'Networking (CCNA)', 'Systems & Infrastructure', 'Security Automation & Scripting'],
    skillDescriptions: ['Turn endpoint telemetry into tested, explainable detections.', 'Triage alerts, investigate behavior, and document the finding.', 'Map observed behavior to techniques and validate coverage.', 'Understand the network context behind every suspicious event.', 'Build and operate the systems that generate useful security signals.', 'Use lightweight scripts to support investigation and repeatable lab work.'],
    stats: ['Users Supported', 'Workstations Deployed', 'Malware Reports', 'Expected Graduation'], currentExperience: 'Current Experience', active: 'Active',
    form: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send Message', sending: 'Sending...', namePlaceholder: 'Your name', subjectPlaceholder: 'Project inquiry', messagePlaceholder: 'Tell me about your project...' },
    footer: 'SOC Analyst candidate focused on Blue Team operations, detection engineering, and practical cybersecurity labs.', quickLinks: 'Quick Links', contactInfo: 'Contact Info', rights: 'All rights reserved.', madeWith: 'Made with',
  },
  ar: {
    nav: ['الرئيسية', 'عني', 'المهارات', 'المشاريع', 'تواصل'],
    home: 'الرئيسية', lab: 'مختبر SOC',
    heroAvailability: 'متاح لتدريب SOC مستوى أول', heroGreeting: '👋 أهلاً، أنا',
    heroTitle: 'مرشح تدريب SOC | الفريق الأزرق | هندسة الاكتشاف',
    heroDescription: 'طالب أمن سيبراني أحوّل خبرتي العملية في دعم تقنية المعلومات إلى مسار واضح في عمليات مركز الأمن. أدعم المستخدمين يوميًا، وأبني وأختبر الاكتشافات في مختبري المنزلي لفهم النشاط المشبوه من خلال الأدلة.',
    heroStory: 'رحلتي حتى الآن: نشر الأجهزة ودعم البنية التحتية في Pinnacle Misr، وتدريب الاستجابة للحوادث في DEPI، ومختبر SOC متعدد الأجهزة باستخدام Wazuh وElastic وFortiGate.',
    explore: 'استعرض أعمالي', download: 'تحميل السيرة الذاتية',
    labTitle: 'بنية مختبر SOC المنزلي', labSubtitle: 'مسار عملي للاكتشاف: نشاط الجهاز يتحول إلى أدلة ثم إلى تنبيه تم التحقق منه.',
    endpoints: 'الأجهزة المراقبة', telemetry: 'جمع البيانات', siem: 'SIEM والاكتشاف', firewall: 'محيط الشبكة',
    endpointDetail: 'أجهزة و خوادم Windows', telemetryDetail: 'أحداث Sysmon وسجلات الوكلاء', siemDetail: 'Elastic وWazuh وقواعد KQL', firewallDetail: 'سياق الشبكة عبر FortiGate',
    labFlow: 'محاكاة هجوم ← فرز التنبيه ← ملاحظات التحقيق ← الربط مع MITRE ATT&CK ← التحقق من الاكتشاف',
    aboutTitle: 'من دعم تقنية المعلومات إلى SOC', aboutSubtitle: 'طالب أمن سيبراني ومرشح محلل SOC ومتدرب دعم تقنية المعلومات وإدارة الأنظمة، أبني خبرة عملية في العمليات الأمنية وبيئات تقنية المعلومات الفعلية.',
    aboutParagraphs: [
      'أنا طالب أمن سيبراني في الجامعة العربية المفتوحة، أبني مسارًا عمليًا في عمليات الفريق الأزرق. تشمل أساسياتي منهج CCNA وWindows Server وActive Directory وإدارة Linux.',
      'في مختبر SOC المنزلي، أبني رؤية واضحة باستخدام Sysmon وElastic SIEM، وأكتب وأضبط قواعد الاكتشاف وأعيد تنفيذ الأساليب للتحقق من التغطية، وأربط النتائج بـ MITRE ATT&CK.',
      'أتدرب حاليًا كمحلل استجابة للحوادث السيبرانية في DEPI، وأتعلم أساسيات الشبكات وأنظمة التشغيل وتقنيات الأمن والهجوم والاستجابة للحوادث والتحليل الجنائي الرقمي وعمليات SIEM/SOC. كما تم اختياري قائدًا لفريق مشروع تخرج من خمسة أعضاء.',
      'بالتوازي مع DEPI، أعمل متدرب دعم تقنية المعلومات وإدارة الأنظمة في Pinnacle Misr، وأدعم أكثر من 600 مستخدم في مكتبي القاهرة وفرع بالسعودية. أقوم بنشر الأجهزة وحل مشاكل الـendpoints وهواتف IP، وأساعد في Active Directory والشبكات والجدار الناري.'
    ],
    skillsTitle: 'لوحة قدرات SOC', skillsSubtitle: 'نظرة سريعة على طريقة جمعي للأدلة والتحقيق في النشاط وبناء الاكتشافات كممارس في الفريق الأزرق.',
    projectsTitle: 'مشاريعي', projectsSubtitle: 'نماذج مختارة من أعمالي على GitHub، تركز على هندسة الاكتشاف وبناء مختبر SOC وأساسيات أمن الشبكات.',
    contactTitle: 'تواصل معي', contactSubtitle: 'متاح للنقاش حول عمليات SOC وهندسة الاكتشاف ومشاريع الأمن السيبراني والتعاون.',
    projectFilter: ['كل المشاريع', 'SOC', 'الشبكات والأمن السيبراني'], viewGithub: 'عرض على GitHub',
    skillNames: ['هندسة الاكتشاف', 'SOC والاستجابة للحوادث', 'MITRE ATT&CK', 'الشبكات (CCNA)', 'الأنظمة والبنية التحتية', 'أتمتة الأمن والبرمجة النصية'],
    skillDescriptions: ['تحويل بيانات الأجهزة إلى اكتشافات تم اختبارها ويمكن تفسيرها.', 'فرز التنبيهات والتحقيق في السلوك وتوثيق النتائج.', 'ربط السلوك الملحوظ بالتقنيات والتحقق من التغطية.', 'فهم سياق الشبكة وراء كل حدث مشبوه.', 'بناء وتشغيل الأنظمة التي تنتج إشارات أمنية مفيدة.', 'استخدام سكربتات بسيطة لدعم التحقيق والعمل المتكرر في المختبر.'],
    stats: ['مستخدم تم دعمهم', 'جهاز تم نشره', 'تقارير برمجيات خبيثة', 'سنة التخرج المتوقعة'], currentExperience: 'الخبرة الحالية', active: 'نشط',
    form: { name: 'الاسم', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'الرسالة', send: 'إرسال الرسالة', sending: 'جارٍ الإرسال...', namePlaceholder: 'اسمك', subjectPlaceholder: 'استفسار عن مشروع', messagePlaceholder: 'أخبرني عن مشروعك...' },
    footer: 'مرشح محلل SOC يركز على عمليات الفريق الأزرق وهندسة الاكتشاف ومختبرات الأمن السيبراني العملية.', quickLinks: 'روابط سريعة', contactInfo: 'بيانات التواصل', rights: 'جميع الحقوق محفوظة.', madeWith: 'تم التصميم باستخدام',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  const toggleLanguage = () => setLanguage((value) => value === 'en' ? 'ar' : 'en');
  return <LanguageContext.Provider value={{ language, toggleLanguage, t: copy[language] }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
