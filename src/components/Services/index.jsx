import React from 'react'
import './style.css'

const Services = () => {
  return (
    <div id='Services' className='pt-[3.88rem]'>
      <div className='title'>
        <h2 class='[line-break:anywhere] w-full text-[3rem]'>
          MY
          <span class='text-primary'> SERVICES</span>
        </h2>
      </div>
      <div className='title-1 text-center text-gray mr-[9rem]'>
        <span class='[line-break:anywhere] font-bold text-center w-full text-[2.5rem]'>
          <span>WHAT CAN </span>
          <span class='text-primary'>I DO BEST ?</span>
        </span>
      </div>
      <div className='services-section mt-[4rem]'>
        <div className='grp-1 flex flex-row'>
          <img
            className='h-[371px] w-[126px] mt-[1.1rem]'
            alt='arrows'
            src='/group-3.svg'
          />
          <div className='group-2 flex flex-col'>
            <b class='leading-[2.28rem] text-[2rem] flex items-center mb-[7rem] w-[26.31rem] h-[3.5rem]'>
              APIs integration
            </b>
            <b class='leading-[2.28rem] text-[2rem] flex items-center  mb-[7rem] w-[26.31rem] h-[3.5rem]'>
              Build Data Crawlers
            </b>
            <b class='leading-[2.28rem] text-[2rem] flex items-center w-[26.31rem] h-[3.5rem]'>
              Build Cloud Server
            </b>
          </div>
        </div>

        <div className='grp-2 flex flex-col mt-[-2.3rem]'>
          <div className='circle'>
            <img class='relative ml-[17rem] ' alt='' src='/ellipse-14.svg' />
          </div>
          <div className='line'>
            <img class='ml-[19rem] mt-4' alt='' src='/line-3.svg'></img>
          </div>

          <img class='ml-[17rem] mt-3 ' alt='' src='/ellipse-14.svg' />
          <div className='line'>
            <img class='ml-[19rem] mt-4' alt='' src='/line-3.svg'></img>
          </div>
          <img class='ml-[17rem] mt-3 ' alt='' src='/ellipse-14.svg' />
        </div>
        <div className='grp-3 flex flex-row'>
          <img
            className='h-[371px] w-[126px] mt-[1.1rem]'
            alt='arrows'
            src='/group-3.svg'
          />
          <div className='group-2 flex flex-col'>
            <b class='leading-[2.28rem] text-[2rem] flex items-center mb-[7rem] w-[26.31rem] h-[3.5rem]'>
              Build Web Application
            </b>
            <b class='leading-[2.28rem] text-[2rem] flex items-center  mb-[7rem] w-[26.31rem] h-[3.5rem]'>
              Build & Administrate Databases
            </b>
            <b class='leading-[2.28rem] text-[2rem] flex items-center w-[26.31rem] h-[3.5rem]'>
              Build Machine Learning Models
            </b>
          </div>
        </div>
      </div>
      <div class='line-split absolute left-[18%] box-border mt-[6rem] w-[87.56rem] h-[0.06rem] border-b-[1px] border-solid border-gray flex'></div>
    </div>
  )
}

export default Services
