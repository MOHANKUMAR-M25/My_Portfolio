const certifications = [
  {
    category: 'Google Cloud Partner Specialist',
    items: [
      'Gemini Enterprise Agent Development',
      'Gemini Enterprise Deployment',
    ],
  },
  {
    category: 'Databricks',
    items: [
      'Certified Generative AI Engineer Associate',
    ],
  },
  {
    category: 'Anthropic Claude',
    items: [
      'Certified Architect — Foundations',
    ],
  },
  {
    category: 'OpenAI Partner Skills',
    items: [
      'API Expert – Building and working with AI-powered applications using APIs',
      'Codex Expert – Exploring AI-assisted software development and coding workflows',
      'ChatGPT Expert – Leveraging ChatGPT for productivity, problem-solving, and AI-powered workflows',
    ],
  },
  {
    category: 'Hackathon & Competitions',
    items: [
      'Hackathon — Neuro® AI Multi-Agent Accelerator (neuro-san), Track 2',
    ],
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 bg-white shadow-sm">
            Certifications & Skills
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-5">
            Professional Certifications
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-semibold max-w-xl leading-relaxed">
            Industry-recognized certifications in AI, cloud platforms, and enterprise development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.category}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-[#0033A0]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0033A0] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight flex-1">
                  {cert.category}
                </h3>
              </div>

              {/* Certification Items */}
              <ul className="space-y-3">
                {cert.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 text-sm md:text-base font-medium leading-relaxed"
                  >
                    <span className="text-[#0033A0] font-black mt-1.5 shrink-0">🔹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="absolute top-20 right-8 md:right-20 text-gray-100 opacity-40 pointer-events-none">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
