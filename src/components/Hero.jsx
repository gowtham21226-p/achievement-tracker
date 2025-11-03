export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gray-50">
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-4">
          Showcase Your Journey, <br />
          <span className="text-gradient">Beyond the Grades.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          The ultimate platform for students to track, manage, and showcase their extracurricular achievements.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#showcase" className="btn btn-primary">Explore Showcase</a>
          <a href="#pricing" className="btn btn-secondary">View Pricing </a>
        </div>
      </div>
    </section>
  );
}
