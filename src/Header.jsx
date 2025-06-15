import './App.css'
import icon from './assets/icon2.png'

export default function Header(){
  return(
    <>
    <div>
      <header>
      <img src={icon} width="40px"></img>
      <h1>Mood Tracker</h1>
    </header>
    </div>
    </>
  )
}