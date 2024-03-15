import { useState } from "react";
import '../index.css'

const InputAnswer = ({ correctAnswer }) => {
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleChange = (e) => {
        setUserInput(e.target.value);
        setIsCorrect(null); // reset correctness when user type
    };

    const handleSubmit = () => {
        if(userInput.trim() === correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
                style={{
                    width: '20vh',
                    height: '4vh',
                    display: 'inline-block',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                    fontSize: '20px',
                    fontWeight: 10,
                    borderWidth: isCorrect === true ? '5px' : isCorrect === false ? '5px' : 'initial',
                    borderColor: isCorrect === true ? 'green' : isCorrect === false ? 'red' : 'initial',
                    color: isCorrect === true ? 'green' : isCorrect === false ? 'red' : 'initial',
                }}
                placeholder="Input text here"
            />
            <button onClick={handleSubmit}>Submit Guess</button>
        </div>
    );
};

export default InputAnswer;
