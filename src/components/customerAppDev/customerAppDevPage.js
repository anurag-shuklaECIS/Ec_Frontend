import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader';

function IndexPage({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'https://ecinfosolutions.com/api/custom_dev/'
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);
  return (
    <div>
      <div className="homeMainContainer">
        {apiData == '' ? (
          <Loader />
        ) : (
          <div className="homeContainer">
            <div className="mobileContainer">
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_App_image.file}></img>
              </div>

              <div
                className="mobileTexBox"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    apiData[0]?.web_and_mobile_app_devlopment
                  )[0].value,
                }}
              />
            </div>
            <Link href="app-cost-roi-calculator">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
              </div>
            </Link>

            <div>
              <h1
                style={{ textAlign: 'center', margin: '60px 0px' }}
                className="clientDevHeaderText"
              >
                Our Product Development Process
              </h1>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.discovery_phase)[0].value,
                }}
              />

              <div className="aligeImg">
                <img src={apiData[0]?.discovery_phage_image.file}></img>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.engineering_phase)[0].value,
                }}
              />

              <div className="aligeImg">
                <img src={apiData[0]?.engineering_phage_image.file}></img>
              </div>
            </div>

            <div className="agileMainContainer" style={{ margin: '30px 0px' }}>
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.lunch_phase)[0].value,
                }}
              />

              <div className="aligeImg">
                <img src={apiData[0]?.launch_phage_image.file}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '30px 0px' }}>
              <div
                className="mobileTexBox"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                  margin: '30px 0px',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    apiData[0]?.a_new_apporch_to_software_engineering
                  )[0].value,
                }}
              />

              <div className="mobileImg">
                <img src={apiData[0]?.crm_screen_image.file}></img>
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.technology_and_strategy)[0]
                      .value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.minimum_viable_product_devlopment
                    )[0].value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.mobile_and_desktop_apps)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.web_and_cloud_apps)[0].value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.user_experiance_design)[0]
                      .value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.cloud_deployment)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.anyalytics_and_insights)[0]
                      .value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.internet_of_things)[0].value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.blockchain)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="AppDevMainContainer">
              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.al_ml_and_data_science)[0]
                      .value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.digital_marketing)[0].value,
                  }}
                />
              </div>

              <div className="AppDevContainer">
                <div
                  className="vocalPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.qa_and_cyber_security)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer">
              <div className="mobileImg">
                <img src={apiData[0]?.screen_image_2.file}></img>
              </div>
              <div
                className="mobileTexBox"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.experiance_does_count)[0]
                    .value,
                }}
              />
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.digital_e_commerse_apps)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image.file}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_2.file}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.digital_mobile_apps)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.digital_operations_management_app
                    )[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_3.file}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.desktop_image.file}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.industry_4_apps)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.erp_implimentations)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_4.file}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_5.file}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.iot_smart_devices)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.fintech_applications)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_6.file}></img>
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '50px 0px' }}>
              <div className="mobileImg">
                <img src={apiData[0]?.mobile_image_7.file}></img>
              </div>

              <div className="evenOddTextBox" style={{ margin: '0px 30px' }}>
                <div
                  className="evenOddText"
                  style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.system_integration_and_interfacing
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ marginTop: '100px' }}>
              <pre
                className="mobileTexBox"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                  marginLeft: '0px',
                  marginRight: '20px',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    apiData[0]?.globle_delivary_and_exceptional_support
                  )[0].value,
                }}
              />

              <div className="mobileImg">
                <iframe
                  className="youtube"
                  src={`https://www.youtube.com/embed/${apiData[0].youtube_url}`}
                ></iframe>
              </div>
            </div>
            <Link href="app-cost-roi-calculator">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
