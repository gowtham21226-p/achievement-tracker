import React, { useState } from "react";
import "../style.css";

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");

  const addAchievement = () => {
    if (!title.trim()) return;

    const newAchievement = {
      title,
      category,
      notes,
      date: new Date().toLocaleDateString(),
    };

    setAchievements([newAchievement, ...achievements]); // newest first
    setTitle("");
    setCategory("");
    setNotes("");
  };

  const removeAchievement = (index) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  return (
    <section className="achievements-section">
      <div className="achievements-header">
        <h2>My Achievements</h2>
        <p>Track and manage your accomplishments in one place.</p>
      </div>

      <div className="achievements-form">
        <input
          type="text"
          placeholder="Achievement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category (e.g., Coding, Fitness)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button onClick={addAchievement}>Add Achievement</button>
      </div>

      <div className="achievements-list">
        {achievements.length === 0 && <p className="no-achievements">No achievements yet.</p>}
        {achievements.map((ach, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-info">
              <h3>{ach.title}</h3>
              <span className="achievement-category">{ach.category || "General"}</span>
              <p className="achievement-notes">{ach.notes}</p>
              <small className="achievement-date">{ach.date}</small>
            </div>
            <button className="achievement-remove" onClick={() => removeAchievement(index)}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
