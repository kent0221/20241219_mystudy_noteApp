/* 
** useUpdate.js
*/
import { useCallback } from 'react';

import { useNoteContext } from '../providers/NoteContext';
import { useStrage } from './useStrage';

export const useUpdate = () => {
  // Context
  const { notes, setNotes, activeNote, setActiveNote } = useNoteContext();
  // hooks
  const { setStrage } = useStrage();
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
    // 編集した内容をactveNoteに保存する
    const updateNote = {...activeNote, [key]: e.target.value, date: modDate, dateNum: new Date()};
    setActiveNote(updateNote);
    // 編集されたactiveNoteをnotesに反映させる
    const updateNotes = notes.map( note => 
      ( note.id === updateNote.id ? updateNote : note )
    );
    // notesの配列を修正日が新しい順に変更して反映させる
    const sortedNotes = updateNotes.sort((a, b) => b.dateNum - a.dateNum );
    setNotes(sortedNotes);
    // ローカルストレージへ保存
    setStrage('notes', sortedNotes);
  },[activeNote, notes, setActiveNote, setNotes, setStrage])
  
  return { onUpdateNotes }
};