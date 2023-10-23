import './App.css'
import Button from './components/Button'
import { useState, useEffect } from 'react'
import Score from './components/Score'
import GameView from './components/GameView'
import confetti from 'canvas-confetti';
import TextBlock from './components/TextBlock'
import CountdownTimer from './components/CountDownTimer'


function App() {
  const timeRemaining = 10


  const [lastScore, setLastScore] = useState(-1)
  const [gameOn, setGameOn] = useState(null)
  const [enabled, setEnabled] = useState(true)
  const [insideGameView, setInsideGameView] = useState(false)
  const [score, setScore] = useState(0)
  const [moveSpeed, setMoveSpeed] = useState(3000)
  const [petPosition, setPetPosition] = useState({ x: 0, y: 0 })
  const [customMousePosition, setCustomMousePosition] = useState({ x: 0, y: 0 })
  const [mouseHoverPet, setMouseHoverPet] = useState(false)

  //pet movement
  useEffect(() => {
    const gameView = document.querySelector('.game-view')

    const posX = Math.floor(Math.random() * gameView.clientWidth)
    const posY = Math.floor(Math.random() * gameView.clientHeight)

    setPetPosition({ x: posX, y: posY })

  }, [enabled])

  //score increase
  useEffect(() => {
    if (score === 5) setMoveSpeed(2500)
    if (score === 10) setMoveSpeed(2000)
    if (score === 15) setMoveSpeed(1500)
    if (score === 20) setMoveSpeed(1000)
    if (score === 30) setMoveSpeed(500)
  }, [score])

  //pet movement (Timeout)
  useEffect(() => {

    const timeOutId = setTimeout(() => {
      if (gameOn)
        setEnabled(!enabled)
    }, moveSpeed);
    console.log(moveSpeed)

    return () => { clearTimeout(timeOutId) }
  }, [enabled])

  //finish game with timeout
  useEffect(() => {
    if (score > 0)
      setLastScore(score)

    if (gameOn) {
      const timeOutId = setTimeout(() => {
        setGameOn(false)
        confetti();//disparamos los confettis

      }, timeRemaining * 1000);

      return () => {
        clearTimeout(timeOutId)
      }
    }

  }, [gameOn])

  const resetStats = () => {
    setScore(0)
    setMoveSpeed(3000)
  }


  //score increase
  useEffect(() => {
    if (mouseHoverPet && gameOn) {
      setScore(score + 1)
      setEnabled(!enabled)
    }
  }, [mouseHoverPet])

  //mouse following
  useEffect(() => {
    console.log('useEffect: mouse following')
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setCustomMousePosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [])

  //chance body class (mouse appearance when inside game view)
  useEffect(() => {
    document.body.classList.toggle('no-cursor', insideGameView)

    return () => {
      document.body.classList.remove('no-cursor')
    }

  }, [insideGameView])


  return (
    <div className='app'>
      <section className='pet-section'>
        <h2>Pets</h2>
        <div className="pets">
          <img src="" alt="dog" />
          <img src="" alt="cat" />
          <img src="" alt="hamster" />
        </div>
      </section>

      <main>
        {
          gameOn ? <CountdownTimer className="contdown-timer" initialSeconds={timeRemaining} />
            : <h3 className='countdown-timer'>PET CATCHER</h3>
        }

        <GameView
          insideGameView={insideGameView}
          petPosition={petPosition}
          customMousePosition={customMousePosition}
          gameOn={gameOn}
          handleEnter={() => setInsideGameView(true)}
          handleLeave={() => setInsideGameView(false)}
          handleHoverPet={() => setMouseHoverPet(true)}
          handleLeavePet={() => setMouseHoverPet(false)} >

          <TextBlock gameOn={gameOn}>
            <h2>Follow the pets!</h2>
            <p>Move your mouse over the pets before they disappear!</p>
          </TextBlock>
        </GameView>

        {
          gameOn ?
            <Button
              handleClick={() => setGameOn(!gameOn)}>
              RESTART GAME
            </Button>
            :
            <Button
              handleClick={() => {
                setGameOn(!gameOn)
                resetStats()
              }}>
              START GAME
            </Button>
        }
      </main>

      <section className='info-section'>
        <h2>User</h2>
        <Score score={score}></Score>
        {
          lastScore > 0 ? <h3 className='countdown-timer'>Last Score: {lastScore}</h3> : null
        }
      </section>

    </div>
  )
}

export default App