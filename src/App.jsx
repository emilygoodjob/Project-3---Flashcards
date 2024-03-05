import { useState } from 'react'
import './App.css'

const App = () => {

  const pairs = [
    {"question": "Hello", "answer": "你好"},
    {"question": "Bye", "answer": "拜拜"},
    {"question": "Good Morning", "answer": "早上好"},
    {"question": "Good Afternoon", "answer": "中午好"},
    {"question": "Good Evening", "answer": "晚上好"},
    {"question": "Good Night", "answer": "晚安"},
    {"question": "Merry Christma", "answer": "圣诞节快乐"},
    {"question": "Happy New Year", "answer": "新年快乐"},
    {"question": "I'm Hungry", "answer": "我饿了"},
    {"question": "My Name is ...", "answer": "我的名字是..."}
  ];
                  
  const [currIndex, setCurIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // whether flip card
  const flipCard = () => setShowAnswer(!showAnswer);

  // Choose random card
  const showRandomCard = () => {
    const randIndex = Math.floor(Math.random() * pairs.length);
    setCurIndex(randIndex);
    setShowAnswer(false);
  }

  return (
    <div className='Container'>
      <div className='Contents'>
        <h1>Chinese Learning Flashcards!</h1>
        <h2>Don't know how to start learning Chinese? Test to learn basic words here!</h2>
        <h3>Number of cards: 10</h3>
      </div>
      <div className='Card' onClick={flipCard}>
        <h4>{showAnswer ? pairs[currIndex].answer : pairs[currIndex].question}</h4>
      </div>
      <div>
        <button className='button' onClick={showRandomCard}>Next</button> 
      </div>
    </div>
  )
}

export default App
