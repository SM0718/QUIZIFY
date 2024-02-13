import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../appwrite/auth';
import appwriteService from '../../appwrite/config';


function Game({ difficulty }) {
  const [data, setData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerScore, setPlayerScore] = useState(0)
  const { qid } = useParams();
  const [checkAnswer, setCheckAnswer] = useState("")
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [shuffledArray, setShulffedArray] = useState([])
  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.status)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!authStatus){
      navigate("/login")
    }
  })


  const registerScoreDetails = async() => {
    try {
      const user = await authService.getCurrentUser()
      if(user) {
        const data = await appwriteService.createPlayerScoreInfo({playerName: user.name, playerEmail: user.email, playerScore: playerScore.toString()})
        if(data) {
          navigate('/results');
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (difficulty) {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${qid}&difficulty=${difficulty}&type=multiple`
      )
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [difficulty, qid]);
  
  useEffect(() => {
    if (data[currentQuestionIndex]) {
      let arr = [
        data[currentQuestionIndex].correct_answer,
        ...data[currentQuestionIndex].incorrect_answers
      ];
  
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
  
      setShulffedArray(arr);
    }
  }, [data, currentQuestionIndex]);
  

  const handleAnswerSelect = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer; 
    setUserAnswers(newAnswers); 
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const verifyAnswer = () => {
    const correctAnswer = data[currentQuestionIndex].correct_answer;
    
    if (checkAnswer === correctAnswer) {
      setPlayerScore(playerScore + 1);
  } else {
      setPlayerScore(playerScore);
  }
  }

  const handelResult = () => {
    registerScoreDetails()
  }
  
  

  return (
    <div className='w-full h-full my-4 bg-[#5228f5] font-["Inter"] flex flex-col text-center'>
      {data && currentQuestionIndex < data.length && 
              (<div className='w-5/6 mx-auto pb-8 h-full bg-[#5228f5] flex flex-col justify-evenly font-["Inter"]' key={currentQuestionIndex}>
                 

              <div className='h-full text-white mx-auto flex flex-col text-justify pb-8'>
                 <h1 className='text-white text-2xl leading-normal font-medium mt-2 pb-4'
                 >Q{currentQuestionIndex + 1}: {data[currentQuestionIndex].question}</h1>

              {
    (shuffledArray.map((answer, i) => (
      <span className='w-full sm:w-[400px] h-full mx-auto text-center my-4' key={i}>
        <button
          className={`w-full mx-auto p-4 rounded-full text-white font-medium font-Inter
          hover:scale-105 ${selectedAnswer === answer ? 'bg-green-500' : 'bg-[#291477]'}`}
          id={currentQuestionIndex}
          value={answer}
          name={`question_${currentQuestionIndex}`}
          onClick={(e) => {handleAnswerSelect(currentQuestionIndex, e.target.value)
            setCheckAnswer(e.target.value)
          }}
        >{answer}</button>
      </span> 
      
    )))
    }
                
              </div>
              
            <div className='w-5/6 mx-auto flex justify-between'>
          
          {currentQuestionIndex === data.length - 1 ? (
    <Button
      className='w-[200px] mx-auto sm:ml-auto p-4 rounded-full bg-[#291477] text-white font-medium font-["Inter"] hover:scale-105'
      onClick={() => {
        verifyAnswer();
        handelResult();
      }}
    >
      Finish
    </Button>
) : (
  <Button
    className='w-[200px] mx-auto sm:ml-auto p-4 rounded-full bg-[#291477] text-white font-medium font-["Inter"] hover:scale-105'
    onClick={() => {
      verifyAnswer();
      handleNextQuestion();
    }}
  >
    Next Question
  </Button>
)}
          </div>
            
            
          </div>)
          
            }
          </div>
  );
}

export default Game;
