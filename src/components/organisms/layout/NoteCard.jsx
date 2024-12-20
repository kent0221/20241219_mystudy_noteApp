/* 
** NoteCard.jsx;
*/ 

import { memo } from 'react';
import PropTypes from 'prop-types';

import './Layout.css';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useNoteContext } from '../../../providers/NoteContext';

export const NoteCard = memo((props) => {
  // props
  const { id, title, content, date } = props;
  // Context
  const { notes, setNotes, activeNote } = useNoteContext();
  // hooks
  // State
  // function
  // つまづいた箇所：選択されたことをどのように判断するか
  // → NoteCardにidを渡して、idを引数に削除機能を実装した
  const onClickDelete = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <div className={`c-noteCard ${ id === activeNote.id ? 'isActive' : null}`}>
        <div className="c-noteCard_title">
          <strong>{title}</strong>
          <PrimaryButton onClick={()=>onClickDelete(id)} text='削除'/>
        </div>
        <div className="c-noteCard_content">
          <p>{content}</p>
          <small>最終編集日：{date}</small>
        </div>
      </div> 
    </>
  );
});
NoteCard.displayName = 'NoteCard';
NoteCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};