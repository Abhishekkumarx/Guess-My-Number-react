import React, { useState } from 'react';

export default function App() {
  const [guessed,setGuessed] = useState("Make your Guess!!");
  const [attempt,setAttemped] = useState(0);
  const [secret , setSecret]= useState(Math.floor(Math.random() *20) +1);
  const [input,setInput]=useState('');

  
  console.log(secret);

  const guessBtn=()=>{
    if(attempt<3){
      if(input==secret){
      setGuessed('YOU WON!');
      setAttemped(attempt+1);
      }else{
        setAttemped(attempt+1);
        setInput('');
        if(input<secret){
            setGuessed("Number is too less");
        }else{
          setGuessed("Number is too high");
        }
          

      }

    }else{
      setGuessed('Your attempt is over! Please Restart')
    }
    

  };

  const restart =()=>{
    setAttemped(0)
    setGuessed('Make your Guess!!')
    setSecret(Math.floor(Math.random() *20) +1);
    setInput("");
  }








  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white font-inter p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-2xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-6">
          Guess My Number!
        </h1>

        <p className="text-center text-gray-300 mb-6">
          I'm thinking of a number between 1 and 20.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="number"
            placeholder="Enter your guess"
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <button onClick={guessBtn}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200 disabled:opacity-50">
            Guess
          </button>
        </div>

        <div className="text-center h-12 flex items-center justify-center mb-4">
          <p className="text-xl font-medium text-yellow-400">
            {guessed}
          </p>
        </div>

        <div className="text-center text-gray-400 text-lg mb-6">
          <p>
            Attempts: {attempt}
            
          </p>
        </div>

        <div className="mt-6 text-center">
          <button onClick={restart}
          className="w-full sm:w-auto px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200">
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}
