import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/index';

function IndexPage({}) {
  const [homeApiData, setHomeApiData] = useState([]);
  const value = [{ hello: 'hello' }];
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'https://ecinfosolutions.com/api/homepage/'
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setHomeApiData(data[0]);
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
        {homeApiData == '' ? (
          <Loader />
        ) : (
          <div className="homeContainer">
            <div className="mobileContainer">
              <div className="mobileImg">
                <img alt={homeApiData?.image_1} src={homeApiData?.image_1.file}></img>
              </div>

              <div
                className="mobileTexBox"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    homeApiData?.web_and_mobile_app_devlopment
                  )[0].value,
                }}
              />
            </div>
            <Link href="app-cost-roi-calculator">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Build Your Quote</div>
              </div>
            </Link>

            <div className="newsApproch">
              <pre
                className="newApprochContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    homeApiData?.new_approch_to_software_ddevlopment
                  )[0].value,
                }}
              />
            </div>

            <div className="servIndusMainContainer">
              <pre
                className="servicesContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(homeApiData?.app_devlopment_services)[0]
                    .value,
                }}
              />

              <pre
                className="servicesContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(homeApiData?.industry_4_and_iot)[0].value,
                }}
              />
            </div>

            <div className="agileMainContainer">
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(homeApiData?.agile_software_devlopment)[0]
                    .value,
                }}
              />

              <div className="aligeImg">
                <img alt={homeApiData.image_2} src={homeApiData.image_2.file}></img>
              </div>
            </div>

            <div className="servIndusMainContainer">
              <pre
                className="servicesContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(homeApiData?.digital_services)[0].value,
                }}
              />

              <pre
                className="servicesContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    homeApiData?.data_science_and_analyatics
                  )[0].value,
                }}
              />
            </div>

            <div className="agileMainContainer">
              <pre
                className="agileContainer"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(homeApiData?.experiance_does_count)[0]
                    .value,
                }}
              />

              <div className="aligeImg">
                <img alt={homeApiData.image_3} src={homeApiData.image_3.file}></img>
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
                    homeApiData?.globle_delivary_and_exceptional_support
                  )[0].value,
                }}
              />

              <div className="mobileImg">
                <iframe
                  className="youtube"
                  src={`https://www.youtube.com/embed/${homeApiData.youtube_url}`}
                ></iframe>
              </div>
            </div>
            <Link href="app-cost-roi-calculator">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Build Your Quote</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
