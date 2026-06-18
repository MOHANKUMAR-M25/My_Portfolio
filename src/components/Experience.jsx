// Cognizant joining date — update this if it changes.
const COGNIZANT_START = new Date('2025-11-27');

// Builds a live "<startYear> – Present · <tenure>" label from a start date.
// Recomputed every time the app loads, so the experience stays current.
const formatTenure = (start) => {
  const now = new Date();
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const rem = months % 12;
  const yearLabel = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthLabel = rem > 0 ? `${rem} month${rem > 1 ? 's' : ''}` : '';
  const tenure = [yearLabel, monthLabel].filter(Boolean).join(' ') || 'less than a month';

  return `${start.getFullYear()} – Present · ${tenure}`;
};

const experiences = [
  {
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    period: formatTenure(COGNIZANT_START),
    mode: 'Full-time',
    current: true,
    description:
      'Technology professional working across the full web development cycle — from designing intuitive interfaces to writing clean, maintainable code and ensuring quality through thorough testing. Core strengths in web development, frontend engineering, and test automation with Playwright & TypeScript. Graduated from Cognizant Academy.',
    tags: ['React', 'Vite', 'TypeScript', 'Playwright', 'Java', 'Jenkins', 'CI/CD'],
    projectGroups: [
      {
        title: 'Professional Projects',
        subtitle: 'Real-time client work',
        items: [
          {
            name: 'U.S. Bank – Platform Money Movement',
            type: 'Banking · Digital Transformation',
            period: 'Present',
            description:
              'Improving the bank’s customer bill-payment experience through digital transformation across three areas: Desktop — revamping the legacy online banking platform; Mobile — building a mobile application from scratch; and Tux — enhancing the experience for users on tablet and mobile web.',
            tech: ['Online Banking', 'Desktop', 'Mobile App', 'Tablet / Mobile Web'],
          },
        ],
      },
      {
        title: 'Demo Projects',
        subtitle: 'Training & proof-of-concept builds',
        items: [
          {
            name: 'HR Onboarding Portal',
            type: 'Development Project · Full-Stack Developer',
            period: 'Jun 2026',
            description:
              'Cognizant Employee Onboarding Portal — a demo web app with AI-agent-driven onboarding. Built a React + Vite frontend (auth, candidate import/edit, onboarding flow, dashboard, and an offline “Onboarding Agent” chatbot) backed by a zero-dependency Java REST server running a rule-based agent that reasons per hire, retrieves matching policy (RAG), adapts to contractor/EU/intern cases, and flags compliance. Added CSV-based persistence, EmailJS welcome-email integration, and roster edit/save.',
            tech: ['React', 'Vite', 'Java', 'REST API', 'EmailJS', 'AI Agent'],
          },
          {
            name: 'Identify New Bikes',
            type: 'Test Automation Project · QA / SDET',
            period: 'Feb 2026',
            description:
              'An automation suite that extracts real-time automotive data and validates UI security resilience. Built modular Playwright + TypeScript scripts to track upcoming Honda bikes under ₹4 Lac, analyse pre-owned car listings in Chennai, and simulate a Google login flow with invalid credentials. Handled dynamic frames, nested iframes, multiple windows and async pop-ups; integrated runs into Jenkins CI/CD using the Page Object Model, and reported defects from HTML reports, logs and screenshots.',
            tech: ['Playwright', 'TypeScript', 'Jenkins', 'CI/CD', 'Page Object Model'],
          },
        ],
      },
    ],
  },
  // {
  //   role: 'Sales Executive (Part-time)',
  //   company: 'Mobile Showroom',
  //   period: 'Sep 2022 – Dec 2022 · 4 months',
  //   mode: 'Offline',
  //   description:
  //     'Worked as a part-time sales executive, gaining hands-on experience in sales and marketing while engaging directly with customers.',
  //   tags: ['Sales', 'Marketing'],
  // },
  // {
  //   role: 'Ethical Hacking Intern',
  //   company: 'VGM Soft Tech',
  //   period: 'Sep 2022 · 2 weeks',
  //   mode: 'Online',
  //   description:
  //     'Completed a focused internship learning the fundamentals of ethical hacking and core cybersecurity concepts.',
  //   tags: ['Ethical Hacking', 'Cybersecurity'],
  // },
  // {
  //   role: 'Machine Learning Intern',
  //   company: 'Towards Technology',
  //   period: 'May 2022 – Jun 2022 · 2 weeks',
  //   mode: 'Online',
  //   description:
  //     'Learnt the foundations of machine learning, including core concepts and practical model-building techniques.',
  //   tags: ['Machine Learning', 'Python'],
  // },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#0033A0] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/40 rounded-full px-5 py-1.5 text-sm text-white font-bold mb-6 bg-white/10 backdrop-blur-sm">
            Work Experience
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Where I’ve worked
          </h2>
          <p className="text-blue-50 text-base md:text-lg font-semibold max-w-xl leading-relaxed">
            Currently a{' '}
            <span className="text-white font-black">Programmer Analyst Trainee</span> at Cognizant.
            Reach me at{' '}
            <a
              href="mailto:mohankumar.m2@cognizant.com"
              className="text-white font-black underline underline-offset-4 decoration-2 hover:text-cyan-300 transition-colors break-all"
            >
              mohankumar.m2@cognizant.com
            </a>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-0.5 bg-black/30"></div>

          <div className="flex flex-col gap-8 md:gap-10">
            {experiences.map((exp, index) => (
              <div
                key={exp.company + exp.role}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative pl-10 md:pl-16"
              >
                {/* Dot */}
                <span
                  className={`absolute left-0 top-6 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-[#0033A0] z-10 ${
                    exp.current ? 'bg-black animate-pulse' : 'bg-white'
                  }`}
                ></span>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0033A0] text-white">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#0033A0] font-bold text-base md:text-lg mt-0.5">
                        {exp.company}
                        <span className="text-gray-400 font-medium"> · {exp.mode}</span>
                      </p>
                    </div>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap sm:text-right shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Projects within this role, split into partitions */}
                  {exp.projectGroups && exp.projectGroups.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-8">
                      {exp.projectGroups.map((group) => (
                        <div key={group.title}>
                          <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                            <p className="text-xs font-black uppercase tracking-widest text-[#0033A0]">
                              {group.title}
                            </p>
                            {group.subtitle && (
                              <span className="text-[11px] font-medium text-gray-400">
                                · {group.subtitle}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col gap-4">
                            {group.items.map((project) => (
                              <div
                                key={project.name}
                                className="rounded-xl bg-[#f7f7f7] border border-gray-100 p-5 hover:border-[#0033A0]/40 transition-colors duration-300"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                  <h4 className="text-base md:text-lg font-black text-gray-900 tracking-tight">
                                    {project.name}
                                  </h4>
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap">
                                    {project.period}
                                  </span>
                                </div>
                                <p className="text-[#0033A0] font-bold text-xs uppercase tracking-wide mb-3">
                                  {project.type}
                                </p>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
                                  {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {project.tech.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#0033A0]/10 text-[#0033A0]"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative star */}
      <div className="absolute top-12 right-8 md:right-20 text-white opacity-20 animate-pulse pointer-events-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default Experience;
