export default function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title mb-6">Achievement Showcase</h2>
        <p className="section-subtitle mb-12">Explore recent accomplishments from our students.</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="showcase-card">
            <img src="https://placehold.co/600x400/6366F1/FFFFFF?text=Debate" alt="Achievement" />
            <div className="p-6"><h3 className="text-xl font-bold">National Debate Winner</h3></div>
          </div>

          <div className="showcase-card">
            <img src="https://placehold.co/600x400/EC4899/FFFFFF?text=Research" alt="Achievement" />
            <div className="p-6"><h3 className="text-xl font-bold">AI Ethics Research Paper</h3></div>
          </div>

          <div className="showcase-card">
            <img src="https://placehold.co/600x400/10B981/FFFFFF?text=Sports" alt="Achievement" />
            <div className="p-6"><h3 className="text-xl font-bold">Varsity Soccer Captain</h3></div>
          </div>
        </div>
      </div>
    </section>
  );
}
