import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/index';

function IndexPage({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('https://ecinfosolutions.com/api/manufactaring/');

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
                style={{ width: '100%', padding: '20px' }}
              >
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.software_solution_for_manufactring
                    )[0].value,
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
                      apiData[0]?.cloud_erp_for_accounting_and_inventry
                    )[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.account_dashboard_image.file}></img>
              </div>
            </div>

            <div className="OverviewGoals">
              <div className="mobileImg">
                <img src={apiData[0]?.energy_points_dashboard.file}></img>
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
                      apiData[0]?.cloud_erp_for_hr_and_payroll
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
                    __html: JSON.parse(apiData[0]?.cloud_erp_for_production)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.production_analytics_image.file}></img>
              </div>
            </div>

            <div className="OverviewGoals">
              <div className="mobileImg">
              <img src={apiData[0]?.cloud_crm_for_sales_automation_image.file}></img>
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
                      apiData[0]?.cloud_crm_for_sales_automation
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
                    __html: JSON.parse(
                      apiData[0]
                        ?.industry_4_using_iot_artools_and_remote_monitoring
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
                    __html: JSON.parse(
                      apiData[0]?.predictive_analyatics_for_plc_control_system
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ marginTop: '100px' }}>
              <div className="mobileImg">
                <iframe
                  className="youtube"
                  src={`https://www.youtube.com/embed/${apiData[0].youtube_url}`}
                ></iframe>
              </div>
              <div
                className="mobileTexBox"
                style={{ marginLeft: '0px', margin: '0px 20px' }}
              >
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="labCorePreyoutube"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.customization_pricing_and_ExceptioNAL_support
                    )[0].value,
                  }}
                />
              </div>
            </div>

            <Link href="app-cost-roi-calculator">
              <div style={{ cursor: 'pointer' }} className="buildYourQuoteBtn">
                <div>Get Free Quote</div>
              </div>
            </Link>

            <div className="questionContainer">
              <pre
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                className="labCorePreQuestion"
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.questions_on_manufactring)[0]
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
