import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'

const mdFiles: Record<string, string> = import.meta.glob('../blogPosts/*.md', {
  eager: true,
  query: 'raw',
  import: 'default',
})

const BlogPostPage: React.FC = () => {
  const params = useParams<{ slug: string }>() // <--- type-safe
  const slug = params.slug

  const navigate = useNavigate()

  if (!slug) return <p>Post not found</p>

  const postPath = Object.keys(mdFiles).find((path) =>
    path.includes(`${slug}.md`)
  )

  if (!postPath) return <p>Post not found</p>

  const content = mdFiles[postPath]

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ display: 'inline-block', marginBottom: '20px' }}
        className="hover:cursor-pointer hover:text-blue-500"
      >
        ← Back to Blog List
      </button>
      <div className="markdown-body !bg-transparent">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default BlogPostPage
