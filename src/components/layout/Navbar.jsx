import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 font-extrabold'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link to={'/portfolio'}>Portfolio</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'} className='btn btn-ghost normal-case text-2xl'>
          <span className='text-primary mx-1 '>Mirul</span> Khanal
        </Link>
      </div>
      {/* Desktop */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 gap-2'>
          <li>
            <Link to={'/portfolio'}>Portfolio</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        {/* <Link to={'/resume'} className=''> */}
        <a
          className='btn btn-primary'
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'>
          Preview CV
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
