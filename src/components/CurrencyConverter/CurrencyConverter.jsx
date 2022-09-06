import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import services from 'services';
import styles from './CurrencyConverter.module.scss';

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([]);

    const { control, register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        defaultValues: {
            firstCurrencyCode: '',
            firstCurrencyValue: 0,
            secondCurrencyCode: '',
            secondCurrencyValue: 0,
        }
    });

    const onSubmit = data => {
        console.log(data);
    };

    const validate = (from, to, amount) => {
        return !(from === undefined || to === undefined || amount <= 0 || amount === '');
    };

    const convert = (from, to, amount, target) => {
        if (Number(amount) <= 0 || amount === '') {
            setValue(target, '0');
            return;
        }

        if (!validate(from, to, amount)) {
            return;
        }

        services.currencyServices
            .convert(from, to, amount)
            .then((res) => {
                setValue(target, res.data?.result?.[to]);
                return res.data;
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => {
        services.currencyServices
            .getCurrencies()
            .then((res) => {
                setCurrencies(
                    Object.keys(res.data.currencies)?.map((currency) => {
                        return { label: currency, value: currency };
                    })
                );
                return res.data;
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.from}>
            <div className={styles.from__column}>
                <Controller
                    name="firstCurrencyCode"
                    control={control}
                    render={({ field }) => {
                        return (
                            <Select
                                {...field}
                                inputRef={field.ref}
                                options={currencies}
                                value={currencies.find(currency => currency.value === field.value)}
                                onChange={(option) => {
                                    const values = getValues();
                                    convert(option?.value, values.secondCurrencyCode?.value, values.firstCurrencyValue, 'secondCurrencyValue');
                                    setValue('firstCurrencyCode', option);
                                }}
                            />
                        );
                    }}
                />

                <input type="number" min="0" placeholder="firstCurrencyValue" {...register("firstCurrencyValue", {
                    onChange: (event) => {
                        const values = getValues();
                        convert(values.firstCurrencyCode?.value, values.secondCurrencyCode?.value, values.firstCurrencyValue, 'secondCurrencyValue');
                    }
                })} />
            </div>

            <div className={styles.from__column}>
                <Controller
                    name="secondCurrencyCode"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            inputRef={field.ref}
                            options={currencies}
                            value={currencies.find(currency => currency.value === field.value)}
                            onChange={(option) => {
                                const values = getValues();
                                convert(option?.value, values.firstCurrencyCode?.value, values.secondCurrencyValue, 'firstCurrencyValue');
                                setValue('secondCurrencyCode', option);
                            }}
                        />
                    )}
                />

                <input type="number" min="0" placeholder="secondCurrencyValue" {...register("secondCurrencyValue", {
                    onChange: (event) => {
                        const values = getValues();
                        convert(values.secondCurrencyCode?.value, values.firstCurrencyCode?.value, values.secondCurrencyValue, 'firstCurrencyValue');
                    }
                })} />
            </div>

            <input type="submit" />
        </form>
    );
};

export default CurrencyConverter;