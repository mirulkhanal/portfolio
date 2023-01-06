// import React, { useEffect, useState } from 'react';
import useTitle, { Phase } from './useTitle';
import cn from 'classnames';

const titles = [
  {
    title: 'A Fullstack Web Developer',
  },
  {
    title: 'Data Analyst',
  },
  {
    title: 'Mobile App Developer',
  },
  {
    title: 'Python & Tensorflow Developer',
  },
];

const DynamicTitle = () => {
  const { typedTitle, selectedTitle, phase } = useTitle(titles);
  return (
    <span
      className={cn('font-bold text-shadow-cn text-primary', {
        'end-cursor': phase !== Phase.deleting,
        blinking: phase === Phase.idle,
      })}
      aria-label={selectedTitle}>
      {typedTitle}
    </span>
  );
};

export default DynamicTitle;

// A Fullstack Web Developer
