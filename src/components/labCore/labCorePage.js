import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/index';

function IndexPage({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://techmergers.in:5000/api/labcore/');

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
              <div
                className="VocalTexBox"
                style={{ width: '100%', padding: '25px' }}
              >
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.agreetech_solutions)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <Link href="app-cost-roi-calculator">
              <div style={{ cursor: 'pointer' }} className="buildYourQuoteBtn">
                <div>Get Free Quote</div>
              </div>
            </Link>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.dealer_and_grower_management
                    )[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.dealer_and_grower_management_image.file}></img>
              </div>
            </div>

            <div className="OverviewGoals">
              <div className="mobileImg">
                <img
                  src={apiData[0]?.soil_and_water_sample_management_image.file}
                ></img>
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.soil_and_water_sample_management
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.field_history)[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.field_history_image.file}></img>
              </div>
            </div>

            <div className="OverviewGoals">
              <div className="mobileImg">
                <img
                  src={
                    apiData[0]?.gis_visualization_and_precision_management_image.file
                  }
                ></img>
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.gis_visualization_and_precision_management
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.inventory_management)[0]
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
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.document_management)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.integration_with_fertisever_N
                    )[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.more_features)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '30px 0px' }}>
              <div className="mobileTexBox" style={{ height: 'auto' }}>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.freedom_crm_for_agreebusinesses
                    )[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.business_image.file}></img>
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.presales_process_management
                    )[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.sales_process_management)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.marketing_automation)[0]
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
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.ecommerce)[0].value,
                  }}
                />
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
                      apiData[0]
                        ?.cudtomisationand_pricing_and_exceptional_support
                    )[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <iframe
                  className="youtube"
                  src={`https://www.youtube.com/embed/KJJeqr8POnE`}
                ></iframe>
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
                  __html: JSON.parse(apiData[0]?.questions_on_agreebusiness)[0]
                    .value,
                }}
              />
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
