import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Full Stack Developer Intern</h3>
          <div className="subheading mb-3">FUTURUS</div>
          <p>
            <strong>Roles/Responsibilities</strong><br />
            <li>Responsible to handle the Frontend as well as Backend.</li>
            <li>Make the Mobile & Web App very efficient.</li>
            <li>Implement new features to the apps.</li>
            <li>Implement many alternative solution for a problem.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">December 2022 - May 2023</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Lead</h3>
          <div className="subheading mb-3">CODECHEF CHAPTER MAIT</div>
          <p>
            <li>In-charge of CP and Media Team.</li>
            <li>I did projects along with my team.</li>
            <li>Responsible to take core decisions for Codechef Chapter MAIT.</li>
            <li>Organize College events.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">September 2021 - December 2022</span>
        </div>
      </div>
    </Section>
  );
}
