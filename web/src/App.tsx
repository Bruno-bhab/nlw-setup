import './styles/global.css'
import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed= {3}/>
      <Habit completed= {4}/>
      <Habit completed= {5}/>
      <Habit completed= {6}/>
    </div>
  )
}

export default App
