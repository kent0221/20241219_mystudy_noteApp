/* 
** HFLayout.jsx;
*/ 

import { memo } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../organisms/layout/Header';
import { Footer } from '../organisms/layout/Footer';

export const HFLayout = memo((props) => {
  // props
  const { children } = props;
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <Header/>
      { children }
      <Footer/> 
    </>
  );
});
HFLayout.displayName = 'HFLayout';
HFLayout.propTypes = {
  children: PropTypes.node
};