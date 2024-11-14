import React from 'react';

const OutputDisplay = ({ stdout, stderr, error }) => {
  return (
    <div className="output-display">
      <div className='heading'>
        <strong className={`${stdout !== "" ? 'output-label' : ''} error-header`}>STDOUT:</strong>
        <strong className={`${stderr !== "" ? 'output-label' : ''} error-header`}>STDERR:</strong>
      </div>
        
      {error && (
        <div className="error ">
          <strong className='output-label error-header'>Error:</strong>
          <pre className="output-content">{error}</pre>
        </div>
      )}
      {stderr && (
        <div className="stderr">
          <pre className="output-content">{stderr}</pre>
        </div>
      )}
      {stdout && (
        <div className="stdout">
          <pre className="output-content">{stdout}</pre>
        </div>
      )}
    </div>
  );
};

export default OutputDisplay;
