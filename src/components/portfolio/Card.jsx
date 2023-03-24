import React from 'react';

const Card = ({ repo, btnTitle }) => {
  const { name, description, html_url, image } = repo;
  console.log('Card', name);
  return (
    <div className='card w-96 bg-base-100 shadow-xl h-96 mx-2'>
      <figure className='px-10 pt-10'>
        <img
          src={image || 'https://picsum.photos/400'}
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='card-actions'>
          <a className='btn btn-primary' href={html_url} target='_blank'>
            {btnTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
