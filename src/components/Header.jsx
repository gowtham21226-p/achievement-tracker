import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Achieve<span className="text-indigo-600">Track</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#showcase" className="nav-link">Showcase</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">Login</Link>
              <Link to="/signup" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
