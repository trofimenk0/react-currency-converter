import { axiosFastforexApiInstance, axiosPrivatbankApiInstance } from './axios';

const currencyServices = {
    convert: async (from, to, amount) => {
        try {
            return await axiosFastforexApiInstance.get(`convert?from=${from}&to=${to}&amount=${amount}`);
        } catch (error) {
            throw error;
        }
    },
    getExchangeRateUAH: async () => {
        try {
            return await axiosPrivatbankApiInstance.get('pubinfo?exchange&json&coursid=11');
        } catch (error) {
            throw error;
        }
    },
    getCurrencies: async () => {
        try {
            return await axiosFastforexApiInstance.get('currencies');
        } catch (error) {
            throw error;
        }
    },
};

export default currencyServices;