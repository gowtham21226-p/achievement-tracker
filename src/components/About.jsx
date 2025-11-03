export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img src="https://placehold.co/800x600/E0E7FF/4338CA?text=Illustration" alt="Students collaborating" className="rounded-2xl shadow-2xl w-full" />
        <div>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-paragraph">
            We believe that learning and growth happen everywhere, not just in the classroom. Our mission is to empower students to capture their entire journey and present it in a way that truly reflects their unique talents and dedication.
          </p>
        </div>
      </div>
    </section>
  );
}
