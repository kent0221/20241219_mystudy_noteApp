/* 
** Header.jsx;
*/ 

import { memo } from 'react';
// import PropTypes from 'prop-types';

import './Layout.css';

export const Header = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <header className="c-header">
        <div className="c-header_title">
          <h1>ノートアプリ</h1>
        </div>
      </header>
    </>
  );
});
Header.displayName = 'Header';
Header.propTypes = {};