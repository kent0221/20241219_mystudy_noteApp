/* 
** Sidebar.jsx;
*/ 

import { memo } from 'react';
// import PropTypes from 'prop-types';

import './Layout.css';
import { NoteCard } from './NoteCard';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

export const Sidebar = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  const data ={
    title: 'タイトル',
    content: 'ノートの内容',
    date:'xx/xx/xx'
  }
  const onClickAdd = () => {
    console.log('Add!')
  };
  return (
    <>
      <div className="c-sidebar">
        <div className="c-sidebar_head">
          <div className="c-hsidebar_headTitle">
            <h2>ノート</h2>
          </div>
          <div className="c-sidebar_headButton">
            <PrimaryButton onClick={onClickAdd} text='追加'/>
          </div>
        </div>
        <ul className="c-sidebar_list">
          {[...Array(4)].map((_, id)=>{
            return(
              <li key={id} className="c-sidebar_listItem">
                <NoteCard title={data.title} content={data.content} date={data.date}/>
              </li>

            )
          })}
        </ul>
      </div>
    </>
  );
});
Sidebar.displayName = 'Sidebar';
Sidebar.propTypes = {};