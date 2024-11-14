import React, { useState } from 'react';

const CodeInput = ({ onExecute }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      onExecute(code);
    }
  };

  return (
    <div className="code-input">
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Python code here..."
        />
        <button class="run-button" type="submit">
          <span class="play-icon">▶</span>
          Run
        </button>
      </form>
    </div>
  );
};

export default CodeInput;
