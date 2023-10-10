/* eslint-disable react/prop-types */

function Button({ children, handleClick }) {

  return (
    <button className="myButton" onClick={handleClick} >
      {children}
    </button>
  );
}

export default Button;