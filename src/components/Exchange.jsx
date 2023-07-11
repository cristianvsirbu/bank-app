import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import currencies from './currenciesConfig.js';
import styles from '../style';
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
        const formattedDate = currentDate.toLocaleDateString('en-US', {
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

            <div key={uuid()} className={`flex flex-col md:flex-row w-full items-center md:justify-between py-10 ${styles.paragraph}`}>
                <h1>The Exchange Rates for {formattedDate} are:</h1>
                {Object.entries(filteredCurrencies).map(([currency, rate]) => (
                    <React.Fragment key={currency}>
                        <h1 className={`text-dimWhite font-bold text-xl`} key={"heading"}>
                            1 EUR:
                        </h1>
                        <h2 className='text-white' key={uuid()}>
                            {rate.rate} {currency}
                        </h2>
                        <img key={currency} src={rate.image} alt={currency} className='w-[30px] h-[30px]' />
                    </React.Fragment>
                ))}
            </div>
        );
    }

    return null;
};

export default Exchange;
