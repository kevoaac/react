import './App.css'
import Button from './components/Button'
import { useState } from 'react'
import Score from './components/Score'


function App() {

  const [enabled, setEnabled] = useState(false)
  const [score, setScore] = useState(0)

  const addToScore = () => {
    setScore(score + 1)
  }

  return (
    <>
      <h1>GAME</h1>
      <Button handleClick={() => setEnabled(!enabled)}>
        {enabled ? 'Star Game' : 'Reset Game'}
      </Button>
      <Button handleClick={addToScore}>Add to score</Button>

      <Score score={score}></Score>
    </>
  )
}

export default App
