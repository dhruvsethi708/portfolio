import React from "react";
import Section from "../components/Section";

import { BsTrophy } from "react-icons/bs"
import { RiFilePaper2Fill } from "react-icons/ri"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://leetcode.com/dhruvsethi708/">
              Solved 500+ questions on Leetcode
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://auth.geeksforgeeks.org/user/dhruvsethi708/">
              Solved 180+ questions on geeksforgeeks
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://drive.google.com/drive/u/0/my-drive">
              Completed Internship at FUTURUS(startup)
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://www.holopin.io/@dhruvsethi708#">
              Contributed in Hacktoberfest 2022
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://drive.google.com/file/d/1_1MryFqJ7UOLwQNNp0PCvQkM-aUZTOOw/view">
            Google Solution Challenge 2022
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://www.codechef.com/certificates/public/c26a459">
              CodeChef SnackDown 2021
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://heiphen.com/verify/doc/6255ccaff194def118374da4/">
              HackNSUT'22
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="https://certificate.givemycertificate.com/c/6b280ff2-10bb-4295-a0c8-2cf07bafa4bb">
              "Live the Code" Hackathon
            </a>
          </div>
        </ul>
      </Section>
    </React.Fragment>
  );
}
