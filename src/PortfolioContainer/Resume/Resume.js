import React, { useState,useEffect } from 'react'
import './Resume.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'

export default function Resume(props) {
    const [selectedBulletIndex,setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle,setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)return;
         Animations.animations.fadeInScreen(props.id)
      }
      const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) =>{
        return(
            <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet">   </div>
                    <span>{props.heading ? props.heading:''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className="heading-date">
                            {props.fromDate + "_"+ props.toDate}
                        </div>
                    ):(
                        <div></div>
                    )}
             </div>
                <div className="resume-sub-heading">
                <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className="resume-heading-description">
                <span>{props.description ? props.description: ''}</span>
                </div>
            
        </div>
        )
        
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
      ];
     const programmingSkillsDetails =[
         {skill: "Javascript", ratingPercentage:85},
         {skill: "HTML", ratingPercentage:95},
         {skill: "CSS", ratingPercentage:85},
         {skill: "React JS", ratingPercentage:65},
         {skill: "Java", ratingPercentage:50},
         {skill: "MySQL", ratingPercentage:50}
     ];
   
     const projectsDetails=[
        {
            title:"Personal Portfoloi Website",
            duration:{fromDate: "2022", toDate:"2023"},
            description:"A Personal Portfolio website to showcase all my details and projects at one place",
            subHeading:"Technologies Used:React Js, HTML,CSS"
        },
        // {
        //     title:"Personal Portfoloi Website",
        //     duration:{fromDate: "2022", toDate:"2023"},
        //     description:"A Personal Portfolio website to showcase all my details and projects at one place",
        //     subHeading:"Technologies Used:React Js, HTML,CSS"
        // },
        // {
        //     title:"Personal Portfoloi Website",
        //     duration:{fromDate: "2022", toDate:"2023"},
        //     description:"A Personal Portfolio website to showcase all my details and projects at one place",
        //     subHeading:"Technologies Used:React Js, HTML,CSS"
        // }
     ];

     const resumeDetails =[
        <div className="resume-screen-container" key="education">
            <ResumeHeading
            heading={"Thiruvalluvar University"}
            subHeading={"BACHELOR OF COMMERCE(Computer Application)"}
            fromDate={"2019"}
            toDate={"2022"}
            />
             <ResumeHeading
            heading={"High School"}
            subHeading={"NLC Girls Higher Secondary School"}
            fromDate={"2017"}
            toDate={"2019"}
            />
             {/* <ResumeHeading
            heading={"High School"}
            subHeading={"NLC Girls Higher Secondary School"}
            fromDate={"2017"}
            toDate={"2019"}
            /> */}
        </div>,
        <div className="resume-screen-container programming-skills-" 
        key="programming-skills">
           {programmingSkillsDetails.map((skill, index)=>(
            <div className='skill-parent' key={index}>
                <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                    <div 
                        style={{width: skill.ratingPercentage + "%"}}
                        className='active-percentage-bar'>
                    </div>
                    </div>
                  </div>
              ))}
             </div>,
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index)=>(
                <ResumeHeading
                key={index}
                heading={projectsDetails.title}
                subHeading={projectsDetails.subHeading}
                description={projectsDetails.description}
                fromDate={projectsDetails.duration.fromDate}
                toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,
        <div className="resume-screen-container" key="Interests">
            <ResumeHeading 
             heading='MakeupArtist'
             description="Makeup Artist is the delight you'll experience
             when you utilize your skills to accentuate a person's looks"
            />
              <ResumeHeading 
             heading='Photoshop'
             description="I recently start my learning process, 
             day to day update my skill learn Photoshop(Adobe). "
            />
               <ResumeHeading 
             heading='video Editing'
             description="I recently start my learning process, 
             day to day update my skill learn video Editing. "
            />
        </div>
     ];

     const handleCarousal = (index)=>{
        let offsetHeight = 360;

        let newCarousalOffset = {
        style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"},
        } ;
        
        setCarousalOffSetStyle (newCarousalOffset);
        setSelectedBulletIndex(index);
    };
   
    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`)}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
   const getResumeScreen =()=>{
    return(
        <div
        style={carousalOffSetStyle.style}
        className='resume-details-carousal'
        >
         {resumeDetails.map((resumeDetails)=>resumeDetails)}
        </div>
    )
   };
   useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  return (
    <div className='resume-container screen-container' id={props.id || ""}>
        <div className="resume-content">
            <ScreenHeading  title={'Resume'} subHeading={'My Formal Bio Details'} />
        <div className="resume-card">
            <div className="resume-bullets">
                <div className="bullet-container">
                    <div className="bullet-icons"> </div>
                        <div className="bullets">{getBullets()}</div>
                    </div>
                </div>
                <div className="resume-bullet-details">{getResumeScreen()}</div>
           
        </div>
        </div>
    </div>
  )
}
