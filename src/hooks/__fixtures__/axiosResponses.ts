export const emptyCurrenciesResponse = {
    baseCurrency: "EUR",
    comparisonDate: "2018-11-09T12:45:00Z",
    fx: [],
    institute: 198,
    lastUpdated: "2018-11-09T15:07:00Z",
};

export const validCurrenciesResponse = {
    baseCurrency: "EUR",
    comparisonDate: "2018-11-09T12:45:00Z",
    fx: [
        {
            currency: "CLP",
            nameI18N: "Chilian Peso",
            exchangeRate: {
                buy: 635.5166,
                middle: 663.0166,
                sell: 690.5166,
                indicator: 0,
                lastModified: "2011-07-24T22:00:00Z",
            },
            flags: ["provided"],
        }, {
            currency: "IQD",
            nameI18N: "Iraqi Dinar",
            exchangeRate: {
                buy: 1303.7024,
                middle: 1353.7024,
                sell: 1403.7024,
                indicator: 0,
                lastModified: "2011-07-24T22:00:00Z",
            },
            flags: ["provided"],
        },
    ],
    institute: 198,
    lastUpdated: "2018-11-09T15:07:00Z",
}
