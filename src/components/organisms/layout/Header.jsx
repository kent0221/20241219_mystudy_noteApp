/* 
** Header.jsx;
*/ 
import { memo } from 'react';

import './Layout.css';

export const Header = memo(() => {
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