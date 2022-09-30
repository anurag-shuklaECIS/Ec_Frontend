import React, { useEffect, useState } from 'react';
import { BiShapeSquare } from 'react-icons/bi';
import { BsGem, BsPalette } from 'react-icons/bs';
import { FaDiceD20, FaPenNib, FaSwatchbook } from 'react-icons/fa';
import { RiPencilRuler2Line } from 'react-icons/ri';
import 'react-phone-number-input/style.css';
import Form from '../hubForm/form';
import Loader from '../loader/index';



function pytDevPage({}) {
  const [apiData, SetApiData] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'https://ecinfosolutions.com/api/aws/'
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        SetApiData(data);
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
            <div className="djangoContainer">
              <div className="fixmyreooImg">
                <img src={apiData[0]?.fixmyrepo_image.file}></img>
              </div>
              <div className="djangoForm">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                    width: '100%',
                  }}
                  className="djangoForm"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.AWS_services_experts)[0]
                      .value,
                  }}
                />
                <Form />
              </div>
            </div>

            <div className="djangoContainer" style={{ alignItems: 'center' }}>
              <div className="amzMainCard">
                <div>
                  <div className="amzCard">
                    <h1 className="someIcon">
                      {' '}
                      <BsPalette />
                    </h1>
                    <h1>{apiData[0]?.amazon_sevices[0]?.service_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(
                          apiData[0]?.amazon_sevices[0]?.service_details
                        )[0].value,
                      }}
                    />
                  </div>

                  <div className="amzCard">
                    <h1 className="someIcon">
                      {' '}
                      <FaPenNib />
                    </h1>

                    <h1>{apiData[0]?.amazon_sevices[1]?.service_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(
                          apiData[0]?.amazon_sevices[1]?.service_details
                        )[0].value,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="amzCard">
                    <h1 className="someIcon">
                      {' '}
                      <BiShapeSquare />
                    </h1>
                    <h1>{apiData[0]?.amazon_sevices[2]?.service_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(
                          apiData[0]?.amazon_sevices[2]?.service_details
                        )[0].value,
                      }}
                    />
                  </div>

                  <div className="amzCard">
                    <h1 className="someIcon">
                      {' '}
                      <FaSwatchbook />
                    </h1>
                    <h1>{apiData[0]?.amazon_sevices[3]?.service_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(
                          apiData[0]?.amazon_sevices[3]?.service_details
                        )[0].value,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="awzText">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="djangoFormpre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.amazon_web_services_tech_stack
                    )[0].value,
                  }}
                />
              </div>
            </div>
            <h1
              style={{
                fontFamily: 'jost',
                whiteSpace: 'pre-wrap',
                textAlign: 'center',
                margin: '30px 0px',
                fontWeight: '500',
              }}
              className="leaderHeaderText"
              dangerouslySetInnerHTML={{
                __html: apiData[0]?.example_request,
              }}
            />

            <div className="exmReqContainer">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="djangoFormpre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.building_an_ecommerce)[0]
                      .value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="djangoFormpre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.amazon_connect_auth)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <div className="exmReqContainer">
              <div>
                <img src={apiData[0]?.fixmyrepo_image2.file}></img>
              </div>
              <div>
                <h1
                  className="leaderHeaderText"
                  style={{
                    textAlign: 'center',
                    margin: '30px 0px',
                    fontWeight: '500',
                  }}
                >
                  {apiData[0].how_its_work}
                </h1>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <div className="fixContainer">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="djangoFormpre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.request_a_quote)[0].value,
                  }}
                />
              </div>
              <div className="fixImg">
                <img src={apiData[0].quote_image.file}></img>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <div className="fixContainer">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="djangoFormpre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.pay_for_hotfix)[0].value,
                  }}
                />
              </div>
              <div className="fixImg">
                <img src={apiData[0].pay_for_hotfix_image.file}></img>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <div className="fixContainer">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="djangoFormpre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.expert_fixes_your_code)[0]
                      .value,
                  }}
                />
              </div>
              <div className="fixImg">
                <img src={apiData[0].expert_fixes_your_code_image.file}></img>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <div className="fixContainer">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="djangoFormpre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.quality_check_and_delivery
                    )[0].value,
                  }}
                />
              </div>
              <div className="fixImg">
                <img src={apiData[0].quality_check_and_delivery_image.file}></img>
              </div>
            </div>

            <div className="askQueMainContainer">
              <h1
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                  textAlign: 'start',
                  margin: '30px 0px',
                  fontWeight: '500',
                }}
                className="leaderHeaderText"
                dangerouslySetInnerHTML={{
                  __html: apiData[0]?.frequently_asked_questions,
                }}
              />

              <div className="askQueCardBox">
                <div className="askQueCard">
                  <div className="askQueIcon">
                    <BsGem />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[0]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[0]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>

                <div className="askQueCard">
                  <div className="askQueIcon">
                    <FaSwatchbook />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[1]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[1]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="askQueCardBox">
                <div className="askQueCard">
                  <div className="askQueIcon">
                    <BsGem />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[2]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[2]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>

                <div className="askQueCard">
                  <div className="askQueIcon">
                    <FaSwatchbook />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[3]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[3]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="askQueCardBox">
                <div className="askQueCard">
                  <div className="askQueIcon">
                    <RiPencilRuler2Line />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[4]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[4]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>

                <div className="askQueCard">
                  <div className="askQueIcon">
                    <FaDiceD20 />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[5]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[5]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="askQueCardBox">
                <div className="askQueCard">
                  <div className="askQueIcon">
                    <RiPencilRuler2Line />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[6]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[6]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>

                <div className="askQueCard">
                  <div className="askQueIcon">
                    <FaDiceD20 />
                  </div>
                  <div className="askQuetext">
                    <h1>{apiData[0]?.questions[7]?.question_name}</h1>
                    <p
                      style={{
                        fontFamily: 'jost',
                        whiteSpace: 'pre-wrap',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(apiData[0]?.questions[7]?.answer)[0]
                          .value,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mobileContainer" style={{ marginTop: '100px' }}>
                <div
                  className="mobileTexBox"
                  style={{ marginLeft: '0px', marginRight: '20px' }}
                >
                  <pre
                    style={{
                      fontFamily: 'jost',
                      whiteSpace: 'pre-wrap',
                    }}
                    className="labCorePreyoutube"
                    dangerouslySetInnerHTML={{
                      __html: JSON.parse(
                        apiData[0]?.globle_delivary_and_exceptional_support
                      )[0].value,
                    }}
                  />
                </div>
                <div className="mobileImg">
                  <iframe
                    className="youtube"
                    src={`https://www.youtube.com/embed/${apiData[0].youtube_url}`}
                  ></iframe>
                </div>
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
                  __html: JSON.parse(apiData[0]?.questions_AWS)[0].value,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default pytDevPage;
{
}
