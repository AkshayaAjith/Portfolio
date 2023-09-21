import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import "./AboutMe.css";
import { useEffect } from 'react';

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen)=>{ 
    if(screen.fadeInScreen !== props.id)return;
     Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
   
  const SCREEN_CONSTSANTS ={
    description: "qwqwdkn kmldlkef ejsfwke jekfek cjmslfwe sjkereomc fjoeeo.",
    highlights:{
      bullets: [
        "Web Development",
        "Front End Development",
        "React",
        "Responsive Web Page",
        "UI Development",
        
      ],
      heading: "Here are a Few Highlights:"
    },
  };
  const renderHighlights= () => {
    return (
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ))
    )
  };

  useEffect(() => {
    return () => {

      fadeInSubscription.unsubscribe();
    };
     }, [fadeInSubscription]);
  return (
    <div className='about-me-container screen-container'
     id={props.id || ""}>
      <div className="about-me-parent">
      <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
      <div className="about-me-card">
        <div className="about-me-profile"></div>
        <div className="about-me-details">
          <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
        <div className="about-me-highlights">
          <div className="hightlight-heading">
            <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
          </div>
          {renderHighlights()}
        </div>
        <div className="about-me-options">
        <button className='btn primary-btn'>  Hire Me</button>
              <a href="Resume.pdf" download='Resume.pdf '>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutMe
