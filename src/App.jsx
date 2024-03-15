import { useState } from 'react'
import './App.css'
import InputAnswer from "./Components/inputAnswer.jsx";

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
  const [prevIndices, setPrevIndices] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const flipCard = () => setFlipped(!flipped);

  const showRandomCard = () => {
    const randIndex = Math.floor(Math.random() * pairs.length);
    if (prevIndices[prevIndices.length - 1] !== randIndex) {
      // Save current index before moving to next
      setPrevIndices([...prevIndices, currIndex]); 
    }
    setCurIndex(randIndex);
    setFlipped(false);
    setResetKey(prevKey => prevKey + 1);
  };

  const showPrevCard = () => {
    if (prevIndices.length > 0) {
      // Get the last index
      const prevIndex = prevIndices.pop();
      setCurIndex(prevIndex);
      setPrevIndices([...prevIndices]); 
      setFlipped(false);
      setResetKey(prevKey => prevKey + 1);
    }
  };

  return (
    <div className='Container'>
      <div className='Contents'>
        <h1>Chinese Learning Flashcards!</h1>
        <h2>Don't know how to start learning Chinese? Test to learn basic words here!</h2>
        <h3>Number of cards: {pairs.length}</h3>
      </div>
      <div className={`Card ${flipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="CardInner">
          <div className="CardFront">
            <h4>{pairs[currIndex].question}</h4>
          </div>
          <div className="CardBack">
            <h4>{pairs[currIndex].answer}</h4>
          </div>
        </div>
      </div>

      <div className="inputContainer">
        <h3 className="guess-text">Guess the answer here:</h3>
        <InputAnswer
          key={resetKey}
          correctAnswer={pairs[currIndex].answer} 
        />
      </div>

      <div>
        <button className='button orderButton' onClick={showPrevCard}>Prev</button> 
        <button className='button orderButton' onClick={showRandomCard}>Next</button> 
        <button className='button shuffleButton'>Shuffle Cards</button>
      </div>
    </div>
  );
}

export default App;