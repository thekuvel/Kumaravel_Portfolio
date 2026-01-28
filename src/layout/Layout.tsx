import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="grid gap-20 max-w-4xl mx-auto px-6 py-10">
        <Header />

        {/* Page content */}
        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}
