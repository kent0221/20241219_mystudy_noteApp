/* 
** Sidebar.jsx;
*/ 

import { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';

import './Layout.css';
import { NoteCard } from './NoteCard';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import uuid from 'react-uuid';
import { useNoteContext } from '../../../providers/NoteContext';
import { useStrage } from '../../../hooks/useStrage';

export const Sidebar = memo(() => {
  // props
  // Context
  const { notes, setNotes, setActiveNote } = useNoteContext();
  // hooks
  const { getStrage, setStrage  } = useStrage();
  // State
  // function
  useEffect(() => {
    const data = getStrage('notes');
    setNotes(data)
  }, [getStrage, setNotes])
  
  
  const onClickAdd = () => {
    // console.log('Add!')
    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: '新しいノートの内容',
      date: new Date().toLocaleDateString('ja-JP',{
        year: 'numeric',
        month: '2-digit',
        date: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      dateNum: new Date()
    };
    // つまづいた箇所：notesは配列なのに、newNote追加で[]をつけずに、...notes, newNoteと書いていた
    setNotes( [...notes, newNote] );
    setStrage('notes', [...notes, newNote]);
  };
  const onClickActive = (id) => {
    // 選択されたノートをactiveNoteに保持
    const selectedNote = notes.find(note => note.id === id);
    setActiveNote(selectedNote)
  }
  return (
    <>
      <div className="c-sidebar">
        <div className="c-sidebar_head">
          <div className="c-sidebar_headTitle">
            <h2>ノート</h2>
          </div>
          <div className="c-sidebar_headButton">
            <PrimaryButton onClick={onClickAdd} text='追加'/>
          </div>
        </div>
        <ul className="c-sidebar_list">
          {notes.map((note)=>{
            return(
              <li key={note.id} className="c-sidebar_listItem" onClick={()=>onClickActive(note.id)}>
                <NoteCard id={note.id} title={note.title} content={note.content} date={note.date}/>
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