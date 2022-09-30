import React, { useEffect } from 'react';

function chatbot() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'http://js.hs-scripts.com/9316836.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default chatbot
