import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import Layout from './Layout.tsx'
import Blog from '../pages/Blog.tsx'
import BlogPostPage from '../components/BlogPostPage.tsx'
import About from '../pages/About.tsx'
import ScrollToTop from '../components/ScrollToTop.tsx'
import Projects from '../pages/Projects.tsx'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:slug" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
