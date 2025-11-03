export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title mb-6">Everything You Need to Succeed</h2>
        <p className="section-subtitle mb-12">Powerful features to help you document and display your achievements.</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-award"></i></div>
            <h3 className="feature-title">Log Achievements</h3>
            <p>Easily record every award, certificate, and participation in any extracurricular activity.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-crosshairs"></i></div>
            <h3 className="feature-title">Track Progress</h3>
            <p>Monitor growth and skill development across various activities over time.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><i className="fa-solid fa-chart-line"></i></div>
            <h3 className="feature-title">Generate Reports</h3>
            <p>Create comprehensive reports for college applications, resumes, or personal tracking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
