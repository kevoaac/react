import { useState } from "react"

function App() {
  const [roundShape, setRoundShape] = useState(false)


  return (
    <>
     <button 
      onClick={() => setRoundShape(!roundShape)}
      style={{
        width: 100,
        height:100,
        border: '2px solid white',
        background: '#222',
        color: 'white',
        borderRadius: `${roundShape? '50%':'5px'}`,
        transition: 'all 0.2s ease-in-out'
      }} >
        <h2>Change Shape</h2>
      </button>
    </>
  )
}

export default App
