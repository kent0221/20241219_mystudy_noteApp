/* 
** Home.jsx;
*/ 

import { memo } from 'react';
import { HFLayout } from '../templates/HFLayout';
import { Grid } from '../organisms/layout/Grid';
import { Sidebar } from '../organisms/layout/Sidebar';
import { Main } from '../organisms/layout/Main';

export const Home = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  return (
    <>
      <HFLayout>
        <Grid sidebar={<Sidebar/>} main={<Main/>}/>
      </HFLayout>
    </>
  );
});
Home.displayName = 'Home';
Home.propTypes = {};