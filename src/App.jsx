/* eslint-disable react/no-unescaped-entities */
//import { useState } from 'react'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import StickyLinks from './components/StickyLinks'
import './App.css'

import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript, SiFirebase} from 'react-icons/si'
import {FaCss3Alt, FaReact, FaBootstrap} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

function App() {

  return (
    <>
      <Navbar/>
      <Socials/>
      
      <section className='hero' id='hero-section'>
        <p className='greeting'>Hello my name is</p>
        <h1 className='name'>Victor Durodola</h1>
        <h1 className='hero-about'>I am a skilled front-end web developer</h1>
        <h1 className='hero-more'>Looking forward to working with you on realizing your dream website</h1>
        <a href="#work-section" className='view-work'>View Work <BsArrowRight className='right-arrow'/></a>
      </section>      
    
      <section className='skills-section' id='skills-section'>
        <div className="cards"><AiFillHtml5 className='icons'/> HTML</div>
        <div className="cards"><FaCss3Alt className='icons'/> CSS</div>
        <div className="cards"><SiJavascript className='icons'/> Javascript</div>
        <div className="cards"><FaReact className='icons'/> React</div>
        <div className="cards"><FaBootstrap className='icons'/> Bootstrap</div>
        <div className="cards"><SiFirebase className='icons'/> Firebase</div>
      </section>


      <section className='about-section' id='about-section'>
        <div className="left">
          <h2 className='heading'>About me</h2>
          <p>Hey. I'm Victor, it's nice to meet you. Please feel free to 
          take a look around!</p>
        </div>
        <div className="right">
          <p>I am passionate about building excellent software
          that improves the lives of those around me. I specilalize 
          in creating software for clients ranging from individuals and
          small-businesses all the way to large enterprise corporations.
          What would you do if you had a software expert available at 
          uour fingertipes?</p>
        </div>
      </section>

      <section className='work-section' id='work-section'>
        <h2 className='heading contact'>My Work</h2>
        <div className="work-container">
          <div className="work-card">
            <div className="image commerce-app">
            </div>
            <div className="action-btns">
                <div className="viewCode view"><a href="https://github.com/Victor-Durodola/ecommerce-app.git">View Code</a></div>
                <div className="viewLive view"><a href="https://victor-durodola.github.io/ecommerce-app/">Live</a></div>
              </div>
            <div className="info">
              <div className="proj-name">Ecommerce site</div>
              <p className='proj-more'>
                Fully functional website, responsive to
                mobile devices
              </p>
              <div className="tools">
                <AiFillHtml5 className='icons small-icons'/>
                <FaCss3Alt className='icons small-icons'/>
                <FaReact className='icons small-icons'/>
              </div>
            </div>
          </div>
          {/* <div className="work-card">
            <div className="image">
            </div>
            <div className="action-btns">
              <div className="viewCode view">View Code</div>
              <div className="viewLive view">Live</div>
            </div>
            <div className="info">
              <div className="proj-name">Project Tracker</div>
              <p className='proj-more'>
                Fully functional web app, responsive to
                mobile devices
              </p>
              <div className="tools">
                <AiFillHtml5 className='icons small-icons'/>
                <FaCss3Alt className='icons small-icons'/>
                <FaReact className='icons small-icons'/>
                <SiFirebase className='icons small-icons'/>
              </div>
            </div>
          </div> */}
          <div className="work-card">
            <div className="image countries">
            </div>
            <div className="action-btns">
              <div className="viewCode view"><a href="https://github.com/Victor-Durodola/countries.git">View Code</a></div>
              <div className="viewLive view"><a href="https://victor-durodola.github.io/countries/">Live</a></div>
            </div>
            <div className="info">
              <div className="proj-name">Search countries</div>
              <p className='proj-more'>
                This webapp enables the user to look up
                certain information of countries all over the
                world.
                Fully functional website, responsive to
                mobile devices.
              </p>
              <div className="tools">
                <SiJavascript className='icons small-icons'/>
                <FaCss3Alt className='icons small-icons'/>
                <FaReact className='icons small-icons'/>
              </div>
            </div>
          </div>
          
          <div className="work-card">
            <div className="image podcast-img">
              
            </div>
            <div className="action-btns">
              <div className="viewCode view"><a href="https://github.com/Victor-Durodola/podcast.git">View Code</a></div>
              <div className="viewLive view"><a href="https://victor-durodola.github.io/podcast/">Live</a></div>
            </div>
            <div className="info">
              <div className="proj-name">Podcast</div>
              <p className='proj-more'>
                Fully functional website, responsive to
                mobile devices
              </p>
              <div className="tools">
                <SiJavascript className='icons small-icons'/>
                <FaCss3Alt className='icons small-icons'/>
                <FaReact className='icons small-icons'/>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className='form-section' id='form-section'>
        <h2 className='heading contact'>Contact me</h2>
        <form method="POST" action="https://getform.io/f/b4bcecac-e426-4b32-905d-d99827f7546a" className='form'>
          <label htmlFor="client-name">
            <input type="text" id='client-name' className='client-name' placeholder='name'/>
          </label>
          <label htmlFor="email">
            <input type="email" id='email' className='email' placeholder='email'/>
          </label>
          <label htmlFor="textarea">
            <textarea name='textarea' className='textarea' placeholder='comment'/>
          </label>
          <button className='submit-form'>Send</button>
        </form>

        <div className="social">
        <a href='https://www.linkedin.com/in/victor-durodola-469993247/' className="tab"> <BsLinkedin className='medium-icons'/> </a>
      <a href='https://github.com/Victor-Durodola?tab=repositories' className="tab"> <BsGithub className='medium-icons'/></a>
          <BiLogoGmail className='medium-icons tab'/>
        </div>
      </section>
      <StickyLinks/>
    </>
  )
}

export default App
