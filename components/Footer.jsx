import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillGithub , AiFillFacebook } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 R.N. Traders | All Right Reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiFillFacebook/>
        <AiFillGithub/>
      </p>
    </div>
  )
}

export default Footer