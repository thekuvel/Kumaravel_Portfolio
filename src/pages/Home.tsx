import { Link } from 'react-router-dom'
import ViewButton from '../components/ViewButton.tsx'
import { YearsOfExperienceText } from '../components/YearsOfExperienceText.tsx'
import projectsData from './projectsData.ts'

export default function Home() {
  const frontend = [
    { img: '/icons/react.svg', techName: 'React JS' },
    { img: '/icons/nextjs.svg', techName: 'Next JS' },
    { img: '/icons/tailwindcss.svg', techName: 'Tailwind CSS' },
    { img: '/icons/materialui.svg', techName: 'Material UI' },
    // { img: '/icons/bootstrap5.svg', techName: 'Bootstrap' },
  ]

  const backend = [
    // { img: '/icons/expressjs.svg', techName: 'Express Js' },
    { img: '/icons/graphql.svg', techName: 'GraphQL' },
    { img: '/icons/nodejs.svg', techName: 'Node JS' },
    { img: '/icons/python.svg', techName: 'Python' },
    // { img: '/icons/vercel.svg', techName: 'Vercel' },
    // { img: '/icons/netlify.svg', techName: 'Netlify' },
    // 'JWT',
    // 'AWS',
    // 'Render',
    // 'Supabase',
  ]

  const database = [
    { img: '/icons/mongodb.svg', techName: 'MongoDB' },
    { img: '/icons/postgresql.svg', techName: 'PostgreSQL' },
    { img: '/icons/supabase.svg', techName: 'Supa Base' },
    // { img: '/icons/prisma.svg', techName: 'Prisma' },
    // 'MongoDB', 'PostgreSQL', 'SQL Lite', 'Mongoose', 'Prisma'
  ]

  return (
    <div className="grid gap-20">
      {/* Hero */}
      <section className="max-w-3xl">
        <h1 className="text-6xl font-semibold tracking-tight">Kumaravel</h1>

        <p className="mt-4 text-lg text-neutral-300">Product developer</p>

        <p className="mt-6 text-neutral-400 leading-relaxed">
          {`With ${YearsOfExperienceText()} years of experience working on
          production applications, I have built products and features that are
          reliable, user-friendly, and deliver real-world impact.`}
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/about"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm"
          >
            <img src="/icons/user.svg" className="h-4 w-4" alt="" />
            About me
          </Link>

          <Link
            to="/projects"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm"
          >
            <img src="/icons/folder.svg" className="h-4 w-4" alt="" />
            Projects
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm"
          >
            <img src="/icons/cloud-download.svg" className="h-4 w-4" alt="" />
            Download resume
          </Link>
        </div>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Experience */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="icons/fi-sr-briefcase.png" className="h-5 w-5" alt="" />
            <h3 className="font-medium">Experience</h3>
          </div>

          <p className="text-sm text-neutral-300">
            <strong>IBM</strong> · Feb 2021 - Present
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Developing in-house products and features. Ticket sync micro
            service, API authentication app and more.
          </p>

          <p className="mt-4 text-sm text-neutral-300">
            <strong>Wipro</strong> · Oct 2019 - Feb 2021
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            SQL db testing and db management. Analysis, user story development
            and test case development.
          </p>

          <ViewButton path="/about" />
        </div>

        {/* Tech Stack */}
        <div className="grid rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <img src="icons/fi-sr-layers.png" className="h-5 w-5" alt="" />
            <h3 className="font-medium">Tech Stack</h3>
          </div>

          {/* Row 1 – Right to Left */}
          <div className="sliderContainer mb-3">
            <div className="slider rtl">
              {[...frontend, ...frontend].map((tech, i) => (
                <span
                  key={i}
                  className="flex gap-2 justify-center item border rounded-[5px] border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                >
                  <img
                    className="max-w-[16px]"
                    src={tech.img}
                    alt={`${tech.techName} logo`}
                  />
                  {tech.techName}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 – Left to Right */}
          <div className="sliderContainer mb-3">
            <div className="slider ltr">
              {[...backend, ...backend].map((tech, i) => (
                <span
                  key={i}
                  className="flex gap-2 justify-center item border rounded-[5px] border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                >
                  <img
                    className="max-w-[16px]"
                    src={tech.img}
                    alt={`${tech.techName} logo`}
                  />
                  {tech.techName}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3 – Right to Left */}
          <div className="sliderContainer mb-3">
            <div className="slider rtl">
              {[...database, ...database].map((tech, i) => (
                <span
                  key={i}
                  className="flex gap-2 justify-center item border rounded-[5px] border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                >
                  <img
                    className="max-w-[16px]"
                    src={tech.img}
                    alt={`${tech.techName} logo`}
                  />
                  {tech.techName}
                </span>
              ))}
            </div>
          </div>

          <ViewButton path="/about" />
        </div>

        {/* Certifications */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="icons/badge.png" className="h-5 w-5" alt="" />
            <h3 className="font-medium">Certifications</h3>
          </div>

          <p className="text-sm text-neutral-400">AWS</p>
          <p className="text-sm text-neutral-400">Full stack developer</p>
          <p className="text-sm text-neutral-400">Infrastructure specialist</p>
        </div>

        {/* Projects */}
        <div className="lg:col-span-2 lg:row-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="icons/projects-folder.png" className="h-5 w-5" alt="" />
            <h3 className="font-medium">Projects</h3>
          </div>

          {projectsData.slice(0, 2).map((project, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 mb-3"
            >
              <div>
                <p className="text-sm font-medium">{project.title}</p>
                <p className="text-xs text-neutral-400">
                  {project.description}
                </p>
              </div>

              {/* <span className="text-xs text-neutral-300">Web app</span> */}
            </div>
          ))}

          <ViewButton path="/projects" />
        </div>

        {/* Education */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="icons/education.png" className="h-5 w-5" alt="" />
            <h3 className="font-medium">Education</h3>
          </div>

          <p className="text-sm text-neutral-300">Bachelor of Engineering</p>
        </div>
      </section>
    </div>
  )
}
