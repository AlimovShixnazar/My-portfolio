/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Globe, 
  Cpu, 
  Layers,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  Languages,
  Code,
  Figma
} from 'lucide-react';

type Language = 'eng' | 'uz' | 'rus';
type Theme = 'dark' | 'light';

const TRANSLATIONS = {
  eng: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    heroSub: 'Full Stack Developer',
    heroDesc: 'Crafting digital experiences through elegant code and modern technologies. Specializing in React, Python, and scalable web architectures.',
    viewProjects: 'View Projects',
    getInTouch: 'Get in touch',
    journeyTitle: 'The Journey',
    journeyDesc1: 'As a developer based in Uzbekistan, I bridge the gap between technical complexity and intuitive design. My approach is rooted in clean architecture and a deep understanding of user behavior.',
    journeyDesc2: 'Whether it\'s building responsive web applications with React or developing robust backend solutions with Python, I strive for excellence in every line of code.',
    expertiseTitle: 'Expertise',
    expertiseSub: 'Tools & Technologies I use',
    worksTitle: 'Selected Works',
    worksSub: 'A glimpse into my portfolio',
    viewGithub: 'View all on GitHub',
    contactTitle: 'Let\'s build something',
    contactExtra: 'extraordinary.',
    emailMe: 'Email Me',
    github: 'GitHub',
    rights: 'All rights reserved.',
    createxDesc: 'A modern educational platform landing page with high-performance UI and smooth animations.',
    pizzaDesc: 'A fully functional e-commerce platform for a pizza shop with cart management and sleek design.',
    weatherDesc: 'A robust backend service for real-time weather data integration and processing.'
  },
  uz: {
    about: 'Haqida',
    skills: 'Ko\'nikmalar',
    projects: 'Loyihalar',
    contact: 'Aloqa',
    heroSub: 'Full Stack Dasturchi',
    heroDesc: 'Nafis kod va zamonaviy texnologiyalar orqali raqamli tajribalarni yaratish. React, Python va kengaytiriladigan veb-arxitekturalarga ixtisoslashgan.',
    viewProjects: 'Loyihalarni ko\'rish',
    getInTouch: 'Bog\'lanish',
    journeyTitle: 'Sayohat',
    journeyDesc1: 'O\'zbekistonda istiqomat qiluvchi dasturchi sifatida men texnik murakkablik va intuitiv dizayn o\'rtasidagi tafovutni bartaraf etaman. Mening yondashuvim toza arxitektura va foydalanuvchi xatti-harakatlarini chuqur tushunishga asoslangan.',
    journeyDesc2: 'React bilan moslashuvchan veb-ilovalarni yaratish yoki Python bilan mustahkam backend yechimlarini ishlab chiqish bo\'ladimi, men kodning har bir satrida mukammallikka intilaman.',
    expertiseTitle: 'Ekspertiza',
    expertiseSub: 'Men foydalanadigan vositalar va texnologiyalar',
    worksTitle: 'Tanlangan ishlar',
    worksSub: 'Mening portfoliomdan bir ko\'rinish',
    viewGithub: 'GitHub-da barchasini ko\'rish',
    contactTitle: 'Keling, birgalikda',
    contactExtra: 'ajoyib narsa yarataylik.',
    emailMe: 'Menga elektron pochta yuboring',
    github: 'GitHub',
    rights: 'Barcha huquqlar himoyalangan.',
    createxDesc: 'Yuqori samarali UI va silliq animatsiyalarga ega zamonaviy ta\'lim platformasi landing sahifasi.',
    pizzaDesc: 'Savatni boshqarish va zamonaviy dizaynga ega pitsa do\'koni uchun to\'liq ishlaydigan elektron tijorat platformasi.',
    weatherDesc: 'Haqiqiy vaqtdagi ob-havo ma\'lumotlarini integratsiyalash va qayta ishlash uchun mustahkam backend xizmati.'
  },
  rus: {
    about: 'Обо мне',
    skills: 'Навыки',
    projects: 'Проекты',
    contact: 'Контакты',
    heroSub: 'Full Stack Разработчик',
    heroDesc: 'Создание цифрового опыта с помощью элегантного кода и современных технологий. Специализируюсь на React, Python и масштабируемых веб-архитектурах.',
    viewProjects: 'Посмотреть проекты',
    getInTouch: 'Связаться',
    journeyTitle: 'Путь',
    journeyDesc1: 'Как разработчик из Узбекистана, я устраняю разрыв между технической сложностью и интуитивно понятным дизайном. Мой подход основан на чистой архитектуре и глубоком понимании поведения пользователей.',
    journeyDesc2: 'Будь то создание адаптивных веб-приложений на React или разработка надежных серверных решений на Python, я стремлюсь к совершенству в каждой строке кода.',
    expertiseTitle: 'Экспертиза',
    expertiseSub: 'Инструменты и технологии, которые я использую',
    worksTitle: 'Избранные работы',
    worksSub: 'Взгляд на мое портфолио',
    viewGithub: 'Посмотреть все на GitHub',
    contactTitle: 'Давайте создадим что-то',
    contactExtra: 'необычайное.',
    emailMe: 'Написать мне',
    github: 'GitHub',
    rights: 'Все права защищены.',
    createxDesc: 'Современная целевая страница образовательной платформы с высокопроизводительным интерфейсом и плавной анимацией.',
    pizzaDesc: 'Полностью функциональная платформа электронной коммерции для пиццерии с управлением корзиной и стильным дизайном.',
    weatherDesc: 'Надежный бэкэнд-сервис для интеграции и обработки данных о погоде в реальном времени.'
  }
};

const SKILLS = [
  { name: 'HTML', category: 'Frontend', icon: <Globe className="w-5 h-5" /> },
  { name: 'CSS', category: 'Frontend', icon: <Layers className="w-5 h-5" /> },
  { name: 'JS', category: 'Frontend', icon: <Code2 className="w-5 h-5" /> },
  { name: 'ReactJS', category: 'Frontend', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Tailwind', category: 'Frontend', icon: <Layers className="w-5 h-5" /> },
  { name: 'Python', category: 'Backend/Data', icon: <Terminal className="w-5 h-5" /> },
  { name: 'NumPy', category: 'Backend/Data', icon: <Database className="w-5 h-5" /> },
  { name: 'Pandas', category: 'Backend/Data', icon: <Database className="w-5 h-5" /> },
  { name: 'Git', category: 'Tools', icon: <Github className="w-5 h-5" /> },
  { name: 'GitHub', category: 'Tools', icon: <Github className="w-5 h-5" /> },
  { name: 'VS Code', category: 'Tools', icon: <Code className="w-5 h-5" /> },
  { name: 'Figma', category: 'Design', icon: <Figma className="w-5 h-5" /> },
];

const LANGUAGES_SKILLS = [
  { name: 'Uzbek', level: 'Advanced', percentage: 95 },
  { name: 'English', level: 'Intermediate', percentage: 65 },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('eng');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const PROJECTS = [
    {
      title: "Createx",
      description: t.createxDesc,
      tags: ["React", "Tailwind", "Motion"],
      link: "https://createx-seven.vercel.app/"
    },
    {
      title: "Pizza Open Shop",
      description: t.pizzaDesc,
      tags: ["React", "Tailwind", "State Management"],
      link: "https://pizza-open-shop.vercel.app/"
    },
    {
      title: "Weather API",
      description: t.weatherDesc,
      tags: ["Python", "API", "Backend"],
      link: "https://github.com/AlimovShixnazar/weather-api"
    }
  ];

  const NavItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-200 uppercase tracking-widest"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className={`min-h-screen selection:bg-white selection:text-black transition-colors duration-300 ${theme === 'light' ? 'bg-[#f5f5f5] text-[#1a1a1a]' : 'bg-[#050505] text-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? (theme === 'dark' ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10') + ' backdrop-blur-md py-4 border-b' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-serif italic font-bold tracking-tighter"
          >
            Alimov Shixnazar
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="#about">{t.about}</NavItem>
            <NavItem href="#skills">{t.skills}</NavItem>
            <NavItem href="#projects">{t.projects}</NavItem>
            <NavItem href="#contact">{t.contact}</NavItem>
            
            <div className="h-4 w-[1px] bg-white/20 mx-2" />

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 p-2 rounded-full hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <Languages className="w-4 h-4" />
                {lang}
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute right-0 mt-2 py-2 w-24 rounded-xl shadow-xl border border-white/10 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
                  >
                    {(['eng', 'uz', 'rus'] as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors ${lang === l ? 'text-orange-500' : ''}`}
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              className={`transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 md:hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            <NavItem href="#about">{t.about}</NavItem>
            <NavItem href="#skills">{t.skills}</NavItem>
            <NavItem href="#projects">{t.projects}</NavItem>
            <NavItem href="#contact">{t.contact}</NavItem>
            <div className="flex gap-4 pt-8">
              {(['eng', 'uz', 'rus'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setIsMenuOpen(false);
                  }}
                  className={`text-xs font-bold uppercase tracking-widest ${lang === l ? 'text-orange-500' : 'opacity-60'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 pt-20 md:pt-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.5em] uppercase opacity-40 mb-10">
              {t.heroSub}
            </span>
            <h1 className="text-6xl md:text-9xl font-serif italic font-bold leading-none mb-8 tracking-tighter">
              Shixnazar <br />
              <span className="text-gradient">Alimov</span>
            </h1>
            <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              {t.heroDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-4 font-semibold rounded-full transition-all ${theme === 'dark' ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
              >
                {t.viewProjects}
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border border-current opacity-60 hover:opacity-100 rounded-full hover:bg-white/5 transition-all text-sm uppercase tracking-widest"
              >
                {t.getInTouch}
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-current to-transparent opacity-40" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-8">{t.journeyTitle}</h2>
            <div className="space-y-6 opacity-60 text-lg leading-relaxed font-light">
              <p>{t.journeyDesc1}</p>
              <p>{t.journeyDesc2}</p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                {LANGUAGES_SKILLS.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{lang.name}</span>
                      <span className="opacity-40 text-sm">{lang.level}</span>
                    </div>
                    <div className="h-1 w-full bg-current opacity-10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-current opacity-100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img 
              src="https://picsum.photos/seed/shixnazar/800/800" 
              alt="Profile" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-4">{t.expertiseTitle}</h2>
            <p className="opacity-40 uppercase tracking-[0.2em] text-sm">{t.expertiseSub}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="skill-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group"
              >
                <div className="mb-4 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-medium mb-1">{skill.name}</h3>
                <span className="text-[10px] uppercase tracking-widest opacity-30">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-4">{t.worksTitle}</h2>
              <p className="opacity-40 uppercase tracking-[0.2em] text-sm">{t.worksSub}</p>
            </div>
            <a href="https://github.com/AlimovShixnazar" className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-all">
              {t.viewGithub} <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 rounded-2xl bg-white/5">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <a href={project.link} className="opacity-40 hover:opacity-100 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-2xl font-serif italic font-bold mb-4">{project.title}</h3>
                <p className="opacity-50 font-light mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full opacity-40">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif italic font-bold mb-12">{t.contactTitle} <span className="text-gradient">{t.contactExtra}</span></h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
            <a href="mailto:alimovshixnazar8@gmail.com" className="group flex items-center gap-4 text-xl font-light opacity-60 hover:opacity-100 transition-all">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              {t.emailMe}
            </a>
            <a href="https://github.com/AlimovShixnazar" className="group flex items-center gap-4 text-xl font-light opacity-60 hover:opacity-100 transition-all">
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                <Github className="w-6 h-6" />
              </div>
              {t.github}
            </a>
          </div>

          <div className="pt-20 border-t border-white/10">
            <p className="opacity-20 text-xs uppercase tracking-[0.5em]">
              © {new Date().getFullYear()} Shixnazar Alimov. {t.rights}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

