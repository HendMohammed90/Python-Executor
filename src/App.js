import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import OutputDisplay from './components/OutputDisplay';
import { executePythonCode } from './services/api';
import './App.css';
import Header from './components/Header';

const App = () => {
  const [outputs, setOutputs] = useState([]); 
  const [sessionId, setSessionId] = useState(null);

  const handleExecute = async (code) => {
    try {
      const response = await executePythonCode(code, sessionId);
      setSessionId(response.id);

      // Create a new output object
      const newOutput = {
        stdout: response.stdout || '',
        stderr: response.stderr || '',
        error: response.error ? response.error : '', 
      };

      // Append the new output to the existing outputs
      setOutputs((prevOutputs) => [...prevOutputs, newOutput]);
    } catch (error) {
      console.error("Error executing code:", error);
      setOutputs((prevOutputs) => [...prevOutputs, { stdout: '', stderr: '', error: "An error occurred while executing the code." }]); // Keep all outputs
    }
  };

  return (
    <div className="app">
      <Header/>
      <div className='container'>
        <CodeInput onExecute={handleExecute} />
        <div className='result'>
          {outputs.map((output, index) => (
            <OutputDisplay 
              key={index} 
              {...output}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 

export default App;
