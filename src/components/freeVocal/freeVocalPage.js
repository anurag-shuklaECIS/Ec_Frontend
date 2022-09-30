import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader';
function IndexPage({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'http://techmergers.in:5000/api/freevocal/'
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
              <div className="vocalImg">
                <iframe
                  className="youtube2"
                  src={`https://www.youtube.com/embed/${apiData[0].freevocal_youtube_url}`}
                ></iframe>
              </div>
              <div className="VocalTexBox">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.freevocal_media_app)[0]
                      .value,
                  }}
                />
              </div>
            </div>

            <Link href="contact-us">
              <div className="buildYourQuoteBtn">
                <div style={{ cursor: 'pointer' }}>Get Free Quote</div>
              </div>
            </Link>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.your_branded_ios_aand_android_app
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.secure_protection_for_your_media_files
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.inbuild_user_management)[0]
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.in_app_purchases_management
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.subscription_management)[0]
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.freevocal_console)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.data_insights)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.extensions)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '30px 0px' }}>
              <div className="mobileTexBox">
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.freevocal_extensions)[0]
                      .value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.freevocal_site_image.file}></img>
              </div>
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.audio)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.videos)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.video_courses)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.gallery)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.live_video)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.ebook)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.in_app_purchases)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.microsite)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.subscriptions)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.quizzes)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.ecommerce)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.tickets)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.polls)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.google_drive)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.shared_calender)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.group_chat)[0].value,
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.facebook)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.twitter)[0].value,
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
                style={{ marginLeft: '0px', marginLeft: '20px' }}
              >
                <pre
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.customixation_pricing_and_exceptional_support
                    )[0].value,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
