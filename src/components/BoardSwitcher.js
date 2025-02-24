import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const [numClicks, setNumClicks] = useState(0);

  const shiftHighlighting = (event) => {
    setNumClicks((numClicks + 1) % 5);
  };

  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === numClicks;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={shiftHighlighting}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
