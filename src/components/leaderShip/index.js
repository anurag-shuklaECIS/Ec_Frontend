import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loader from '../loader/index';

function Index({}) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('https://ecinfosolutions.com/api/leadership/');
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
    <>
      {apiData == '' ? (
        <Loader />
      ) : (
        <div className="leaderMainContainer">
          <div className="leaderContainer">
            <div className="groupPhotoContaier">
              <div className="groupimg">
                <img class="lazyload" src={apiData[0]?.grp_photo.file} alt={apiData[0]?.grp_photo.file}></img>
              </div>
            </div>
            <div className="groupimgText">
              <pre
                className="groundImgPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.welcome_blog)[0].value,
                }}
              />
            </div>

            <div className="OverviewGoals">
              <div>
                <pre
                  className="OverviewGoalsPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.overview)[0].value,
                  }}
                />
              </div>
              <div>
                <pre
                  className="OverviewGoalsPre"
                  style={{
                    fontFamily: 'jost',
                    whiteSpace: 'pre-wrap',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: JSON.parse(apiData[0]?.goals)[0].value,
                  }}
                />
              </div>
            </div>

            <div className="leaderShip">
              <h1 className="leaderHeaderText">Leadership</h1>

              <div className="imgDetailsContainer">
                <div className="leaderimg">
                  <img class="lazyload" src={apiData[0]?.leadership[0]?.image_of_leader.file} alt={apiData[0]?.leadership[0]?.image_of_leader.file}></img>
                </div>
                <div className="leaderDetails">
                  <pre
                    className="leaderParaText"
                    style={{
                      fontFamily: 'jost',
                      whiteSpace: 'pre-wrap',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: JSON.parse(apiData[0]?.leadership[0]?.about_leader)[0]
                        .value,
                    }}
                  />
                </div>
              </div>

              <div className="imgDetailsContainer">
                <div className="leaderimg">
                  <img class="lazyload" src={apiData[0]?.leadership[1]?.image_of_leader.file} alt={apiData[0]?.leadership[1]?.image_of_leader.file}></img>
                </div>
                <div className="leaderDetails">
                  <pre
                    className="leaderParaText"
                    style={{
                      fontFamily: 'jost',
                      whiteSpace: 'pre-wrap',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: JSON.parse(apiData[0]?.leadership[1]?.about_leader)[0]
                        .value,
                    }}
                  />
                </div>
              </div>

              <div className="imgDetailsContainer">
                <div className="leaderimg">
                  <img class="lazyload" src={apiData[0]?.leadership[2]?.image_of_leader.file} alt={apiData[0]?.leadership[2]?.image_of_leader.file}></img>
                </div>
                <div className="leaderDetails">
                  <pre
                    className="leaderParaText"
                    style={{
                      fontFamily: 'jost',
                      whiteSpace: 'pre-wrap',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: JSON.parse(apiData[0]?.leadership[2]?.about_leader)[0]
                        .value,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="moreFreedomContainer">
              <pre
                className="moreFreedomPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.more_info_less_software)[0]
                    .value,
                }}
              />
            </div>

            <div className="moreFreedomContainer">
              <pre
                className="moreFreedomPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.software_defined_businesses)[0]
                    .value,
                }}
              />
            </div>

            <div className="moreFreedomContainer">
              <pre
                className="moreFreedomPre"
                style={{
                  fontFamily: 'jost',
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(apiData[0]?.fifteen_years_of_experiance)[0]
                    .value,
                }}
              />
            </div>

            <div className="moreFreedomContainer">
              <h1 className="leaderHeaderText">Partnerships & affiliations</h1>
              <div className="partnerShips">
                {
                  apiData[0]?.parnership_image?.map((value, index)=>{
                    return (
                      <Link key={value.id} href="">
                      <img class="lazyload partnerImg"key={value.id} src={value.file} alt={value.file}></img>
                    </Link>
                    )
                  })
                }
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
