/**
 * NoteProvider.jsx
 */
import { useState } from "react";
import PropTypes from "prop-types";
import { NoteContext } from "./NoteContext";

export const NoteProvider = (props) => {
  // props
  const { children } = props;
  // State
  const [ notes, setNotes ] = useState([]);
  const [activeNote, setActiveNote] = useState({})
  // function
  
  return (
      <NoteContext.Provider value={{ notes, setNotes, activeNote, setActiveNote }}>
       { children }
      </NoteContext.Provider>
  );
};
NoteProvider.propTypes = {
  children: PropTypes.node
};