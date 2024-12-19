/* 
** Main.jsx;
*/ 

import { memo } from 'react';
// import PropTypes from 'prop-types';

import './Layout.css';

export const Main = memo(() => {
  // props
  // Context
  // hooks
  // State
  // function
  const data = {
    title: 'プレビューのタイトル',
    content: 'プレビューのノート内容'
  };

  const onChangeTitle = () => {
    console.log('title')
  };
  const onChangeContent = () => {
    console.log('content')
  };
  return (
    <>
      <div className="c-main">
        <div className="c-main_input">
          <input onChange={onChangeTitle} type="text" name="title" id="title" placeholder='新しいノート' value=''/>
          <textarea onChange={onChangeContent} name="content" id="content" placeholder='ノート内容を記入' value=''></textarea>
        </div>
        <div className="c-main_preview">
          <div className="c-main_previewTitle">
            <strong>{data.title}</strong>
          </div>
          <div className="c-main_previewContent">
            <p>{data.contetn}</p>
          </div>
        </div>
      </div>
    </>
  );
});
Main.displayName = 'Main';
Main.propTypes = {};