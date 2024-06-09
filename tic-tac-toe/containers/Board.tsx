import {useState} from 'react';

function Board() {
  const [squires, setSquires] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
    Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
  );
  return (
    <div>
      <p>Hey{currentPlayer}, it's your turn</p>
      This is board
    </div>
  );
}

export default Board;
