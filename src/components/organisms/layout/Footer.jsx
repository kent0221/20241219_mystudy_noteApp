/* 
** Footer.jsx;
*/ 
import { memo } from 'react';

import './Layout.css';

export const Footer = memo(() => {
  return (
    <>
      <footer className="c-footer">
        <div className="c-footer_coprtight">
          <span>2024 memoApp</span>
        </div>
      </footer> 
    </>
  );
});
Footer.displayName = 'Footer';