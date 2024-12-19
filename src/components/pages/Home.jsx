/* 
** Home.jsx;
*/ 

import { memo } from 'react';
import { HFLayout } from '../templates/HFLayout';
import { Grid } from '../templates/Grid';
import { Sidebar } from '../organisms/Sidebar';
import { Main } from '../organisms/Main';

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