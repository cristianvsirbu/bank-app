import axios from 'axios';
import { useState, useEffect } from 'react';
import currencies from './currenciesConfig.js';
import usdImage from '../assets/usd.png';
import gbpImage from '../assets/gbp.png';
import ronImage from '../assets/ron.png';
import { v4 as uuid } from 'uuid';
import CardAnimation from './CardAnimation.jsx';

const Exchange = () => {
  const [responseData, setResponseData] = useState(null);
  const [isRequestComplete, setIsRequestComplete] = useState(false);

  useEffect(() => {
    const currency = {
      method: 'GET',
      url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/EUR',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com',
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(currency);
        setResponseData(response.data);
        setIsRequestComplete(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!isRequestComplete) {
    return <p>Loading...</p>;
  }

  if (responseData) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const currencyImages = {
      USD: usdImage,
      RON: ronImage,
      GBP: gbpImage,
    };

    const filteredCurrencies = Object.keys(responseData.rates)
      .filter((currency) => currencies.includes(currency))
      .reduce((obj, currency) => {
        obj[currency] = {
          rate: responseData.rates[currency],
          image: currencyImages[currency],
        };
        return obj;
      }, {});

    return (
      <div key={uuid()} className={`font-neue flex w-full flex-col items-center py-20 lg:pt-0`}>
        <p className="text-dimWhite text-[18px]">The Exchange Rates for</p>
        <div className="bg-discount-gradient shadow-10 rounded-10 flex items-center self-center rounded-[25px] px-2 py-[3px] sm:rounded-[15px] sm:py-[5px] md:rounded-[10px] md:px-4 lg:mt-2">
          <p className="text-[20px] font-bold text-white">{formattedDate} :</p>
        </div>
        <div className="flex w-full flex-col items-center justify-between sm:flex-row">
          <CardAnimation interval={500} animationClassName="animate">
            {Object.entries(filteredCurrencies).map(([currency, rate]) => (
              <div
                key={currency}
                className="shadow-50 rounded-50 mt-[40px] flex h-[6.5rem] w-[100%] cursor-pointer flex-row items-center justify-start bg-[#10151a] px-5 py-6 sm:h-[5rem] sm:w-[30%] md:h-[7rem] lg:h-[10rem]"
              >
                <img
                  key={currency}
                  src={rate.image}
                  alt={currency}
                  className="mr-[20px] ml-[0.5rem] h-[45px] w-[45px] sm:ml-0 sm:max-md:mr-[10px] sm:max-md:h-[30px] sm:max-md:w-[30px] lg:ml-[1.5rem] lg:h-[60px] lg:w-[60px]"
                />
                <div className="leading-[24px] sm:max-md:leading-[16px] lg:leading-[34px]">
                  <p
                    className={`text-dimWhite text-[22px] sm:max-md:text-[15px] lg:text-[30px]`}
                    key={'heading'}
                  >
                    1 EUR:
                  </p>
                  <h2
                    className="text-[24px] font-bold text-white sm:max-md:text-[17px] lg:text-[32px]"
                    key={uuid()}
                  >
                    {rate.rate.toFixed(3)} {currency}
                  </h2>
                </div>
              </div>
            ))}
          </CardAnimation>
        </div>
      </div>
    );
  }

  return null;
};

export default Exchange;
