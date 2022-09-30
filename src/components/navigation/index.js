import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { tw } from 'twind';
import Button from '../../components/button/index';

const MenuButton = ({ toggleMenu, showMenu }) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
);

const MobileMenu = () => {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const [isShown3, setIsShown3] = useState(true);
  const [isShownTech1, setIsShownTech1] = useState(true);
  const [isShownTech2, setIsShownTech2] = useState(true);
  const [isShownTech3, setIsShownTech3] = useState(true);
  const [isShownTech4, setIsShownTech4] = useState(true);

  const handleClick = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShown3(true);
    setIsShown2(true);
    setIsShown((current) => !current);
  };
  const handleClick2 = () => {
    // 👇️ toggle visibility
    setIsShown(true);
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShown3(true);
    setIsShown2((current) => !current);
  };
  const handleClick3 = () => {
    // 👇️ toggle visibility
    setIsShown(true);
    setIsShown2(true);
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShown3((current) => !current);
  };
  const techHandile1 = () => {
    // 👇️ toggle visibility

    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShownTech1((current) => !current);
  };
  const techHandile2 = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech3(true);
    setIsShownTech4(true);
    setIsShownTech2((current) => !current);
  };
  const techHandile3 = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech4(true);
    setIsShownTech3((current) => !current);
  };
  const techHandile4 = () => {
    // 👇️ toggle visibility
    setIsShownTech1(true);
    setIsShownTech2(true);
    setIsShownTech3(true);
    setIsShownTech4((current) => !current);
  };

  return (
    <>
      <div className="hamMenuContainer">
        <div style={{ width: '80%' }}>
          <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
            <div>
              <div onClick={handleClick}>
                <a href="#" className={tw(`selectHamMenu`)}>
                  ABOUT EC <RiArrowDownSLine />
                </a>
              </div>

              <div
                className="hamMenuList"
                style={{ display: isShown ? 'none' : 'flex' }}
              >
                <Link href="custom-software-development">Leadership</Link>
                <Link href="customers">Client Success</Link>
                <Link href="#">Careers</Link>
                <Link href="partner-with-ec/">Partner with EC</Link>
                <Link href="contact-us">Contact Us</Link>
              </div>
            </div>

            <div>
              <div onClick={handleClick2}>
                <a href="#" className={tw(`selectHamMenu `)}>
                  TECHNOLOGY SERVICES <RiArrowDownSLine />
                </a>
              </div>

              <div
                className="hamMenuList"
                style={{ display: isShown2 ? 'none' : 'flex' }}
              >
                <div className="techList" onClick={techHandile1}>
                  <a href="#"
                    className={tw(
                      `selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`
                    )}
                  >
                    Engineering <RiArrowDownSLine />
                  </a>
                  <div
                    className="hamMenuList"
                    style={{ display: isShownTech1 ? 'none' : 'flex' }}
                  >
                    <Link href="app-development">Custom App Development</Link>
                    <Link href="app-development">C#.net & Sharepoint Developers</Link>
                    <Link href="django-python">Django Python Developers</Link>
                    <Link href="#">ReactJS Developer</Link>
                    <Link href="#">React Native Developer</Link>
                  </div>
                </div>
                <div className="techList" onClick={techHandile2}>
                  {' '}
                  <a href="#"
                    className={tw(
                      `selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`
                    )}
                  >
                    Platforms <RiArrowDownSLine />
                  </a>
                  <div
                    className="hamMenuList"
                    style={{ display: isShownTech2 ? 'none' : 'flex' }}
                  >
                    <Link href="freevocal/">Freevocal</Link>
                    <Link href="freedom-ctrm">HeadlessBlog.com</Link>
                    <Link href="#">loT Core</Link>
                    <Link href="agritech">Lab Core</Link>
                    <Link href="app-cost-roi-calculator">Pricing</Link>
                  </div>
                </div>
                <div className="techList" onClick={techHandile3}>
                  {' '}
                  <a href="#"
                    className={tw(
                      `selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`
                    )}
                  >
                    Industries <RiArrowDownSLine />
                  </a>
                  <div
                    className="hamMenuList"
                    style={{ display: isShownTech3 ? 'none' : 'flex' }}
                  >
                    <Link href="agritech">Agribusinesses</Link>
                    <Link href="freedom-ecommerce-2">eCommerce & Retail</Link>
                    <Link href="#">ESG</Link> 
                    <Link href="manufacturing">Manufacturing</Link>
                    <Link href="#">Startups</Link>
                  </div>
                </div>
                <div className="techList" onClick={techHandile4}>
                  {' '}
                  <a href="#"
                    className={tw(
                      `selectHamMenu text-gray-500 block px-3 py-2 text-sm font-medium`
                    )}
                  >
                    Cloud Patners <RiArrowDownSLine />
                  </a>
                  <div
                    className="hamMenuList"
                    style={{ display: isShownTech4 ? 'none' : 'flex' }}
                  >
                    <Link href="aws-developers">AWS Partner Network</Link>
                    <Link href="#">Azure Partner</Link>
                    <Link href="g-suite-google-partner">Google Cloud Partner</Link>
                    <Link href="shopify">Shopify Partner</Link>
                    <Link href="uipath">Zoho Partner</Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div onClick={handleClick3}>
                <a href="#" className={tw(`selectHamMenu `)}>
                  CONSULTING SERVICES <RiArrowDownSLine />
                </a>
              </div>

              <div
                className="hamMenuList"
                style={{ display: isShown3 ? 'none' : 'flex' }}
              >
                <Link href="#">AI & Predictive Analytics</Link>
                <Link href="#">Blockchain: dApps | STO | ICO</Link>
                <Link href="#">Sales, Service & Marketing CRM</Link>
                <Link href="app-cost-roi-calculator">ROI Calculator</Link>
                <Link href="blog">Blog</Link>
              </div>
            </div>
          </div>
          <div className={tw(``)}>
            <div className={tw(``)}>
              <a href="#" className={tw(`selectHamMenu`)}>
                <Link href="contact-us">REQUEST A QUOTE</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [serchShow, setSerchShow] = useState(false);
  const [serchValue, setSerchValue] = useState();

  const handleSerchValue = (e) => {
    setSerchValue(e.target.value);
  };

  const searchToggle = () => {
    !serchShow ? setSerchShow(true) : setSerchShow(false);
  };

  return (
    <nav className={tw(`bg-white fixed w-full z-50`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <Link href="/">
                <img
                  className="ecLogoImg"
                  src="ecLogo.png"
                  alt="logo"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
            <div className="linkesNav">
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                <a href="#"
                  className={`dropdown ${tw(
                    `  h-28  flex  hover:text-gray-600 px-3 py-2 text-center rounded-md font-medium text-sm `
                  )}`}
                >
                  <div className="dropbtn">
                    <Link href="#">ABOUT EC </Link>
                    <img
                      className={tw(`w-3 mx-2`)}
                      src="downArrow.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="dropdown-content">
                    <Link  href="custom-software-development">  Leadership</Link>
                    <Link href="customers">Client Success</Link>
                    <Link href="#">Careers</Link>
                    <Link href="partner-with-ec/">Partner with EC</Link>
                    <Link href="contact-us">Contact Us</Link>
                  </div>
                </a>

                <a href="#"
                   className={`dropdown ${tw(
                    `  h-28 flex  hover:text-gray-600 px-3 py-2 text-center rounded-md font-medium text-sm `
                  )}`}
                >
                  <div className="dropbtn">
                    <Link href="#">TECHNOLOGY SERVICES </Link>
                    <img
                      className={tw(`w-3 mx-2`)}
                      src="downArrow.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="dropdown-content tech">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        margin: '15px 0px',
                      }}
                    >
                      <div className="menuAdj">
                        <div
                          className="menuDiv"
                          style={{ borderRight: '0.6px solid #c8c8c8' }}
                        >
                          <h3 className="TechServTitle">ENGINEERING</h3>
                          <Link href="app-development">
                            Custom App Development
                          </Link>
                          <Link href="app-development">C#.net & Sharepoint Developers</Link>
                          <Link href="django-python">Django Python Developers</Link>
                          <Link href="#">ReactJS Developer</Link>
                          <Link href="#">React Native Developer</Link>
                        </div>
                        <div
                          className="menuDiv"
                          style={{ borderRight: '0.6px solid #c8c8c8' }}
                        >
                          <h3 className="TechServTitle">PLATFORM</h3>

                          <Link href="freevocal">Freevocal</Link>
                          <Link href="freedom-ctrm">HeadlessBlog.com</Link>
                          <Link href="#">loT Core</Link>
                          <Link href="agritech">Lab Core</Link>
                          <Link href="app-cost-roi-calculator">Pricing</Link>
                        </div>
                      </div>
                      <div className="menuAdj">
                        <div
                          className="menuDiv"
                          style={{ borderRight: '0.6px solid #c8c8c8' }}
                        >
                          <h3 className="TechServTitle">INDUSTRIES</h3>

                          <Link href="agritech">Agribusinesses</Link>
                          <Link href="freedom-ecommerce-2">eCommerce & Retail</Link>
                          <Link href="#">ESG</Link>
                          <Link href="manufacturing">Manufacturing</Link>
                          <Link href="#">Startups</Link>
                        </div>
                        <div className="menuDiv">
                          <h3 className="TechServTitle ">CLOUD PARTNERS</h3>

                          <Link href="aws-developers">AWS Partner Network</Link>
                          <Link href="#">Azure Partner</Link>
                          <Link href="g-suite-google-partner">Google Cloud Partner</Link>
                          <Link href="shopify">Shopify Partner</Link>
                          <Link href="uipath">Zoho Partner</Link>
                        </div>
                      </div>
                    </div>
                  </div>{' '}
                </a>
                <a href="#"
                  className={`dropdown ${tw(
                    `  h-28  flex  hover:text-gray-600 px-3 py-2 text-center rounded-md font-medium text-sm `
                  )}`}
                >
                  <div className="dropbtn">
                    <Link href="#">CONSULTING SERVICES</Link>
                    <img
                      className={tw(`w-3 mx-2`)}
                      src="downArrow.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="dropdown-content consl">
                    <Link href="#">AI & Predictive Analytics</Link>
                    <Link href="#">Blockchain: dApps | STO | ICO</Link>
                    <Link href="#">Sales, Service & Marketing CRM</Link>
                    <Link href="app-cost-roi-calculator">ROI Calculator</Link>
                    <Link href="blog">Blog</Link>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="linksBtn">
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Link href="contact-us">
                <Button primary>REQUEST A QUOTE</Button>
              </Link>
              <div onClick={searchToggle} style={{ marginLeft: '10px' }}>
                {' '}
                <BiSearch
                  style={{
                    fontSize: '25px',
                    marginTop: '-1px',
                    cursor: 'pointer',
                    color: '#262626',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="hamMenu">
            <div onClick={searchToggle}>
              <BiSearch
                style={{
                  fontSize: '20px',
                  marginTop: '-1px',
                  cursor: 'pointer',
                  color: '#262626',
                }}
              />
            </div>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
      <div
        className="searchMainContainer"
        style={{ display: !serchShow ? 'none' : 'flex' }}
      >
        <form
          role="search"
          method="get"
          className="search-form"
          action="https://ecinfosolutions.com/"
          data-hs-cf-bound="true"
        >
          <input
            type="text"
            className="search-field"
            placeholder="Search..."
            value={serchValue}
            name="s"
            onChange={(e) => handleSerchValue(e)}
          />
          <div className="seocrawler-top-search-submit">
            <button style={{ outline: 'none' }} type="submit">
              <BiSearch
                style={{
                  fontSize: '30px',
                  marginTop: '-10px',
                  cursor: 'pointer',
                  marginRight: '10px',
                  color: '#ffffff',
                }}
              />
            </button>{' '}
          </div>
          <div className="seocrawler-top-search-close">
            <AiOutlineClose
              onClick={searchToggle}
              style={{
                fontSize: '30px',
                marginTop: '-10px',
                cursor: 'pointer',
                color: '#ffffff',
              }}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
