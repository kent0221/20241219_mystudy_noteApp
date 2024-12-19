/* 
** NoteCard.jsx;
*/ 

import { memo } from 'react';
import PropTypes from 'prop-types';

import './Layout.css';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

export const NoteCard = memo((props) => {
  // props
  const { title, content, date } = props;
  // Context
  // hooks
  // State
  // function
  const onClickDelete = () => {
    console.log('delete!')
  };
  return (
    <>
      <div className="c-noteCard">
        <div className="c-noteCard_title">
          <strong>{title}</strong>
          <PrimaryButton onClick={onClickDelete} text='削除'/>
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
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};