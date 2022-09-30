import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaBolt,
  FaBuilding,
  FaCar,
  FaIndustry,
  FaLaptop,
  FaLeaf,
  FaMedkit,
  FaMoneyBill,
  FaPhoneVolume,
  FaUniversity
} from 'react-icons/fa';
import 'react-phone-number-input/style.css';
import Form from '../hubForm/form';
import Loader from '../loader';

function googleCloudPage({}) {
  const [apiData, SetApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'https://techmergers.in/api/google/'
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        SetApiData(data[0]);
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
        <div style={{ marginTop: '100px' }}>
          <div className="glImg">
            <img src={apiData.google_image.file}></img>
          </div>
          <div className="homeMainContainer">
            <div className="homeContainer">
              <div className="gl">
                <div
                  className="glUl"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="glUl"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData?.google_quote)[0].value,
                  }}
                />
              </div>

              <div className="gl">
                <div className="glBox">
                  <div className="glTextBox">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      className="djangoFormpre"
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData?.google_workspace)[0].value,
                      }}
                    />
                  </div>
                  <div className="glFormBox">
                    <div className="glfomeContainer">
                      <Form />
                    </div>
                  </div>
                </div>
              </div>

              <div className="gl">
                <h1 className="glHeding">{apiData.g_suite_features}</h1>
                <div className="glBox">
                  <div className="glCard">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData?.gmail_for_business)[0]
                          .value,
                      }}
                    />
                  </div>
                  <div className="glCard">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(
                          apiData?.google_hangout_and_calender
                        )[0].value,
                      }}
                    />
                  </div>
                  <div className="glCard">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData?.google_drive_and_docs)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>
              </div>

              <Link href="app-cost-roi-calculator">
                <div className="glbuildYourQuoteBtn">
                  <div style={{ cursor: 'pointer' }}>
                    Cloud Services Order Form
                  </div>
                </div>
              </Link>

              {/* <Link href='/pricing'> <div className="glbuildYourQuoteBtn">
            <div>Cloud Services Order Form</div>
          </div></Link> */}

              <div className="gl">
                <div className="glBox">
                  <div className="glbusiness">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData?.business_starter)[0].value,
                      }}
                    />
                  </div>

                  <div className="glbusiness">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData?.business_standard)[0].value,
                      }}
                    />
                  </div>

                  <div className="glbusiness">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData?.business_plus)[0].value,
                      }}
                    />
                  </div>

                  <div className="glbusiness">
                    <pre
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData?.enterprise)[0].value,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="gl">
                <h1 className="glHeding">INDUSTRIES WE SERVE:</h1>
                <div className="glBox">
                  <div className="glservebox">
                    <div className="glServeMainBox">
                      <FaCar
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Automobiles</h1>
                    </div>
                    <div className="glLine"></div>
                    <div className="glServeMainBox">
                      <FaUniversity
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Banking</h1>
                    </div>
                    <div className="glLine"></div>
                    <div className="glServeMainBox">
                      <FaBuilding
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Real Estate</h1>
                    </div>
                    <div className="glLine"></div>
                  </div>

                  <div className="glservebox">
                    <div className="glServeMainBox">
                      <FaMoneyBill
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Financial Services</h1>
                    </div>
                    <div className="glLine"></div>
                    <div className="glServeMainBox">
                      <FaPhoneVolume
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Telecommunications</h1>
                    </div>
                    <div className="glLine"></div>
                    <div className="glServeMainBox">
                      <FaLaptop
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">IT & ITES</h1>
                    </div>
                    <div className="glLine"></div>
                  </div>

                  <div className="glservebox">
                    <div className="glServeMainBox">
                      <FaIndustry
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Manufacturing</h1>
                    </div>
                    <div className="glLine"></div>
                    <div className="glServeMainBox">
                      <FaLeaf
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Textiles</h1>
                    </div>
                    <div className="glLine"></div>
                    <div className="glServeMainBox">
                      <FaMedkit
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Pharmaceuticals</h1>
                    </div>
                    <div className="glLine"></div>
                  </div>

                  <div className="glservebox">
                    <div className="glServeMainBox">
                      <FaBolt
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Power</h1>
                    </div>
                    <div className="glLine"></div>
                    <div className="glServeMainBox">
                      <FaBuilding
                        style={{
                          fontSize: 25,
                          color: '0065cd',
                          paddingLeft: '5px',
                        }}
                      />
                      <h1 className="blueText">Infrastructure</h1>
                    </div>

                    <div className="glLine"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glBenifitMainContainer">
            <div className="homeMainContainer">
              <div className="glhomeContainer">
                <div className="gl">
                  <h1 className="glHeding">
                    {apiData.benifits_of_google_workspace}
                  </h1>
                  <div className="glBenifitMainBox">
                    <div className="glBox">
                      {apiData.features.map((value, index) => {
                        if (index < 3) {
                          return (
                            <div key={value.id} className="glBenifitBox">
                              <img src={value.feature_image.file}></img>
                              <h1 className="glBenifitHeading">
                                {value.feature_name}
                              </h1>
                              <p
                                className="glSmallPara"
                                style={{
                                  fontFamily: 'jost',
                                  whiteSpace: 'pre-wrap',
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: JSON.parse(value?.feature_detail)[0]
                                    .value,
                                }}
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="glBox">
                      {apiData.features.map((value, index) => {
                        if (index > 2) {
                          return (
                            <div key={value.id} className="glBenifitBox">
                              <img src={value.feature_image.file}></img>
                              <h1 className="glBenifitHeading">
                                {value.feature_name}
                              </h1>
                              <p
                                className="glSmallPara"
                                style={{
                                  fontFamily: 'jost',
                                  whiteSpace: 'pre-wrap',
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: JSON.parse(value?.feature_detail)[0]
                                    .value,
                                }}
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="homeMainContainer">
            <div className="homeContainer">
              <div className="gl">
                <div className="glBox">
                  <div className="glTextBox">
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
                  <div className="glFormBox">
                    <div className="glfomeContainer">
                      <form action="/send-data-here" method="post">
                        <label>Email</label>
                        <input type="email" id="email" name="email" />
                        <label>Name</label>
                        <input type="text" id="last" name="last" />
                        <label>Company Name</label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                        />
                        <label>Mobile phone number*</label>
                        <input type="tel" id="last" name="last" />
                        <label>Describe your project requirements</label>
                        <textarea></textarea>
                        <button type="submit">Request a Quote</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default googleCloudPage;
{
}
