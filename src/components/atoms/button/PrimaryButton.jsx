/* 
** PrimaryButton.jsx;
*/ 

import { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export const PrimaryButton = memo((props) => {
  // props
  const { onClick, text } = props;
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <Button variant='outlined' onClick={onClick}>{text}</Button>
    </>
  );
});
PrimaryButton.displayName = 'PrimaryButton';
PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};