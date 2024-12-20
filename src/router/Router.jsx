/* 
** Router.jsx;
*/ 
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../components/pages/Home';

export const Router = memo(() => {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
});
Router.displayName = 'Router';