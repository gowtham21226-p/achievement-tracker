export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title mb-6">Flexible Plans for Everyone</h2>
        <p className="section-subtitle mb-12">Choose the plan that's right for you or your institution.</p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="pricing-card">
            <h3 className="pricing-name">Student</h3>
            <div className="pricing-price">Free</div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check text-green-500"></i> Track up to 20 achievements</li>
              <li><i className="fa-solid fa-check text-green-500"></i> Basic reporting</li>
              <li><i className="fa-solid fa-check text-green-500"></i> Public profile link</li>
            </ul>
            <a href="#signup" className="btn btn-secondary w-full">Get Started</a>
          </div>

          <div className="pricing-card popular">
            <span className="popular-badge">POPULAR</span>
            <h3 className="pricing-name">Student Pro</h3>
            <div className="pricing-price">$5 / month</div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check text-green-500"></i> Unlimited achievements</li>
              <li><i className="fa-solid fa-check text-green-500"></i> Advanced reporting</li>
              <li><i className="fa-solid fa-check text-green-500"></i> Customizable portfolio</li>
            </ul>
            <a href="#signup" className="btn btn-primary w-full">Go Pro</a>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-name">Institution</h3>
            <div className="pricing-price">Contact Us</div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check text-green-500"></i> Admin dashboard</li>
              <li><i className="fa-solid fa-check text-green-500"></i> Bulk data import/export</li>
              <li><i className="fa-solid fa-check text-green-500"></i> School-wide analytics</li>
            </ul>
            <a href="#contact" className="btn btn-secondary w-full">Request Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
