import React, { useEffect, useState } from 'react';
import services from 'services';
import ImageEU from '../../assets/images/EU.svg';
import ImageUSA from '../../assets/images/USA.svg';
import styles from './ExchangeRates.module.scss';

const ExchangeRates = () => {
  const [exchangeRateUAH, setExchangeRateUAH] = useState([]);

  useEffect(() => {
    services.currencyServices
      .getExchangeRateUAH()
      .then((res) => {
        setExchangeRateUAH(res.data?.filter(exchangeRare => {
          return exchangeRare.base_ccy === 'UAH' && exchangeRare.ccy !== 'RUR';
        }));
        return res.data;
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <table className={styles.table}>
      <caption className={styles.table__caption}>
        Exchange rate of hryvnia to other currencies
      </caption>
      <thead>
        <tr className={styles.table__row}>
          <th>
            Currency
          </th>
          <th>
            Buy
          </th>
          <th>
            Sale
          </th>
        </tr>
      </thead>
      <tbody>
        {exchangeRateUAH?.map(exchangeRare => {
          return (
            <tr className={styles.table__row} key={exchangeRare.ccy}>
              <td>
                <span className={styles.table__currency}>
                  {exchangeRare.ccy === 'EUR' && <img src={ImageEU} alt="Flag of the Europea Union" />}
                  {exchangeRare.ccy === 'USD' && <img src={ImageUSA} alt="Flag of the United States of America" />}
                  {exchangeRare.ccy}
                </span>
              </td>
              <td>
                {exchangeRare.buy}
              </td>
              <td>
                {exchangeRare.sale}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default ExchangeRates