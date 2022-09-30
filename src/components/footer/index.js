import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import { tw } from 'twind';
import Button from '../../components/button/index';

function Footer() {
  const [values, setValues] = useState({
    email: '',
  });

  const { email} = values;

  const handleChange = (e) => {
    setValues({[e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    axios({
      method: 'post',
      url: 'https://techmergers.in/api/contact/',
      data: values,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChang = (value, name) => {
    setValues({
      ...values,
      mobile_number: value,
    });
  };

  return (
    <div>
      <footer
    className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}
    style={{ backgroundColor: '#f6faff' }}
  >
    <div
      className={tw(
        `max-w-7xl mx-auto text-gray-400 px-8 lg:px-4 flex flex-wrap`
      )}
    >
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img
          className="ecLogoImg"
          src="ecLogo.png"
          alt="logo"
          width={48}
          height={48}
        />
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>
                Partnerships
              </h4>
              <ul>
                <li
                  className={tw(
                    `text-gray-800 text-sm font-medium leading-6 my-4 `
                  )}
                >
                  <Link href="aws-developers">
                    <img src="f1.png" alt="" width={120} height={48} />
                  </Link>
                </li>
                <li
                  className={tw(
                    `text-gray-800 text-sm font-medium leading-6 my-4`
                  )}
                >
                  <Link href="g-suite-google-partner">
                    <img src="f2.png" alt="" width={120} height={48} />
                  </Link>
                </li>
                <li
                  className={tw(
                    `text-gray-800 text-sm font-medium leading-6 my-4`
                  )}
                >
                  <Link href="shopify">
                    <img src="f3.png" alt="" width={120} height={48} />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>
                Policies
              </h4>
              <ul>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="privacy-policy">Privacy Policy</Link>
                </li>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="terms-of-service">Terms of service</Link>
                </li>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="cookie-policy-us">Cookie Policy (US)</Link>
                </li>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="#">Agreement</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>
                Resources
              </h4>
              <ul>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="blog">EC Infosolutions Blog</Link>
                </li>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="partner-with-ec">Partner with EC</Link>
                </li>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="#">Get Support</Link>
                </li>
                <li
                  className={tw(`text-gray-800 text-sm font-medium leading-6`)}
                >
                  <Link href="#">Call: +1 (315) 703-3343</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>
            Subscribe our newsletter
          </h4>
          <div className={tw(`flex w-full`)}>
            <form
            className={tw(`flex w-full`)}
             action="/send-data-here"
             method="post"
             onSubmit={handleSubmit}>
            <input
              aria-label="email address"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className={tw(
                `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
              )}
              placeholder="Enter your email"
            />
            <Button type='submit' >Subscribe</Button>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className='copyRightContainer'>
    <div className='copyRight'>COPYRIGHT ©2022 EC INFOSOLUTIONS LLC</div>
  </div>
    </div>
  )
}

export default Footer
