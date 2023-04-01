import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col pt-[9.88rem] ml-[14rem]' id="Contact">
      <div className='title'>
        <h2 class='[line-break:anywhere] w-full text-[3rem]'>
          Get in
          <span class='text-primary'> touch</span>
        </h2>
      </div>
      <form className='mt-6 w-[50%]'>
        <div className='message-con mt-[3rem]'>
          <label className='text-[1.2rem]'> Full Name : </label>
          <input
            type={'text'}
            name='name'
            placeholder='Entre your name'
            className='bg-transparent border mt-6 border-gray-300 w-[50%] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xl'
          ></input>
        </div>

        <div className='message-con mt-[3rem]'>
          <label className='text-[1.2rem]'> E-mail : </label>
          <input
            type={'email'}
            name='email'
            placeholder='Entre your email address'
            className='bg-transparent mt-6 border border-gray-300 w-[50%] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xl'
          ></input>
        </div>

        <div className='message-con mt-[3rem]'>
          <label className='text-[1.2rem]'> Message: </label>
          <input
            type='text'
            name='message'
            className='bg-transparent flex flex-wrap h-[6rem] p-[.7rem] mt-6 border border-gray-300 relative w-[50%] text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-start dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xl'
          ></input>
          <button class='cv-btn mt-[3rem] rounded-8xs bg-primary flex flex-row py-[0.81rem] px-[1.13rem] items-center text-white justify-center text-[1.3rem]' type='submit'>
            <b class='relative leading-[2.28rem]'>Send message </b>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
