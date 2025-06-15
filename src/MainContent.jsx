import { useState } from 'react';

export default function MainContent(){
  const [firstMood, setFirstMood] = useState(0)
  const [secondMood, setSecondMood] = useState(0)
  const [thirdMood, setThirdMood] = useState(0)
  const [fourthMood, setFourthMood] = useState(0)

  function getMoodMessage() {
    if (firstMood >= secondMood && firstMood >= thirdMood && firstMood >= fourthMood && firstMood !== 0) {
      return "You're so happy! 😄"
    } else if (secondMood >= firstMood && secondMood >= thirdMood && secondMood >= fourthMood && secondMood !== 0) {
      return "You're feeling okay. 😐"
    } else if (thirdMood >= firstMood && thirdMood >= secondMood && thirdMood >= fourthMood && thirdMood !== 0) {
      return "You're a bit down. 😞"
    } else if (fourthMood >= firstMood && fourthMood >= secondMood && fourthMood >= thirdMood && fourthMood !== 0) {
      return "You're angry right now! 😠"
    } else {
      return "Click an emoji to track your mood!"
    }
  }

  function resetMoods() {
    setFirstMood(0)
    setSecondMood(0)
    setThirdMood(0)
    setFourthMood(0)
  }

  return(
    <div className='mood-container'>
      <div className='mood-buttons'>
      <button onClick={()=>setFirstMood(firstMood+1)}>😄{firstMood}</button>
      <button onClick={()=>setSecondMood(secondMood+1)}>😐{secondMood}</button>
      <button onClick={()=>setThirdMood(thirdMood+1)}>😞{thirdMood}</button>
      <button onClick={()=>setFourthMood(fourthMood+1)}>😠{fourthMood}</button>
    </div>

    <p className='mood-message'>{getMoodMessage()}</p>

    <button id="refresh-button" onClick={resetMoods}>Refresh</button>
    </div>
  )
}