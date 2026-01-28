export default function About() {
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

  const infrastructure = [
    { img: '/icons/aws.svg', techName: 'AWS' },
    { img: '/icons/vercel.svg', techName: 'Vercel' },
    { img: '/icons/netlify.svg', techName: 'Netlify' },
    { img: '/icons/flyio.svg', techName: 'Fly.io' },
    { img: '/icons/render.svg', techName: 'Render' },
  ]

  const tools = [
    { img: '/icons/postman.svg', techName: 'Postman' },
    { img: '/icons/jira.svg', techName: 'Jira' },
  ]

  return (
    <div className="grid gap-8">
      <section>
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="font-semibold text-3xl">About</h1>
          <p className="mt-2 text-neutral-400">
            I'm a product developer, who designs and builds products with an
            emphasis on usability, reliability, and real-world impact. With over
            six years of experience working on production applications, I bring
            strong system thinking and a practical approach to building features
            that scale. I enjoy turning ideas into polished products,
            collaborating across UI design and engineering, and shipping
            thoughtful experiences. When I'm not building, I'm usually exploring
            product ideas or refining interfaces.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-semibold text-3xl">Experience</h2>
          {/* IBM experience */}
          <div className="mt-4 grid gap-2">
            <h3>IBM Feb 2021 - Present</h3>
            <p className="text-neutral-400">
              Developing in-house products and features. Ticket sync micro
              service, api authentication app and more.
            </p>
            <ul className="pl-4 list-disc list-inside text-neutral-400">
              <li>Convert Ideas to quick MVP</li>
              <li>Design UI and UX</li>
              <li>Develop front-end, back-end and database</li>
              <li>Write use case</li>
              <li>End to end testing</li>
            </ul>
          </div>
          {/* Wipro experience */}
          <div className="mt-4 grid gap-2">
            <h3>Wipro Oct 2019 - Feb 2021</h3>
            <p className="text-neutral-400">
              SQL db testing and db management. Analysis, user story development
              and test case development.
            </p>
            <ul className="pl-4 list-disc list-inside text-neutral-400">
              <li>SQL database Manual and automated testing</li>
              <li>Write test cases</li>
              <li>Analysis and report</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section>
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm">
          <h1 className="font-semibold text-3xl">Tech stack</h1>

          {/* Front end */}
          <div className="mt-4 flex gap-4">
            {frontend.map((tech) => (
              <span
                className="flex gap-2 items-center p-1 bg-[#363636] border border-[#D9D9D9] rounded"
                key={tech.techName}
              >
                <img className="max-w-[16px]" src={tech.img} alt="" />
                {tech.techName}
              </span>
            ))}
          </div>

          {/* Back end */}
          <div className="mt-4 flex gap-4">
            {backend.map((tech) => (
              <span
                className="flex gap-2 items-center p-1 bg-[#363636] border border-[#D9D9D9] rounded"
                key={tech.techName}
              >
                <img className="max-w-[16px]" src={tech.img} alt="" />
                {tech.techName}
              </span>
            ))}
          </div>

          {/* Database */}
          <div className="mt-4 flex gap-4">
            {database.map((tech) => (
              <span
                className="flex gap-2 items-center p-1 bg-[#363636] border border-[#D9D9D9] rounded"
                key={tech.techName}
              >
                <img className="max-w-[16px]" src={tech.img} alt="" />
                {tech.techName}
              </span>
            ))}
          </div>

          {/* Infrastructure */}
          <div className="mt-4 flex gap-4">
            {infrastructure.map((tech) => (
              <span
                className="flex gap-2 items-center p-1 bg-[#363636] border border-[#D9D9D9] rounded"
                key={tech.techName}
              >
                <img className="max-w-[16px]" src={tech.img} alt="" />
                {tech.techName}
              </span>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-4 flex gap-4">
            {tools.map((tech) => (
              <span
                className="flex gap-2 items-center p-1 bg-[#363636] border border-[#D9D9D9] rounded"
                key={tech.techName}
              >
                <img className="max-w-[16px]" src={tech.img} alt="" />
                {tech.techName}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-semibold text-3xl">Education</h2>
          {/* Bachelor */}
          <div className="mt-4 grid gap-2">
            <h3>Bachelor of Engineering | 2015-2019</h3>
            <p className="text-neutral-400">Anna University - MNM JEC</p>
            <ul className="pl-4 list-disc list-inside text-neutral-400">
              <li>7.31 CGPA</li>
            </ul>
          </div>
          {/* School */}
          <div className="mt-4 grid gap-2">
            <h3>Higher secondary certificate | 2014-2015</h3>
            <p className="text-neutral-400">CBSE</p>
            <ul className="pl-4 list-disc list-inside text-neutral-400">
              <li>8.1 CGPA</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Certifications */}
    </div>
  )
}
