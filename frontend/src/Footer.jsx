
import { Link } from "react-router-dom";
import { Briefcase, Upload, Info, Home } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-lg font-semibold">Empowering Careers, One Job at a Time</p>
        
        <nav className="flex gap-6 mt-4 md:mt-0">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-400">
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link to="/upload-job" className="flex items-center gap-2 hover:text-gray-400">
            <Upload className="w-5 h-5" /> Upload Job
          </Link>
          <Link to="/get-job" className="flex items-center gap-2 hover:text-gray-400">
            <Briefcase className="w-5 h-5" /> Get Job
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-gray-400">
            <Info className="w-5 h-5" /> About
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;