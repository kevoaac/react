/* eslint-disable react/prop-types */
import Pet from './Pet'

function GameView({ children, handleEnter, handleLeave, insideGameView, petPosition, customMousePosition, handleHoverPet, handleLeavePet, gameOn }) {

  return (
    <div
      className="game-view"
      style={{ position: 'relative' }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}>

      <div
        className='custom-cursor'
        style={
          {
            position: 'fixed',
            backgroundColor: 'rgba(0,0,0,.5)',
            border: '1px solid white',
            borderRadius: '50%',
            opacity: .8,
            pointerEvents: 'none',
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${customMousePosition.x}px, ${customMousePosition.y}px)`,
            visibility: insideGameView ? 'visible' : 'hidden'
          }
        }>
      </div>

      {children}

      <Pet
        handleHover={handleHoverPet}
        handleLeave={handleLeavePet}
        position={petPosition}
        gameOn={gameOn} />
    </div>
  );
}

export default GameView;