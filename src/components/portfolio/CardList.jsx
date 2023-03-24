import React from 'react';
import Card from './Card';

const CardList = ({ repos, title, btnTitle }) => {
  return (
    <div className='flex flex-col  mt-4 capitalize '>
      <div className='h-10 bg-primary  flex items-center rounded-md  mx-2 '>
        <h1 className=' text-xl text-base-200 font-semibold justify-center md:ml-5 ml-1'>
          {title}
        </h1>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 p-10 '>
        {repos &&
          repos.map((repo) => (
            <Card repo={repo} key={repo.id} btnTitle={btnTitle} />
          ))}
      </div>
    </div>
  );
};

export default CardList;
