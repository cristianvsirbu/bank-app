import axios from 'axios';
import { useState, useEffect } from 'react';
import currencies from './currenciesConfig.js';
import usdImage from '../assets/usd.png';
import gbpImage from '../assets/gbp.png';
import ronImage from '../assets/ron.png';
import { v4 as uuid } from 'uuid';






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

            <div key={uuid()} className={`flex flex-col py-20 w-full items-center font-neue`}>
                <p className='text-[18px] text-dimWhite '>The Exchange Rates for</p>
                <p className='text-white font-bold text-[20px]'>{formattedDate} :
                </p>
                <div className='flex flex-col sm:flex-row w-full justify-between'>
                    {Object.entries(filteredCurrencies).map(([currency, rate]) => (
                        <div key={currency} className='w-[272px] h-[113px] py-6 px-8 mt-[40px] box-shadow-50 flex flex-row justify-start items-center bg-[#10151a] cursor-pointer'>
                            <img key={currency} src={rate.image} alt={currency} className='w-[45px] h-[45px] ml-0 mr-[20px]' />
                            <div className='leading-[24px]'>
                                <p className={`text-dimWhite  text-[24px]`} key={"heading"}>
                                    1 EUR:
                                </p>
                                <h2 className='text-white text-[21px] font-bold' key={uuid()}>
                                    {rate.rate} {currency}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

export default Exchange;
