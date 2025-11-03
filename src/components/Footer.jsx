export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Achieve<span className="text-indigo-400">Track</span></h3>
          <p className="text-gray-400">Your story, beyond the grades.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#features" className="footer-link">Features</a></li>
            <li><a href="#pricing" className="footer-link">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Subscribe</h4>
          <form className="flex">
            <input type="email" placeholder="your.email@example.com" className="w-full p-2 rounded-l-lg bg-gray-700 text-white" />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-2 rounded-r-lg">Go</button>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; 2025 AchieveTrack. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
