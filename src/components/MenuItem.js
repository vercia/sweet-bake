import React from 'react';
import { Link } from 'react-scroll';

const MenuItem = (props) => {
  return (
    <div>
      <Link
        activeClass='active'
        to={props.path}
        spy={true}
        smooth={true}
        duration={500}
        className='hvr-underline-from-center'
      >
        {props.title}
      </Link>
    </div>
  );
};

export default MenuItem;
