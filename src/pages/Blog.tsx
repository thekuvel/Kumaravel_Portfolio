import React from 'react'
import { Link } from 'react-router-dom'

const mdFiles: Record<string, string> = import.meta.glob('../blogPosts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

interface BlogPost {
  title: string
  content: string
  path: string
  slug: string
}

const BlogList: React.FC = () => {
  const posts: BlogPost[] = Object.keys(mdFiles).map((path) => {
    const content = mdFiles[path]
    const titleMatch = content.match(/^#\s+(.*)/m)
    const title = titleMatch ? titleMatch[1] : 'Untitled'

    // Safely generate slug from filename
    const fileName = path.split('/').pop() || 'unknown.md'
    const slug = fileName.replace(/\.md$/, '') // remove .md

    return { title, content, path, slug }
  })

  return (
    <div className="p-4">
      <h2>Blog Posts</h2>
      <ul className="mt-8 grid gap-8">
        {posts.reverse().map((post) => (
          <li key={post.path}>
            <Link
              to={`/post/${post.slug}`}
              className="block border rounded p-2 hover:bg-blue-500 hover:text-black"
              // style={{
              //   display: 'block',
              //   padding: '5px 10px',
              //   border: '1px solid #ccc',
              //   borderRadius: '4px',
              //   textDecoration: 'none',
              //   color: 'white',
              // }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
