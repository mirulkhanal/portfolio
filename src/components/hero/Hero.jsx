import React from 'react';
import { Link } from 'react-router-dom';
import DynamicTitle from './DynamicTitle';

const Hero = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='https://www.mirulkhanal.com.np/image.png'
          className='max-w-sm rounded-lg shadow-2xl border border-primary'
        />
        <div>
          <h1 className='text-5xl font-bold'>
            Hi, I’m Mirul Khanal. I am a <DynamicTitle />
          </h1>
          <p className='py-6'>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <Link to={'/portfolio'} className='btn btn-primary'>
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
