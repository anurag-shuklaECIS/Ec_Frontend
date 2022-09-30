import React, { useEffect, useState } from 'react';
import Loader from '../loader';

function IndexPage({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'http://techmergers.in:5000/api/e_commerce/'
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
  console.log(apiData[0]);
  return (
    <div>
      <div className="homeMainContainer">
        {apiData == '' ? (
          <Loader />
        ) : (
          <div className="homeContainer">
            <div className="mobileContainer">
              <div className="mobileImg">
                <img src={apiData[0]?.ecommerce_image_1.file}></img>
              </div>

              <div
                className="mobileTexBox"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.omni_commerce_features)[0]
                    .value,
                }}
              />
            </div>
            <div className="buildYourQuoteBtn">
              <div>Build Your Quote</div>
            </div>

            <h1
              className="leaderHeaderText"
              style={{ textAlign: 'center', margin: '30px 0px' }}
            >
              Your branded iOS & android app
            </h1>

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
                      apiData[0]?.multistore_and_multivender
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
                      apiData[0]?.advanced_product_and_stock_magement
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
                    __html: JSON.parse(
                      apiData[0]?.integrated_discounts_management
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
                      apiData[0]?.affiliate_and_rewards_management
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
                    __html: JSON.parse(
                      apiData[0]?.support_for_downloadable_products
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
                      apiData[0]?.sco_friendly_with_rewriting
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
                    __html: JSON.parse(apiData[0]?.advanced_configuration)[0]
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
                    __html: JSON.parse(apiData[0]?.mobile_commerce)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ margin: '30px 0px' }}>
              <div
                className="mobileTexBox"
                style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.freedom_ecommerce)[0].value,
                }}
              />
              <div className="mobileImg">
                <img src={apiData[0]?.ecommerce_image_2.file}></img>
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
                    __html: JSON.parse(apiData[0]?.party_plan_management)[0]
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
                    __html: JSON.parse(apiData[0]?.replicating_storefronts)[0]
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.community_management)[0]
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
                    __html: JSON.parse(apiData[0]?.distrubutor_management)[0]
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
                  className="vocalPre"
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(
                      apiData[0]?.deals_discount_and_vouchers
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
                      apiData[0]?.distributor_traning_and_management
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
                    __html: JSON.parse(apiData[0]?.digital_support)[0].value,
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
                      apiData[0]?.bonus_and_order_processing
                    )[0].value,
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
                    __html: JSON.parse(
                      apiData[0]?.freedom_ecommerce_for_marketplaces
                    )[0].value,
                  }}
                />
              </div>
              <div className="mobileImg">
                <img src={apiData[0]?.marketplace_image_3.file}></img>
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
                    __html: JSON.parse(apiData[0]?.seller_management)[0].value,
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
                    __html: JSON.parse(apiData[0]?.aggregated_search)[0].value,
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
                    __html: JSON.parse(apiData[0]?.api_access)[0].value,
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
                    __html: JSON.parse(apiData[0]?.ecommerse_cms)[0].value,
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
                    __html: JSON.parse(
                      apiData[0]?.multichannel_web_mobile_and_retail
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
                    __html: JSON.parse(apiData[0]?.vender_payouts)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="mobileContainer" style={{ marginTop: '100px' }}>
              <div className="mobileImg">
                <iframe
                  className="youtube"
                  src={`https://www.youtube.com/embed/${apiData[0]?.youtube_url}`}
                ></iframe>
              </div>
              <pre
                className="mobileTexBox"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                  marginLeft: '20px',
                  marginRight: '0px',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(
                    apiData[0]?.customixation_pricing_and_exceptional_support
                  )[0].value,
                }}
              />
            </div>
            <div className="buildYourQuoteBtn">
              <div>Build Your Quote</div>
            </div>
            <h1
              className="leaderHeaderText"
              style={{ textAlign: 'center', margin: '30px 0px' }}
            >
              Success Stories
            </h1>

            <div className="mobileContainer">
              {apiData[0]?.sucess_stories.map((value, index) => {
                return (
                  <div className="successStory">
                    <h1>{value.compny_name}</h1>

                    <div
                      className="clientDevParaText"
                      dangerouslySetInnerHTML={{
                        __html: JSON.parse(value?.company_details)[0].value,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
