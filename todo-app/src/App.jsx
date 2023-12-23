import './App.css'
import { NextUIProvider } from "@nextui-org/react";
import Header from './components/Header';
import Task from './components/Task';

function App() {
  return (
    <NextUIProvider>
      <Header />
      <Task text="Pasear al perro" />
    </NextUIProvider>

  )
}

export default App
