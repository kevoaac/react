/* eslint-disable react/prop-types */
import hamster from '../img/hamstercrop.png'
import { useState } from 'react';

function Pet({ handleHover, handleLeave, position, gameOn }) {

  const [petStyle, setPetStyle] = useState(null);

  const style1 = {
    transition: 'all 0.5s ease-in-out',
  }
  const style2 = {
    background: '#edc045',
  }

  return (
    <div
      className="pet"
      style={
        {
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          //backgroundColor: 'red',
          borderRadius: '50%',
          padding: '5px',
          width: '50px',
          height: '50px',
          overflow: 'hidden',
          visibility: gameOn ? 'visible' : 'hidden',
          ...petStyle
        }
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave} >
      <img
        onMouseEnter={() => setPetStyle(style2)}
        onMouseLeave={() => setPetStyle(style1)}
        src={hamster}
        alt="pet"
        style={
          {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }
        } />
    </div>
  );
}

export default Pet;