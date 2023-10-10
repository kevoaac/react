/* eslint-disable react/prop-types */
function TextBlock({ children, gameOn }) {
  return (
    <div style={
      {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        width: '60vh',
        height: '60vh',
        backgroundColor: 'rgba(0,0,0,.5)',
        border: '1px solid white',
        borderRadius: '10px',
        visibility: gameOn ? 'hidden' : 'visible'
      }
    }>
      {children}
    </div>
  );
}

export default TextBlock;