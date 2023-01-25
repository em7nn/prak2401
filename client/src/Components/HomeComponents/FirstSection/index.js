import React from 'react'
import "./index.scss"
function FirstSection() {
    return (
        <>
            <div id='first' className='firstsec_main'>
                <div className='boz'></div>
                <div className='solsag'>
                    <div className='sol'>
                        <h2>Learn From The Expert</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                        <div><a href='/'><button className='admis'>ADMISSION NOW</button></a></div>
                    </div>
                    <div className='sag'>
                        <div className='inputbackground'>
                            <div className='inp'>
                                
                                <hr />
                                <p>Sign Up</p>
                                <input className='input' type="text" placeholder="Email Address" name="email" required />

                                <input className='input' type="password" placeholder="Password" name="psw" required />

                                <input className='input' type="password" placeholder="Re-type Password" name="psw-repeat" required />

                                <a href='/'><button className='sign'>Sign Up</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSection