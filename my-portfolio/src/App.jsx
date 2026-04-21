const skills = [
  'Java (Primary)',
  'JavaScript',
  'C++ (Basics)',
  'Data Structures & Algorithms (300+ LeetCode)',
  'Object-Oriented Programming',
  'React.js',
  'Node.js',
  'MySQL',
  'MongoDB',
  'Git & GitHub',
  'Linux',
  'Postman',
  'AWS (EC2, S3)',
  'CI/CD Basics',
  'Agile & Scrum',
];

const projects = [
  {
    title: 'PrepSphere',
    stack: 'Full Stack Application',
    year: '2025',
    points: [
      'Contributed to a full-stack web application using modular and maintainable code.',
      'Assisted in backend APIs, database integration, and user-facing features.',
      'Participated in testing, debugging, and documentation.',
    ],
  },
  {
    title: 'GameVerse',
    stack: 'Client-Server Application',
    year: '2024',
    points: [
      'Developed platform features with authentication and persistent data handling.',
      'Collaborated through Git on code improvements and bug fixes.',
      'Improved reliability by debugging and resolving functional issues.',
    ],
  },
  {
    title: 'ShellWise',
    stack: 'Linux Automation',
    year: '2024',
    points: [
      'Built a Linux-based automation and quiz system using Bash scripting.',
      'Applied file handling, process flow, and validation logic.',
      'Tested scripts and fixed defects to improve stability.',
    ],
  },
  {
    title: 'Java Snake Game',
    stack: 'Java, OOP',
    year: '2024',
    points: [
      'Implemented a Java desktop game with object-oriented design.',
      'Worked on game logic, state management, and file persistence.',
      'Performed systematic testing and debugging for smooth gameplay.',
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold">Ishita</p>
          <a
            href="#contact"
            className="rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
          >
            Contact Me
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16">
        <section className="grid gap-8 py-14 md:grid-cols-[1.6fr_1fr] md:items-center">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-fuchsia-400/50 px-3 py-1 text-xs uppercase tracking-wider text-fuchsia-300">
              Software Engineer Portfolio
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Ishita
              <span className="block bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
            <p className="max-w-2xl text-slate-300">
              B.Tech Computer Science student with strong fundamentals in DSA, OOP, and debugging.
              Passionate about building reliable software, learning fast, and contributing across
              development, testing, and automation.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="rounded-lg border border-white/15 px-4 py-2 hover:border-fuchsia-300"
                href="tel:+919317713464"
              >
                +91 9317713464
              </a>
              <a
                className="rounded-lg border border-white/15 px-4 py-2 hover:border-fuchsia-300"
                href="mailto:iishita038@gmail.com"
              >
                iishita038@gmail.com
              </a>
              <a
                className="rounded-lg border border-white/15 px-4 py-2 hover:border-fuchsia-300"
                href="https://linkedin.com/in/ms-ishita"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="card-glow rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="mb-2 text-xl font-semibold">Quick Highlights</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>CGPA: 8.14 / 10</li>
              <li>Expected Graduation: 2027</li>
              <li>300+ LeetCode problems solved</li>
              <li>React.js, Node.js, Java and Linux exposure</li>
            </ul>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-semibold">Professional Summary</h2>
          <p className="mt-3 text-slate-300">
            Experienced in contributing to software development, automation, testing, and debugging
            phases using Git, Linux, and open-source debuggers. Familiar with AI-assisted development,
            prompt engineering, and Agile methodologies. Motivated to gain hands-on experience in
            high-performance systems and emerging tools like Docker and Kubernetes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill} className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-xs">{project.year}</span>
                </div>
                <p className="mb-3 text-sm text-fuchsia-300">{project.stack}</p>
                <ul className="list-inside list-disc space-y-2 text-sm text-slate-300">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold">Awards & Certifications</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-300">
              <li>Full Stack Web Development (MERN) - ThingQbator (2025)</li>
              <li>Event Executive, Red Hat Academy CUIET Club</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="mt-4 font-medium">B.E. in Computer Science</p>
            <p className="text-slate-300">Chitkara University, Rajpura</p>
            <p className="mt-2 text-slate-300">Expected Graduation: 2027</p>
            <p className="text-slate-300">CGPA: 8.14 / 10</p>
          </article>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Open to internships and software engineering opportunities.</p>
          <p>
            Contact: <a href="mailto:iishita038@gmail.com">iishita038@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
