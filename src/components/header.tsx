import { Link } from "react-router-dom";
import { ArrowLeftRight, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className="navbar sticky top-0 z-999">
      <div className="nav flex justify-between items-center px-6 py-4 bg-white shadow-md shadow-blue-900">
        <div className="brand-logo flex gap-3 items-center">
          <ArrowLeftRight color="navy" size={32} />
          <span className="font-bold text-2xl text-gradient">Skill Swapper</span>
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          <Link to="/Login" className="btn-gradient">Sign in</Link>
          <Link to="/signIn" className="btn-gradient flex gap-2 items-center">
            Explore Opportunities <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="sm:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-3 px-6 pb-4 my-4 shadow-md shadow-blue-900">
          <Link
            to="/Login"
            className="btn-gradient text-center"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </Link>
          <Link
            to="/signUp"
            className="btn-gradient flex justify-center gap-2 items-center"
            onClick={() => setMenuOpen(false)}
          >
            Explore Opportunities <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
    );
}

export default Header