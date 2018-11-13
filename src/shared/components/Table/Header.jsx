import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title, isFavorite, to, className }) => {

  let component = (
    <div className={`row col ${className}`}>
      <span>
        {to !== '' && ('< ')} {title}
      </span>
      { isFavorite && (
        <img src='' />
      )}
    </div>
  );

  if (to !== '') {
    component = (
      <Link to={to}>
        {component}
      </Link>
    );
  };

  return(
    <div>
      {component}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  isFavorite: PropTypes.bool,
  to: PropTypes.string,
}

Header.defaultProps = {
  isFavorite: false,
  to: '',
}

export default Header;