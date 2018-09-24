import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { naming } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3">
      <div className="container">
        <a href="/" className="navbar-brand text-center display-1">
          {naming}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <i className="fas-fa-home" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact/add" className="nav-link">
                {' '}
                <i className="fas-fa-add" />
                Add Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                {' '}
                <i className="fas-fa-question" />
                About us
              </Link>
            </li>

            {/* <li>
              <a href="/" className="nav-link">
                Contact us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  naming: 'My App'
};

Header.propTypes = {
  naming: propTypes.string.isRequired
};

export default Header;
