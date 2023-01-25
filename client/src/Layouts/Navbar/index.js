import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import $ from 'jquery';
function Navbar() {
    $(document).ready(function(){
        $(".link").addClass("color");
      
        $(".menu--item__one").click(function(){
           $(".bottom__line").addClass("bottom__active");
           $(".link").addClass("color");
           $(".link1").removeClass("color1");
           $(".link2").removeClass("color2");
           $(".bottom__line").removeClass("bottom__active1 bottom__active2");
        });
        
       
        $(".menu--item__two").click(function(){
            $(".bottom__line").addClass("bottom__active1");
            $(".link1").addClass("color1");
            $(".link").removeClass("color");
            $(".link2").removeClass("color2");
            $(".bottom__line").removeClass("bottom__active bottom__active2");
        });
        
       
         $(".menu--item__three").click(function(){
              $(".bottom__line").addClass("bottom__active2");
              $(".link2").addClass("color2");
              $(".link").removeClass("color");
              $(".link1").removeClass("color1");
              $(".bottom__line").removeClass("bottom__active bottom__active1");
        });
      });
      
    return (
        <>
            <div className='main_nav'>
                <div className='nav'>
                    <div className='logo'>
                        <Link className='stil' to={"/"}><h3>OneSchool</h3></Link>
                    </div>
                    <div className='links'>
                        <ul>
                            <li className="menu--item__one">
                              <a id='st' className='link' href='#first'>Home</a>
                            </li>
                            <li className="menu--item__two">
                            <a id='st' className='link1' href="#Programs">Programs</a>
                            </li>
                            <li className="menu--item__three">
                            <a id='st' className='link2' href="#Teachers">Teachers</a>
                            </li>
                            <li className="bottom__line">

                            </li>
                        </ul>
                    </div>
                    <div className='con'>
                        <ul><a className='stil' href="#Contact"><button className='cont'>contact us</button></a></ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar