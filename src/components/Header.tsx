import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="relative flex items-center justify-between py-3 ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img src="/icons/Logo.png" className="h-6 w-6" alt="Logo" />
        <span className="font-medium text-white">Kumaravel</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
        <Link to="/about" className="hover:text-white transition">
          About
        </Link>
        <Link to="/blog" className="hover:text-white transition">
          Blog
        </Link>
        <Link to="/projects" className="hover:text-white transition">
          Projects
        </Link>
        {/*<Link
          to="https://drive.google.com/file/d/1GM8lybkur8vdY6iQ8g9IzZdJjB-xtjz1/view?usp=sharing"
          target="_blank"
          className="hover:text-white transition"
        >
          Resume
        </Link>*/}
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden text-neutral-300 focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Nav */}
      {open && (
        <nav className="absolute top-full left-0 w-full bg-black border-t border-neutral-800 md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4 text-sm text-neutral-300">
            <Link to="/" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link to="/" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link
              to="https://drive.google.com/file/d/1GM8lybkur8vdY6iQ8g9IzZdJjB-xtjz1/view?usp=sharing"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              Resume
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
