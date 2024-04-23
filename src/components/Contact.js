import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contactpg tflex'>
      <div className='contact-box'>
        <h1>Contact Us</h1>
        <form action="">
          <label htmlFor="">FULL NAME: <sup>*</sup> </label>
          <input type="text" name="" id="fname" required placeholder='ENTER THE FULL NAME' />

          <div className='flex'>
            <label htmlFor="">E-&nbsp;MAIL:<sup>*</sup></label>
            <input type="email" name="" id="email" required placeholder='ENTER THE E-MAIL' />

            <label htmlFor="phno">PHONE: <sup>*</sup></label>
            <input type="number" name="" id="phno" placeholder='ENTER THE PHONE NUMBER'/>
          </div>
          <textarea name="" id="" cols="60" rows="5" placeholder='ENTER THE MESSAGE'></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}
