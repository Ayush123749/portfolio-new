import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Award, Bot, Check,
  FileText, GraduationCap, Layers3,
  Linkedin, Mail, Menu, Network, Phone, Radio, ShieldCheck, Sparkles,
  Terminal, X,
} from 'lucide-react'

const projects = [
  {
    number: '01', title: 'Hierarchical Graph RAG', kind: 'RETRIEVAL SYSTEM',
    description: 'Production deployment of the live telecom knowledge assistant for 3GPP Rel-19, built to move from document retrieval toward structured, multi-level reasoning.',
    stack: ['Python', 'Knowledge Graphs', 'RAG'], tone: 'graph',
    status: 'LIVE IN PRODUCTION', liveUrl: 'https://rag-system-pearl-alpha.vercel.app/',
  },
  {
    number: '02', title: 'QA Automation Pipeline', kind: 'TEST ENGINEERING',
    description: 'A local HTTP data server paired with focused Playwright suites for UI, DOM structure, schema, and API regression checks.',
    stack: ['Node.js', 'Playwright', 'TypeScript'], tone: 'terminal',
    status: 'INFORMATIONAL · NOT DEPLOYED',
  },
  {
    number: '03', title: 'Alumni–Student Connect', kind: 'AGENTIC PLATFORM',
    description: 'A government-backed mentorship platform connecting learners and alumni through matching, real-time chat, and video.',
    stack: ['Python', 'Matching', 'Real-time'], tone: 'network',
    status: 'INFORMATIONAL · NOT DEPLOYED',
  },
  {
    number: '04', title: 'Multimodal Captioning', kind: 'VISION + LANGUAGE',
    description: 'An image-to-text pipeline using BLIP and Transformers, tuned for context-aware captions with near real-time inference.',
    stack: ['BLIP', 'Python', 'Transformers'], tone: 'vision',
    status: 'INFORMATIONAL · NOT DEPLOYED',
  },
]

const skillGroups = {
  'AI & Retrieval': ['Hierarchical Graph RAG', 'Agentic workflows', 'LangChain', 'ChromaDB', 'llama.cpp', 'Ollama', 'Embeddings', 'Semantic search'],
  'Engineering': ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'REST APIs', 'MySQL', 'SQLite', 'C'],
  'Quality & Web': ['Playwright', 'Autonomous testing', 'HTML', 'CSS', 'Tailwind CSS', 'Regression testing', 'Schema validation'],
  'Data & ML': ['Scikit-learn', 'Pandas', 'BLIP', 'Hugging Face', 'Prompt engineering', 'Multimodal AI'],
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: 'easeOut' as const } },
}

function SectionHeading({ index, eyebrow, title, detail }: { index: string; eyebrow: string; title: string; detail?: string }) {
  return (
    <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-index"><span>{index}</span><i /></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {detail && <p className="section-detail">{detail}</p>}
      </div>
    </motion.div>
  )
}

function ProjectVisual({ tone }: { tone: string }) {
  return (
    <div className={`project-visual visual-${tone}`} aria-hidden="true">
      <div className="visual-top"><span className="visual-dot" /><span className="visual-dot" /><span className="visual-dot" /><span className="visual-label">AYUSH / LAB</span><span className="visual-live">LIVE SYSTEM</span></div>
      {tone === 'graph' && <div className="graph-scene"><div className="graph-orbit orbit-one" /><div className="graph-orbit orbit-two" /><span className="graph-node node-a">3GPP</span><span className="graph-node node-b">RAG</span><span className="graph-node node-c">Rel-19</span><span className="graph-node node-d">Context</span><span className="graph-node node-e">Answer</span><div className="graph-core"><Network size={22} /></div></div>}
      {tone === 'terminal' && <div className="terminal-scene"><div className="terminal-path"><span>›</span> npm run test:e2e</div><div className="terminal-line muted">starting local data server...</div><div className="terminal-line ok">✓ server ready <b>127.0.0.1:4173</b></div><div className="terminal-line ok">✓ dataset schema valid <b>25 entries</b></div><div className="terminal-line ok">✓ browser checks passed <b>1.8s</b></div><div className="terminal-footer">5 suites <span>·</span> 0 failures <span>·</span> chromium</div></div>}
      {tone === 'network' && <div className="mentor-scene"><div className="mentor-card mentor-student"><span className="avatar-mark">S</span><span><b>Student</b><small>Computer engineering</small></span></div><div className="mentor-link"><i /><i /><i /><i /><i /></div><div className="mentor-center"><Sparkles size={20} /></div><div className="mentor-card mentor-guide"><span className="avatar-mark">M</span><span><b>Mentor match</b><small>AI-assisted pairing</small></span><Check size={14} /></div></div>}
      {tone === 'vision' && <div className="vision-scene"><div className="vision-image"><div className="vision-horizon" /><div className="vision-sun" /><div className="vision-mountain mountain-back" /><div className="vision-mountain mountain-front" /></div><div className="vision-caption"><span>GENERATED CAPTION</span><p>A quiet landscape beneath a soft evening sky.</p><div className="caption-meter"><i /></div><small>BLIP · 94.2% confidence</small></div></div>}
      <div className="visual-corner">PROJECT {tone === 'graph' ? 'GRAPH / 01' : tone === 'terminal' ? 'QA / 02' : tone === 'network' ? 'AGENT / 03' : 'VISION / 04'}</div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [skillTab, setSkillTab] = useState<keyof typeof skillGroups>('AI & Retrieval')
  const [documentPreview, setDocumentPreview] = useState<'resume' | 'certificate' | 'oracle' | 'deloitte' | null>(null)
  const [projectPreview, setProjectPreview] = useState<'rag' | null>(null)
  const navLinks = [['About', 'about'], ['Work', 'work'], ['Research', 'research'], ['Journey', 'journey'], ['Skills', 'skills']]

  return (
    <div className="site-shell">
      <div className="ambient ambient-a" /><div className="ambient ambient-b" />
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Ayush Raj home"><span className="brand-name">Ayush Raj<small>AI / ENGINEERING</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <a className="header-cta" href="https://drive.google.com/file/d/1byVmT0CGr5US9I45zYTj00YVXYIHxozP/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FileText size={15} /> Resume <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} aria-label="Mobile navigation">{navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}<a href="https://drive.google.com/file/d/1byVmT0CGr5US9I45zYTj00YVXYIHxozP/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume<FileText size={15} /></a></motion.nav>}</AnimatePresence>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}><span className="availability-dot" /> OPEN TO OPPORTUNITIES <span className="availability-divider">/</span> 2026</motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>Applied AI engineer · QA automation</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.65 }}>I build systems<br />that <span>reason</span>,<br />retrieve &amp; <span>work.</span></motion.h1>
            <motion.p className="hero-summary" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>I’m Ayush Raj, a computer &amp; communication engineering graduate focused on agentic AI, advanced retrieval, and dependable software.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}><a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a></motion.div>
            <motion.button className="hero-proof" type="button" aria-label="Preview IEEE ACROSET 2025 author certificate" onClick={() => setDocumentPreview('certificate')} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}><span className="proof-icon"><Award size={16} /></span><span><b>IEEE published research</b><small>ACROSET 2025 · Paper ID 0896</small></span><ArrowUpRight size={14} className="proof-arrow" /></motion.button>
            <div className="featured-certificates hero-certificates" aria-label="Certificate previews">
              <span className="featured-certificates-label">CERTIFICATE PREVIEWS</span>
              <button className="research-document-link" type="button" onClick={() => setDocumentPreview('oracle')}>Preview Oracle Agentic AI certificate <ArrowUpRight size={14} /></button>
              <button className="research-document-link" type="button" onClick={() => setDocumentPreview('deloitte')}>Preview Deloitte Cyber Security certificate <ArrowUpRight size={14} /></button>
            </div>
            <div className="hero-project-preview" aria-label="Live project preview">
              <span className="featured-certificates-label">LIVE PROJECT PREVIEW</span>
              <button className="research-document-link" type="button" onClick={() => setProjectPreview('rag')}>Preview Hierarchical Graph RAG System <ArrowUpRight size={14} /></button>
            </div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.34, duration: 0.8 }}>
            <div className="art-label art-label-top"><span>FIELD NOTES</span><span>26°N / 86°E</span></div>
            <div className="hero-orbit orbit-outer" /><div className="hero-orbit orbit-inner" />
            <div className="hero-art-center"><div className="hero-code">{'{'}<br /><span>AI</span><br /><i>&lt;/&gt;</i><br />{' }'}</div></div>
            <motion.div className="float-chip chip-rag" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><Network size={14} /><span>GRAPH RAG</span><b>01</b></motion.div>
            <motion.div className="float-chip chip-agent" animate={{ y: [0, 5, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><Bot size={14} /><span>AGENTIC AI</span><b>02</b></motion.div>
            <motion.div className="float-chip chip-test" animate={{ y: [0, -4, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}><ShieldCheck size={14} /><span>QUALITY</span><b>03</b></motion.div>
            <div className="art-label art-label-bottom"><span>BUILD / TEST / REASON</span><span>EST. 2022</span></div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
          <div className="hero-side-note">PORTFOLIO / AYUSH RAJ <span>—</span> 2026</div>
        </section>

        <section className="intro-strip" id="about"><div className="section-wrap intro-inner"><span className="eyebrow">01 / A LITTLE CONTEXT</span><p>From <em>research papers</em> to systems people can use.<br />I work across the full path, from an idea to a tested product.</p><span className="intro-location"><Radio size={13} /> MADHEPURA, INDIA</span></div></section>

        <section className="work-section section-wrap" id="work">
          <SectionHeading index="02" eyebrow="SELECTED PROJECTS / 2024—26" title="Built to be useful." detail="The Graph RAG system is live; other entries are informational project summaries, not production deployments." />
          <div className="project-grid">{projects.map((project, index) => {
            const cardContent = <>
              <ProjectVisual tone={project.tone} />
              <div className="project-info">
                <div className="project-meta"><span>{project.kind}</span><span>{project.number} / 04</span></div>
                <div className="project-status-row">
                  <span className={project.liveUrl ? 'project-status project-status-live' : 'project-status project-status-informational'}>{project.status}</span>
                  {project.liveUrl && <span className="project-link">Open live project <ArrowUpRight size={13} /></span>}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom"><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
              </div>
            </>
            const animationProps = {
              initial: 'hidden' as const,
              whileInView: 'visible' as const,
              viewport: { once: true, amount: 0.12 },
              variants: { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.55 } } },
              whileHover: { y: -5 },
            }
            return project.liveUrl
              ? <motion.a className="project-card project-card-live" key={project.number} href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project in a new tab`} {...animationProps}>{cardContent}</motion.a>
              : <motion.article className="project-card" key={project.number} {...animationProps}>{cardContent}</motion.article>
          })}</div>
          <div className="work-footnote"><span>FOUR PROJECTS / DIFFERENT PROBLEMS / ONE THROUGHLINE</span><span className="footnote-rule" /><span>SCROLL TO CONTINUE ↓</span></div>
        </section>

        <section className="research-section" id="research"><div className="section-wrap research-wrap">
          <SectionHeading index="03" eyebrow="RESEARCH / PUBLICATION" title="Grounded in research." detail="Turning a technical idea into a published system." />
          <motion.article className="research-feature" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} variants={fadeUp}>
            <div className="research-stamp"><span>IEEE</span><i /><span>2025</span></div>
            <div className="research-content"><div className="research-tags"><span><span className="tiny-dot" /> PUBLISHED RESEARCH</span><span>ACROSET 2025</span></div><h3>Intelligent Platform to Interconnect Alumni and Students for Technical Education</h3><p>Research on a mentorship platform connecting students with alumni through an intelligent matching approach, developed as a government-backed initiative for Rajasthan.</p><div className="research-footer"><span>PAPER ID <b>0896</b></span><span>IEEE International Conference on Advances in Computing Research in Science, Engineering and Technology</span></div><button className="research-document-link" type="button" onClick={() => setDocumentPreview('certificate')}>Preview ACROSET 2025 certificate <ArrowUpRight size={14} /></button></div>
            <div className="research-mark"><Layers3 size={25} /><span>KNOWLEDGE<br />IN MOTION</span></div>
          </motion.article>
          <div className="research-domains"><span>RESEARCH INTERESTS</span>{['Agentic systems', 'Knowledge retrieval', 'Multimodal AI', 'AI for education'].map((domain) => <span className="domain-pill" key={domain}>{domain}<ArrowUpRight size={12} /></span>)}</div>
        </div></section>

        <section className="journey-section section-wrap" id="journey">
          <SectionHeading index="04" eyebrow="EDUCATION / RECOGNITION" title="The path so far." detail="An engineering foundation, a research mindset, and a bias toward building." />
          <div className="timeline">
            <motion.article className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}><div className="timeline-date">2022 — 2026 <span>EDUCATION</span></div><div className="timeline-node"><GraduationCap size={15} /></div><div className="timeline-body"><h3>B.Tech, Computer &amp; Communication Engineering</h3><p className="timeline-org">Manipal University Jaipur <span>·</span> Rajasthan, India</p><p>Building a broad engineering foundation across computing and communication, with independent work in applied AI, retrieval systems, and software quality.</p><div className="timeline-tags"><span>Computer Engineering</span><span>Applied AI</span><span>Software Systems</span></div></div></motion.article>
            <motion.article className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}><div className="timeline-date">AUG 2026 <span>CERTIFICATION</span></div><div className="timeline-node"><Bot size={15} /></div><div className="timeline-body"><h3>Oracle Certified Foundations Associate: Agentic AI</h3><p className="timeline-org">Oracle Corporation <span>·</span> Agent architecture &amp; tooling</p><p>Foundations in autonomous agent planning, memory, tool integration, function calling, guardrails, and production safety.</p><div className="timeline-tags"><span>Autonomous agents</span><span>Function calling</span><span>AI governance</span></div><button className="research-document-link" type="button" onClick={() => setDocumentPreview('oracle')}>Preview Oracle certificate <ArrowUpRight size={14} /></button></div></motion.article>
            <motion.article className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}><div className="timeline-date">NOV 2025 <span>VIRTUAL EXPERIENCE</span></div><div className="timeline-node"><ShieldCheck size={15} /></div><div className="timeline-body"><h3>Cyber Security Virtual Experience</h3><p className="timeline-org">Deloitte <span>·</span> Forage</p><p>Practiced threat analysis, risk mitigation, and security workflows through an interactive simulation.</p><div className="timeline-tags"><span>Threat analysis</span><span>Risk mitigation</span><span>Security practices</span></div><button className="research-document-link" type="button" onClick={() => setDocumentPreview('deloitte')}>Preview Deloitte certificate <ArrowUpRight size={14} /></button></div></motion.article>
          </div>
        </section>

        <section className="skills-section" id="skills"><div className="section-wrap skills-wrap">
          <SectionHeading index="05" eyebrow="TOOLS / METHODS / SYSTEMS" title="The working set." detail="Tools are only useful when they help solve the right problem." />
          <div className="skills-layout"><div className="skill-tabs" role="tablist" aria-label="Skill categories">{Object.keys(skillGroups).map((group) => <button key={group} className={skillTab === group ? 'skill-tab active' : 'skill-tab'} role="tab" aria-selected={skillTab === group} onClick={() => setSkillTab(group as keyof typeof skillGroups)}>{group}<ArrowUpRight size={13} /></button>)}</div><AnimatePresence mode="wait"><motion.div className="skill-cloud" key={skillTab} role="tabpanel" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>{skillGroups[skillTab].map((skill, index) => <motion.span key={skill} className="skill-pill" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.035 }}><span className="skill-marker">{String(index + 1).padStart(2, '0')}</span>{skill}</motion.span>)}</motion.div></AnimatePresence></div>
          <div className="skills-note"><Terminal size={14} /><span>ALWAYS LEARNING</span><i /><span>READ DOCS</span><i /><span>SHIP CAREFULLY</span></div>
        </div></section>

        <section className="contact-section section-wrap" id="contact">
          <SectionHeading index="06" eyebrow="CONTACT / COLLABORATION" title="Have a good problem?" detail="I’m always interested in thoughtful teams and ambitious ideas." />
          <div className="contact-grid"><div className="contact-copy"><p>Whether it’s an applied AI challenge, a system that needs better retrieval, or a product that needs to be tested properly, I’d be glad to hear about it.</p><div className="contact-details"><span><i>BASED IN</i>Madhepura, Bihar, India</span><span><i>AVAILABILITY</i>Open to remote / hybrid</span></div></div>
            <div className="contact-methods" aria-label="Contact Ayush Raj"><a className="contact-method" href="mailto:ayush123749122@gmail.com"><span className="contact-method-icon"><Mail size={17} /></span><span><small>EMAIL</small><b>ayush123749122@gmail.com</b></span><ArrowUpRight size={15} /></a><a className="contact-method" href="tel:+919122985107"><span className="contact-method-icon"><Phone size={17} /></span><span><small>PHONE</small><b>+91 91229 85107</b></span><ArrowUpRight size={15} /></a><a className="contact-method" href="https://linkedin.com/in/ayush-raj-846671252" target="_blank" rel="noreferrer"><span className="contact-method-icon"><Linkedin size={17} /></span><span><small>LINKEDIN</small><b>Connect with Ayush</b></span><ArrowUpRight size={15} /></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="section-wrap footer-inner"><a href="#home" className="brand footer-brand"><span className="brand-name">Ayush Raj<small>ENGINEERED WITH INTENT</small></span></a><span className="footer-center">APPLIED AI <i>·</i> RETRIEVAL <i>·</i> QUALITY</span><div className="footer-right"><span>© {new Date().getFullYear()} AYUSH RAJ</span><a href="#home" aria-label="Back to top"><ArrowUpRight size={16} /></a></div></div></footer>
      <AnimatePresence>
        {(documentPreview || projectPreview) && <motion.div className="document-modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) { setDocumentPreview(null); setProjectPreview(null); } }}>
          <motion.section className="document-modal" role="dialog" aria-modal="true" aria-labelledby="document-modal-title" initial={{ opacity: 0, y: 18, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.99 }}>
            <header className="document-modal-header"><div><span className="eyebrow">{projectPreview === 'rag' ? 'LIVE PROJECT / PRODUCTION DEPLOYMENT' : 'DOCUMENT PREVIEW / VIEW ONLY'}</span><h2 id="document-modal-title">{documentPreview === 'resume' ? 'Ayush Raj — Resume' : documentPreview === 'oracle' ? 'Oracle Agentic AI — Certificate' : documentPreview === 'deloitte' ? 'Deloitte Cyber Security — Certificate' : documentPreview === 'certificate' ? 'ACROSET 2025 — Author Certificate' : projectPreview === 'rag' ? 'Hierarchical Graph RAG — Live System' : ''}</h2></div><button className="document-close" type="button" aria-label="Close preview" onClick={() => { setDocumentPreview(null); setProjectPreview(null); }}><X size={18} /></button></header>
            {documentPreview === 'resume' ? <div className="resume-preview">
              <div className="resume-preview-intro"><span>AYUSH RAJ</span><p>Applied AI · Agentic Systems · QA Automation</p><small>Madhepura, Bihar, India · ayush123749122@gmail.com · +91 91229 85107</small></div>
              <div className="resume-preview-section"><h3>Summary</h3><p>Computer &amp; Communication Engineering graduate focused on LLM agents, multimodal architectures, and Hierarchical Graph RAG. Experienced with LangChain, vector databases, open-source LLM tooling, full-stack integration, and automated QA using Playwright.</p></div>
              <div className="resume-preview-section"><h3>Education</h3><div className="resume-preview-row"><b>B.Tech, Computer &amp; Communication Engineering</b><span>2022—2026</span></div><p>Manipal University, Jaipur</p><div className="resume-preview-row"><b>Class XII</b><span>2021—2022</span></div><p>RN College, B. Nagar, Madhuban, Madhepura, Bihar</p></div>
              <div className="resume-preview-section"><h3>Selected Projects</h3><p><b>Data QA &amp; Web Server Automation Pipeline</b> · Node.js, Playwright, TypeScript. Five focused test suites validating UI, DOM structure, schema, APIs, and 25 data entries.</p><p><b>3GPP Rel-19 Telecom Knowledge Graph RAG Chatbot</b> · Python, Node.js, hierarchical retrieval, and grounded generation.</p><p><b>Agentic Alumni–Student Mentorship Platform</b> · Government of Rajasthan initiative with matching, real-time chat, and video.</p><p><b>Multimodal Emotion Detection System</b> · BLIP image captioning with Hugging Face Transformers.</p></div>
              <div className="resume-preview-section"><h3>Skills</h3><p>Python, JavaScript, TypeScript, C, LangChain, ChromaDB, Llama, llama.cpp, Ollama, Playwright, Node.js, REST APIs, MySQL, SQLite, Scikit-learn, Pandas, HTML, CSS, Tailwind.</p></div>
              <div className="resume-preview-section"><h3>Publication &amp; Certifications</h3><p><b>IEEE ACROSET 2025</b> · “Intelligent Platform to Interconnect Alumni and Students for Technical Education”, Paper ID 0896.</p><p><b>Oracle Certified Foundations Associate: Agentic AI</b> · Oracle Corporation, Aug 2026.</p><p><b>Cyber Security Virtual Experience</b> · Deloitte Forage, Nov 2025.</p></div>
              <p className="preview-note">This on-page preview does not provide a resume file download.</p>
            </div> : projectPreview === 'rag' ? <div className="project-preview"><iframe title="Live Hierarchical Graph RAG system preview" src="https://rag-system-pearl-alpha.vercel.app/" loading="eager" /><a className="project-preview-open" href="https://rag-system-pearl-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">Open live RAG system in a new tab <ArrowUpRight size={14} /></a></div> : <div className="certificate-preview"><iframe title={documentPreview === 'oracle' ? 'Oracle Agentic AI certificate preview' : documentPreview === 'deloitte' ? 'Deloitte Cyber Security certificate preview' : 'ACROSET 2025 author certificate preview'} src={documentPreview === 'oracle' ? 'https://drive.google.com/file/d/1uzNkUafVm3u7Iiev_wSIJGJY9k6-j9Vi/preview?rm=minimal' : documentPreview === 'deloitte' ? 'https://drive.google.com/file/d/1Lw4CzMicI1vwe-b4GBQ67cIHy6uDUpmt/preview?rm=minimal' : 'https://drive.google.com/file/d/1uLw5DpPESO5zZrqC86fyWgl_BemF5uuS/preview?rm=minimal'} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms" referrerPolicy="no-referrer" /><p className="preview-note">Embedded preview only. Google Drive sharing permissions still control access to this certificate.</p></div>}
          </motion.section>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default App