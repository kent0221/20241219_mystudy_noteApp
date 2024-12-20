/* 
** Grid.jsx;
*/ 
import { memo } from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

export const Grid = memo((props) => {
  // props
  const { sidebar, main } = props;
  return (
    <>
      <div className="c-grid">
        <section className="c-grid_sidebar">{sidebar}</section>
        <section className="c-grid_main">{main}</section>
      </div>
    </>
  );
});
Grid.displayName = 'Grid';
Grid.propTypes = {
  sidebar: PropTypes.node,
  main: PropTypes.node,
};