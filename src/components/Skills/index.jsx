import React from 'react'
import "./style.css"

const Skills = () => {
  return (
    <div id='Skills' className='pt-[9.88rem]'>
      <div className='title'>
        <h2 class='[line-break:anywhere] w-full text-[3rem]'>
          MY
          <span class='text-primary'> SKILLS</span>
        </h2>
      </div>

      <div className='tools justify-start'>
        <div className='tools-right flex flex-col'>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='ml-3 mt-3 w-[4.56rem] h-[4.56rem] object-cover'
              alt='python-icon'
              src='/pngegg-4-1@2x.png'
            />
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              Python
            </div>
          </div>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='ml-3 mt-3 w-[6.33rem] h-[4.56rem] object-cover'
              alt='spring-icon'
              src='/pngegg-1-1@2x.png'
            />
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              Java Spring
            </div>
          </div>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='ml-3 mt-3 w-[4.22rem] h-[4.56rem] object-cover'
              alt='nodejs'
              src='/nodejs1174925-1@2x.png'
            />
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              Node.js
            </div>
          </div>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='mt-3 ml-3 w-[4.56rem] h-[4.56rem] object-cover'
              alt=''
              src='/pngegg-3-1@2x.png'
            ></img>
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              NLP
            </div>
          </div>
        </div>
        <div className='tools-left flex flex-col'>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='ml-3 mt-3 w-[4.56rem] h-[4.56rem] object-cover'
              alt=''
              src='/pngegg-2-1@2x.png'
            />
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              React.js
            </div>
          </div>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='mt-3 ml-3 w-[6.08rem] h-[4.56rem] object-cover'
              alt=''
              src='/pngegg-5-1@2x.png'
            />
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              MongoDB
            </div>
          </div>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='ml-3 mt-3 w-[4.26rem] h-[4.56rem] object-cover'
              alt=''
              src='/pngegg-6-1@2x.png'
            ></img>
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              Machine Learning
            </div>
          </div>
          <div class='rounded-xl mt-4 bg-darken-gray w-[34rem] h-[6.5rem] flex flex-row justify-around'>
            <img
              class='ml-3 mt-3  w-[4.56rem] h-[4.56rem] object-cover'
              alt=''
              src='/pngegg-7-1@2x.png'
            />
            <div class='mt-3 text-[2rem] leading-[2.28rem] font-inter flex items-center w-[18.83rem] h-[4.94rem]'>
              Oracle DBA
            </div>
          </div>
        </div>
      </div>
      <div class='line-split absolute left-[18%] box-border mt-[6rem] w-[87.56rem] h-[0.06rem] border-b-[1px] border-solid border-gray flex'></div>
    </div>
  )
}

export default Skills
