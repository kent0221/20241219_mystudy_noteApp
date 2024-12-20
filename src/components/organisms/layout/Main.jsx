/* 
** Main.jsx;
*/ 

import { memo, useState } from 'react';
// import PropTypes from 'prop-types';

import './Layout.css';
import { useNoteContext } from '../../../providers/NoteContext';

export const Main = memo(() => {
  // props
  // Context
  const { activeNote } = useNoteContext();
  // hooks
  // State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // function

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <>
      <div className="c-main">
        <div className="c-main_input">
          <input onChange={onChangeTitle} type="text" name="title" id="title" placeholder='新しいノート' value={title}/>
          <textarea onChange={onChangeContent} name="content" id="content" placeholder='ノート内容を記入' value={content}></textarea>
        </div>
        <div className="c-main_preview">
          <div className="c-main_previewTitle">
            <strong>{activeNote.title}</strong>
            <small>最終編集日：{activeNote.date}</small>
          </div>
          <div className="c-main_previewContent">
            <p>{activeNote.content}</p>
          </div>
        </div>
      </div>
    </>
  );
});
Main.displayName = 'Main';
Main.propTypes = {};