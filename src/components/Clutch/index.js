import React, { useEffect } from 'react';

function index() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.clutch.co/static/js/widget.js';
    script.async = true;
    document.body.appendChild(script);
    // run script
    script.onload = () => {
      window.CLUTCHCO.Init();
    };
    return () => {
      window.CLUTCHCO.Destroy();
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          display: 'block',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        <div
          style={{ maxWidth: '990px', width: '100%', display: 'inline-block' }}
        >
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="4"
            data-expandifr="true"
            data-height="auto"
            data-snippets="true"
            data-clutchcompany-id="41481"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default index;
