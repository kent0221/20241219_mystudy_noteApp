/* 
** Sidebar.jsx;
*/ 
import { memo, useEffect } from 'react';

import './Layout.css';
import { NoteCard } from './NoteCard';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useNoteContext } from '../../../providers/NoteContext';
import { useStrage } from '../../../hooks/useStrage';
import { useUpdate } from '../../../hooks/useUpdate';

export const Sidebar = memo(() => {
  // Context
  const { notes, setNotes, setActiveNote } = useNoteContext();
  // hooks
  const { getStrage } = useStrage();
  const { addNote } = useUpdate();
  // function
  useEffect(() => {
    const data = getStrage('notes');
    if(!data){
      return
    }else{
      setNotes(data);
      setActiveNote(data[0]);
    }
  }, [getStrage, setActiveNote, setNotes])
  const onClickAdd = () => addNote();
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
          {!notes ? (null) : (
            notes.map((note)=>
              (
                <li key={note.id} className="c-sidebar_listItem" onClick={()=>onClickActive(note.id)}>
                  <NoteCard id={note.id} title={note.title} content={note.content} date={note.date}/>
                </li>
              )
            )
          )}
        </ul>
      </div>
    </>
  );
});
Sidebar.displayName = 'Sidebar';