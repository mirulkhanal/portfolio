import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ repo }) => {
  const { name, description, html_url } = repo;
  console.log('Card', name);
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src='https://placeimg.com/400/225/arch'
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='card-actions'>
          <a className='btn btn-primary' href={html_url} target='_blank'>
            View Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
