/* 
** useUpdate.js
*/
import { useCallback } from 'react';

import { useNoteContext } from '../providers/NoteContext';

export const useUpdate = () => {
  // Context
  const { notes, setNotes, activeNote, setActiveNote } = useNoteContext();
  // State
  // function
  const onUpdateNotes = useCallback((e,key) =>{
    // 現在を編集日として定義
    const modDate = new Date().toLocaleDateString('ja-JP',{
      year: 'numeric',
      month: '2-digit',
      data: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    // 編集した内容をactveNoteに保存
    const updateNote = {...activeNote, [key]: e.target.value, date: modDate};
    setActiveNote(updateNote);
    const updateNotes = notes.map( note => 
      ( note.id === updateNote.id ? updateNote : note )
    );
    setNotes(updateNotes);


  },[activeNote, notes, setActiveNote, setNotes])
  return { onUpdateNotes }
};