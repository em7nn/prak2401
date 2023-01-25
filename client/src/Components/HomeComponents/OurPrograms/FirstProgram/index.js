import React from 'react'
import "./index.scss"
function FirstProgram() {
  return (
    <>
      <div className='firstProgram'>
        <div className='leftright'>
          <div className='left'>
          <img style={{width:"700px"}} src='https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg' alt='imeg' />
          </div>
          <div className='right'>
          <p className='pa'>We Are Excellent In Education</p>
          <p className='lore'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
          <div className='iconlu'>
            <div className='icon'><i className="fa-solid fa-graduation-cap"></i></div>
            <div className='iyazi'><p>22,931 Yearly Graduates</p></div>
          </div>
          <div className='iconlu'>
            <div className='icon'><i className="fa-solid fa-building-columns"></i></div>
            <div className='iyazi'><p>150 Universities Worldwide</p></div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstProgram