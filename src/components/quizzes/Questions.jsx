import React, {useState } from 'react';
import Difficulty from '../questionsNdiff/Difficulty';
import Game from '../questionsNdiff/Game';

function Questions() {
  const [difficulty, setDifficulty] = useState('');
  const [show, setShow] = useState(true);
  const handleClick = (e) => {
    setDifficulty(e);
    setShow(false);
  };

  return (
    <>

<div>
      {
        show ? (<Difficulty handleClick={handleClick} />) : (<Game difficulty={difficulty} />)
      }

      </div>

    </>
  );
}

export default Questions;
