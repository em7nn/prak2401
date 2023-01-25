import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function MessageUs() {
  return (
    <>
      <div id='Contact' className='messageus_main'>
        <div className='message'>
          <h2>Message Us</h2>
          <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia <br /> quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
          <div className='nameler'>
            <input className='inputname' type="text" placeholder="First name" name="name" required />
            <input className='inputname1' type="text" placeholder="Last name" name="surname" required />
          </div>
          <input className='input' type="text" placeholder="Project" name="project" required />
          <input className='input' type="email" placeholder="Email" name="project" required />
          <textarea className='textarea' placeholder='Write your message here.' maxLength='1000' minLength='100' type="textarea" name="textarea" required></textarea>
          <a href="/"><button className='send'>Send Message</button></a>
        </div>
      </div>
    </>
  )
}

export default MessageUs