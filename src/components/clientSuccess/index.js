import { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import Loader from '../loader';

function Index({}) {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const [isShown8, setIsShown8] = useState(false);
  const [isShown9, setIsShown9] = useState(false);
  const [isShown10, setIsShown10] = useState(false);
  const [isShown11, setIsShown11] = useState(false);
  const [isShown12, setIsShown12] = useState(false);
  const [isShown13, setIsShown13] = useState(false);

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'https://ecinfosolutions.com/api/client_success/'
        );

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

  const handleClick1 = (event) => {
    // 👇️ toggle visibility

    setIsShown1((current) => !current);
  };
  const handleClick2 = (event) => {
    // 👇️ toggle visibility

    setIsShown2((current) => !current);
  };
  const handleClick3 = (event) => {
    // 👇️ toggle visibility

    setIsShown3((current) => !current);
  };
  const handleClick4 = (event) => {
    // 👇️ toggle visibility

    setIsShown4((current) => !current);
  };
  const handleClick5 = (event) => {
    // 👇️ toggle visibility

    setIsShown5((current) => !current);
  };
  const handleClick6 = (event) => {
    // 👇️ toggle visibility

    setIsShown6((current) => !current);
  };
  const handleClick7 = (event) => {
    // 👇️ toggle visibility

    setIsShown7((current) => !current);
  };
  const handleClick8 = (event) => {
    // 👇️ toggle visibility

    setIsShown8((current) => !current);
  };
  const handleClick9 = (event) => {
    // 👇️ toggle visibility

    setIsShown9((current) => !current);
  };
  const handleClick10 = (event) => {
    // 👇️ toggle visibility

    setIsShown10((current) => !current);
  };
  const handleClick11 = (event) => {
    // 👇️ toggle visibility

    setIsShown11((current) => !current);
  };
  const handleClick12 = (event) => {
    // 👇️ toggle visibility

    setIsShown12((current) => !current);
  };
  const handleClick13 = (event) => {
    // 👇️ toggle visibility

    setIsShown13((current) => !current);
  };
  return (
    <>
      {apiData == '' ? (
        <Loader />
      ) : (
        <div className="clientMainContainer">
          <div className="clientContainer">
            <div className="ourClientContaier">
              <div className="outClientimg">
                <img src={apiData.globle_business_image.file}></img>
              </div>
            </div>
            <div className="ourClientimgText">
              <h1 className="clientHeaderText">
                Businesses&nbsp;
                <FaHeart style />
                &nbsp;EC Infosolutions & we are thankful.
              </h1>
              <p className="homeParaText">
                For EC, customer engagement means a coming together of ideas,
                strategies, execution, revenue acquisition, plan Bs, and the
                overall value creation for customers. We are proud to have
                numerous success stories, and are very thankful to our customers
                for them! Some of our happy customers from different businesses
                are:
              </p>
            </div>

            <div className="divLine"></div>

            <div className="clientModalContainer">
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick1}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Agriculture
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown1 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[0].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="modalContainer">
                <div className="modalName" onClick={handleClick2}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Education
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown2 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[1].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick3}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Engineering
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown3 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[2].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick4}>
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Financial Services
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown4 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[3].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id}className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick5}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Government
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown5 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[4].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick6}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Healthcare
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown6 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[5].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick7}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Media
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown7 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[6].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick8}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Non Profit
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown8 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[7].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick9}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Real Estate
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown9 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[8].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick10}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Services
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown10 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[9].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick11}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Shipping & Logistics
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown11 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[10].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick12}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Software
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown12 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[11].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="modalContainer">
                <div className="modalName" onClick={handleClick13}>
                  {' '}
                  &nbsp;
                  <AiFillCaretDown />
                  &nbsp; Travel & Hospitality
                </div>
                <div
                  className="modalLink"
                  style={{
                    display: isShown13 ? 'flex' : 'none',
                    padding: '15px',
                    flexWrap: 'wrap',
                  }}
                >
                  {apiData.client_category[12].client_logo.map(
                    (value, index) => {
                      return (
                        <img key={value.id} className="partnerImg" src={value.file}></img>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
{
}
