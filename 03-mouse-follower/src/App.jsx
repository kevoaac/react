import { useEffect, useState } from "react"
function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //USE EFFECT
  // [] -> cuando se monta el componente
  // [variable] -> cuando cambia la variable 
  // undefined / no pasarle nada -> cuando se monta el componente y cuando cambia cualquier variable

  //pointer move 
  useEffect(() => {
    console.log('efecto', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log({ clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    //cleanup
    //--> se ejecuta cuando el componente se desmonta (no se muestra en pantalla)
    //--> se ejecuta cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  //chance body class
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }

  }, [enabled])

  return (
    <main>
      <div style={
        {
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,.5)',
          border: '1px solid white',
          borderRadius: '50%',
          opacity: .8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
          visibility: enabled ? 'visible' : 'hidden'
        }
      }>
      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
