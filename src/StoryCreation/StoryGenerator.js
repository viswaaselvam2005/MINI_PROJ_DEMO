import React from 'react';
import './StoryGenerator.css';

const StoryGenerator = () => {
  return (
    <div className="container-fluid d-flex">
      {/* Sidebar section */}
      <aside className="sidebar">
        <h2 className="sidebar-title">History</h2>
        <ul className="sidebar-menu">
        <li className="sidebar-item"></li>
          <li className="sidebar-item">Story:Cat & Dog</li>
          <li className="sidebar-item">Story:The Lone Price</li>
          <li className="sidebar-item">Story:Indian Legend</li>
          <li className="sidebar-item">Story:Teacher Ram</li>
          <li className="sidebar-item"></li>
        </ul>
      </aside>

      {/* Story content */}
      <main className="story-content">
        <h1 className="story-subject">StoryZi🚸</h1> 
        <section className="story-input-section">
          <textarea className="story-textarea" aria-label="Enter your story details" placeholder="Subject of the Story"></textarea>
        </section>
        <div className="story-actions">
          <button className="action-button add-details">ADD DETAILS</button>
          <button className="action-button generate-story">GENERATE STORY</button>
        </div>
      </main>
    </div>
  );
};

export default StoryGenerator;
