import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader';

function pricingPage({}) {
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://ucalc.pro/api/widget.js?id=295368';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://techmergers.in:5000/api/prizing/');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();

        setApiData(data[0]);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);



  return (
    <>
      {apiData == '' ? (
        <Loader />
      ) : (
        <div className="pytDevMainContainer">
          <div className="pytDevContainer">
            <div className="titlecost">
              <p>{apiData?.prizing_title}</p>
            </div>

            <div className="uCalc_295368"></div>

            <div className="moreFreedomContainer">
              <div className="partnerShips">
                {apiData?.pafrtner_images.map((value, index) => {
                  return (
                    <Link key={value.id} href="">
                      <img className="partnerImg" src={value.file}></img>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="questionContainer">
              <pre
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                className="labCorePreQuestion"
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData?.questions)[0].value,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default pricingPage;
