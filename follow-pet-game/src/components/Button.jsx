/* eslint-disable react/prop-types */

function Button({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={
        {
          width: '180px',
          color: 'white',
          fontSize: '1.5rem',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
        }
      } >
      {children}
    </button>
  );
}

export default Button;