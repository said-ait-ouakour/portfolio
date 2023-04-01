import React from 'react'
import './style.css'

const About = () => {
  return (
    <div
      className='about-section flex flex-col'
      id='About'
    >
      <div className='section-content flex flex-row  justify-between'>
        <div className='description-text container h-[50vh] w-[37%] text-[2.8rem] text-white pl-[3rem] leading-[2.28rem]'>
          <h1>
            Hi I'm Said A<span className='text-primary'>.</span>
          </h1> 
          <div class='labels text-[1.63rem] leading-[2.28rem] flex items-center w-[46.75rem] h-[3.88rem]'>
            Data Engineer / Web Developer / Web Scrapper
          </div>
          <div class='about-me mt-6 left-[8.94rem] text-[1.5rem] leading-[2.28rem] text-gray flex items-center w-[36.81rem] h-[9.44rem]'>
            I am a data engineer, with a strong foundation in computer science
            and a deep understanding of data systems and technologies, I am
            equipped with the technical skills necessary to tackle complex data
            challenges.
          </div>
          <button class='cv-btn mt-[3rem] w-[30%] rounded-8xs bg-primary flex flex-row py-[0.81rem] px-[1.13rem] items-center justify-center text-[1.5rem]'>
            <a
              class='no-underline text-bold text-white relative leading-[2.28rem]'
              href='https://pdfhost.io/v/OhI.7~xsm_Pink_Simple_Profile_Resume'
              target='_blank'
              type='application/octet-stream'
              download
            >
              Download CV
            </a>
          </button>
          <div className='social-links mt-[5rem]'>
            <a
              href='https://www.instagram.com/said_ait_ouakour_41/'
              target='_blank'
            >
              <img
                class='social-icon w-[3.13rem] h-[3.13rem]'
                src='/instagram.svg'
              />
            </a>
            <a href='https://github.com/moon41x4' target='_blank'>
              <img
                class='social-icon ml-6 w-[3.13rem] h-[3.13rem]'
                alt=''
                src='/github.svg'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/said-ait-ouakour-68a93a1b0'
              target='_blank'
            >
              <img
                class='social-icon ml-6 w-[3.13rem] h-[3.13rem]'
                src='/linkedin.svg'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='design-container flex flex-row'>
        <img
          class='circle-1 absolute top-[10.88rem] left-[80.81rem] overflow-hidden z-0 w-[18.44rem] h-[18.06rem]'
          alt=''
          src='/ellipse-2.svg'
        />
        <img
          class='pf-img absolute top-[13.88rem] left-[70.81rem] w-[32.81rem] h-[31.75rem] object-cover z-10'
          alt=''
          src='/ellipse-1@2x.png'
        />
        <img
          class='circle-2 absolute top-[30.88rem] left-[67.81rem] overflow-hidden z-0 w-[18.44rem] h-[18.06rem]'
          alt=''
          src='/ellipse-4.svg'
        />
      </div>
      <div class='line-split box-border mt-[15rem] ml-[10rem] w-[87.56rem] h-[0.06rem] border-b-[1px] border-solid border-gray flex items-center'></div>
    </div>
  )
}

export default About
