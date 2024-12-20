/* 
** Main.jsx;
*/ 

import { memo } from 'react';
// import PropTypes from 'prop-types';

import './Layout.css';
import { useNoteContext } from '../../../providers/NoteContext';
import { useUpdate } from '../../../hooks/useUpdate';
import Markdown from 'react-markdown';

export const Main = memo(() => {
  // props
  // Context
  const { activeNote } = useNoteContext();
  // hooks
  const { onUpdateNotes } = useUpdate();
  // State
  // function
  const onChangeTitle = (e) => onUpdateNotes(e, 'title');
  const onChangeContent = (e) => onUpdateNotes(e, 'content');
  return (
    <>
    {!activeNote ? (
      <p>ノートが選択されていない</p>
    ) : (
      <div className="c-main">
        <div className="c-main_input">
          <input onChange={onChangeTitle} type="text" name="title" id="title" placeholder='新しいノート' value={activeNote?.title??''}/>
          <textarea onChange={onChangeContent} name="content" id="content" placeholder='ノート内容を記入' value={activeNote?.content??''}></textarea>
        </div>
        <div className="c-main_preview">
          <div className="c-main_previewTitle">
            <strong>{activeNote.title}</strong>
            <small>最終編集日：{activeNote.date}</small>
          </div>
          <div className="c-main_previewContent">
            <Markdown>{activeNote.content}</Markdown>
          </div>
        </div>
      </div>
    )}
    </>
  );
});
Main.displayName = 'Main';
Main.propTypes = {};