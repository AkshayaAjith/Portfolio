import React from "react";
import {Typewriter} from 'react-simple-typewriter'

import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
              <a href="mailto:ramakshaya5@gmail.com">
                    <i className="fa fa-envelope"></i>
                </a>
                <a href="www.linkedin.com/in/akshayaram6194">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/AkshayaAjith">
                    <i className="fa fa-github"></i>
                </a>  
                 
                <a href="https://instagram.com/_ms_rv_here_?igshid=MzRlODBiNWFlZA==">
                    <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="profile-details-name">
                <span className="primary-text">
                    {""}
                    Hello, I'm <span className="highlighted-text">Akshaya</span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className="primary-text">
                  {''}
                    <h1> 
                      <Typewriter
                      words={[
                           'Frontend Developer',
                           'Web Developer',
                           'React Developer',
                           'UI Developer',
                          
                      ]}
                      typeSpeed={150}
                      backSpeed={150}
                      loop
                      />
                    </h1>
                    <span className="profile-role-tagline">
                    I am a skilled and passionate web designer with experience in creating<br />
                     visually appealing and user-friendly websites.
                    </span>
                </span>
            </div>
            <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="Resume.pdf" download="Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
          </div>
    </div>
    </div>
  );
}
