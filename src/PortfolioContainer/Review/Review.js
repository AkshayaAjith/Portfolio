import React from 'react'
import './Review.css'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import shape from "../../assets/Review/shape-bg.png";

export default function Review(props) {
    let fadeInScreenHandler = (screen)=>{ 
        if(screen.fadeInScreen !== props.id)return;
         Animations.animations.fadeInScreen(props.id)
      }
      const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
      
      const options = {
        loop:true,
        margin:0,
        nav:true,
        animateIn:"bounceInRight",
        animateOut:"bounceOutRight",
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                item:1,
            },
            768:{
                item:1,  
            },
            1000:{
                item:3,
            },
            
        }
      }
      
  return (
    <div>
       < ScreenHeading
       title={'Review'}
       subHeading={'What My Client Say About Me'}
       />
        <section className='review-section' id={props.id || ''}>
            <div className="review">
                <div className="row">
                    <OwlCarousel className='owl-carousel'
                     id="review-carousel"
                      {...options}>
                     
                     <div className="col-lg-12">
                        <div className="review-item">
                            <div className="review-comment">
                                <p>
                                   <i className='fa fa-quote-left'/>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam. Nesciunt,
                                    alias unde iste debitis, dolorum impedit soluta
                                    Rerum minus nam quis ab iure!
                                    <i className='fa fa-quote-right'/>
                                </p>
                                <ul className='stars list-unstyled'>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star-half-alt' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                </ul>
                            </div>
                            <div className="client-info">
                                <img
                              src={require("../../assets/Review/logo.png")}
                              alt="you have problem with the image"
                                   /> 
                                   <h5>Loream</h5>
                            </div>
                        </div>
                     </div>

                     <div className="col-lg-12">
                        <div className="review-item">
                            <div className="review-comment">
                                <p>
                                   <i className='fa fa-quote-left'/>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam. Nesciunt,
                                    alias unde iste debitis, dolorum impedit soluta
                                    Rerum minus nam quis ab iure!
                                    <i className='fa fa-quote-right'/>
                                </p>
                                <ul className='stars list-unstyled'>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star-half-alt' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                </ul>
                            </div>
                            <div className="client-info">
                                <img
                              src={require("../../assets/Review/logo.png")}
                              alt="you have problem with the image"
                                   /> 
                                     <h5>Loream</h5>
                            </div>
                        </div>
                     </div>

                     <div className="col-lg-12">
                        <div className="review-item">
                            <div className="review-comment">
                                <p>
                                   <i className='fa fa-quote-left'/>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam. Nesciunt,
                                    alias unde iste debitis, dolorum impedit soluta
                                    Rerum minus nam quis ab iure!
                                    <i className='fa fa-quote-right'/>
                                    
                                </p>
                                <ul className='stars list-unstyled'>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star-half-alt' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                </ul>
                            </div>
                            <div className="client-info">
                                <img
                              src={require("../../assets/Review/logo.png")}
                              alt="you have problem with the image"
                                   /> 
                                     <h5>Loream</h5>
                            </div>
                        </div>
                     </div>

                     <div className="col-lg-12">
                        <div className="review-item">
                            <div className="review-comment">
                                <p>
                                   <i className='fa fa-quote-left'/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam. Nesciunt,
                                    alias unde iste debitis, dolorum impedit soluta
                                    Rerum minus nam quis ab iure!
                                    <i className='fa fa-quote-right'/>
                                </p>
                                <ul className='stars list-unstyled'>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star-half-alt' />
                                    </li>
                                    <li>
                                        <i className='fa fa-star' />
                                    </li>
                                </ul>
                            </div>
                            <div className="client-info">
                                <img
                              src={require("../../assets/Review/logo.png")}
                              alt="you have problem with the image"
                                   /> 
                                     <h5>Loream</h5>
                            </div>
                        </div>
                     </div>



                    </OwlCarousel>
                </div>
            </div>
        </section>
        <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  )
}
