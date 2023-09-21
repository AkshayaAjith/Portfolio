import React from 'react'
import './ContactMe.css'
import {Typewriter} from 'react-simple-typewriter'
import axios from 'axios'
import {toast} from 'react-toastify'

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import { useState , useEffect } from 'react'

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen)=>{ 
    if(screen.fadeInScreen !== props.id)return;
     Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
   
  const[name, setName]=useState("")
  const[email, setEmail]=useState("")
  const[message, setMessage]=useState("")
  const[banner, setBanner]=useState("")
  const[bool, setBool]=useState('flase')
   

     

  const handelName = (e) => {
    setName(e.target.value);
  };

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelMessage = (e) => {
    setMessage(e.target.value);
  };

  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
     }, [fadeInSubscription]);

  return (
    <div className='main-container' id={props.id|| ''}>
     <ScreenHeading
     subHeading={"lets Keep In Touch"}
     title={'Contact Me'}
     />
     <div className="central-form">
      <div className="col">
      <h2 className='title'>  
                     <Typewriter
                     words={[
                          'Get In Touch'
                         
                     ]}
                     typeSpeed={150}
                     backSpeed={150}
                     loop
                     />
                   </h2>
                   <a href="mailto:ramakshaya5@gmail.com">
                    <i className="fa fa-envelope"></i>
                </a>
                <a href="www.linkedin.com/in/akshaya-ram-93126527a">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/AkshayaAjith">
                    <i className="fa fa-github"></i>
                </a>  
                <a href="https://instagram.com/_ms_rv_here_?igshid=MzRlODBiNWFlZA==">
                    <i className="fa fa-instagram"></i>
                </a>
      </div>
      <div className="back-form">
        <div className="img-back">
          <h4>
            Send your Email here</h4>
            <img src={require("../../assets/ContactMe/mailz.jpeg")}
          alt="you have problem "/>
        </div>
        <form onSubmit={submitForm}>
          <p>{banner}</p>
          <label htmlFor="name">Name</label>
          <input type="text"
          onChange={handelName}
          value={name}
          required />

          <label htmlFor="email">Email</label>
          <input type="email"
           onChange={handelEmail}
           value={email}
           required/>

          <label htmlFor="message">Message</label>
          <textarea type="text"
          onChange={handelMessage}
          value={message}
          required/>

<div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool?(<b className="load">
                <img src={require("../../assets/ContactMe/load2.gif")}
          alt="no found"/>
                  </b>):("")}
            </button>
          </div>
        </form>
      </div>
     </div>
    </div>
  )
}
