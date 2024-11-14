import axios from 'axios';

const API_URL = 'http://localhost:3001/execute';

export const executePythonCode = async (code, sessionId) => {
  const payload = {
    code,
    ...(sessionId && { id: sessionId })
  };

  try {
    const response = await axios.post(API_URL, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    return response.data;
  } catch (error) {
    return { error: 'Error connecting to the server' };
  }
};
