import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function Footer() {
  return (
    <>
    <div className='Footer_main'>
      <div className='hr'>
        <hr></hr>
      </div>
     <div className='footer_yazi'>
     <p>Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>  by <Link className='st' to={"/somewhere"}>Colorlib</Link></p>
     </div>
    </div>
    </>
  )
}

export default Footer