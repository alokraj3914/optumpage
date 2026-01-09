import React from "react";
import "./IndustryInsights.css";

const IndustryInsights = () => {
  return (
    <section className="insights">
      <div className="insights-header">
        <h2>Industry insights and analysis</h2>
        <button className="dark-btn">See all insights</button>
      </div>
      <div className="featured-card">
        <span className="tag">Article</span>

        <h3>Consumer centric health care research report</h3>

        <p>
          Examine the acceleration toward consumer-centric care with insights
          and perspective from healthcare leaders.
        </p>

        <span className="arrow">→</span>
      </div>

      <div className="insights-grid">
        <div className="insight-card">
          <span className="tag">Article</span>
          <h4>How AI in pharmacy is powering new innovations</h4>
          <p>
            From predicting drug trend to earlier fraud protection, see how
            we’re leveraging AI to improve operations for clients and members.
          </p>
          <span className="arrow">→</span>
        </div>

        <div className="insight-card">
          <span className="tag">Article</span>
          <h4>Mental health: Optum addresses the great information divide</h4>
          <p>
            Explore the challenges and opportunities in using mental health
            data to understand prevalence, risk, impact and treatment in
            patients, members and...
          </p>
          <span className="arrow">→</span>
        </div>

        <div className="insight-card">
          <span className="tag">Article</span>
          <h4>How employers can make better benefits decisions</h4>
          <p>
            Assessing vendors is daunting enough. But for many employers,
            limited data, contract variations and employee confusion add
            complexity.
          </p>
          <span className="arrow">→</span>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsights;
