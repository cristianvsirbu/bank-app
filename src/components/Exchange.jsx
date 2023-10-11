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
                'X-RapidAPI-Key': '2c7832b528mshb9ac77e82e02e4ap1654ebjsnc0b5065de03f',
                'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
            }
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
            day: 'numeric'
        })

        const currencyImages = {
            USD: usdImage,
            RON: ronImage,
            GBP: gbpImage
        };


        const filteredCurrencies = Object.keys(responseData.rates)
            .filter((currency) => currencies.includes(currency))
            .reduce((obj, currency) => {
                obj[currency] = {
                    rate: responseData.rates[currency],
                    image: currencyImages[currency]
                };
                return obj;
            }, {});

        return (
            
            <div key={uuid()} className={`flex flex-col py-20 lg:pt-0 w-full items-center font-neue`}>
                <p className='text-[18px] text-dimWhite '>The Exchange Rates for</p>
                <div className="flex  
                        items-center
                        self-center
                        py-[3px]	  
                        sm:py-[5px]
                        lg:mt-2 
                        px-2 
                        md:px-4 
                        bg-discount-gradient 
                        rounded-[25px] 
                        sm:rounded-[15px] 
                        md:rounded-[10px] 
                        box-shadow-10">
                    <p className='text-white font-bold text-[20px]'>{formattedDate} :
                    </p></div>
                <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
                    <CardAnimation interval={500} animationClassName='animate'>
                        {Object.entries(filteredCurrencies).map(([currency, rate]) => (
                            <div
                                key={currency}
                                className='w-[100%] 
                                           h-[6.5rem]
                                           sm:w-[30%]
                                           sm:h-[5rem]
                                           md:h-[7rem]
                                           lg:h-[10rem]
                                           py-6
                                           px-5
                                           mt-[40px]
                                           box-shadow-50
                                           flex
                                           flex-row
                                           justify-start
                                           items-center
                                           bg-[#10151a]
                                           cursor-pointer'>
                                <img
                                    key={currency}
                                    src={rate.image}
                                    alt={currency}
                                    className='w-[45px] 
                                               h-[45px]
                                               sm:max-md:w-[30px]
                                               sm:max-md:h-[30px]
                                               lg:w-[60px]
                                               lg:h-[60px]
                                               ml-[0.5rem]
                                               sm:ml-0
                                               lg:ml-[1.5rem]
                                               mr-[20px]
                                               sm:max-md:mr-[10px]'/>
                                <div className='leading-[24px] sm:max-md:leading-[16px] lg:leading-[34px]'>
                                    <p className={`text-dimWhite  text-[22px] sm:max-md:text-[15px] lg:text-[30px]`} key={"heading"}>
                                        1 EUR:
                                    </p>
                                    <h2 className='text-white text-[24px] sm:max-md:text-[17px] lg:text-[32px] font-bold' key={uuid()}>
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
