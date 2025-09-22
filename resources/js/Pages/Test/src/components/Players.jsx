import { useEffect, useState } from 'react';


function Players({intialName ,symbol,isActive}) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setplayerName] = useState(intialName);

  function handleIsEditing() {
    setisEditing( isEditing => !isEditing);
  };

  function handleChange (event) {
    setplayerName(event.target.value);
  };

  let editablePlayer = <span className='player-name'>{playerName}</span>
  if(isEditing){
      editablePlayer = <input type="text" required value={playerName} onChange={handleChange}/>;
  }

  return (
        <li className={isActive ? 'active':undefined}>
          <span className="player">
            {editablePlayer}
            <span className='player-symbol'>{symbol}</span>
          </span>
          <button onClick={handleIsEditing}>{isEditing ? 'Save' : 'Edit' }</button>
        </li>

    );
}
export default Players;
