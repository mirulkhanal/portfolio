import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='container my-24 px-6 mx-auto'>
        {/* Section: Design Block */}
        <section className='mb-32 text-center text-primary'>
          <div className='max-w-[700px] mx-auto px-3 lg:px-6'>
            <h2 className='text-3xl font-bold mb-12'>Contact us</h2>
            <form>
              <div className='form-group mb-6'>
                <input
                  type='text'
                  className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleInput7'
                  placeholder='Name'
                />
              </div>
              <div className='form-group mb-6'>
                <input
                  type='email'
                  className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='exampleInput8'
                  placeholder='Email address'
                />
              </div>
              <div className='form-group mb-6'>
                <textarea
                  className='
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          '
                  id='exampleFormControlTextarea13'
                  rows={3}
                  placeholder='Message'
                  defaultValue={''}
                />
              </div>

              <button
                type='submit'
                className='
          w-full
          px-6
          py-2.5
          bg-primary
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:shadow-xl
          transition
          duration-150
          ease-in-out'>
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
