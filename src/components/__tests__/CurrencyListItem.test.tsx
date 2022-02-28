import {render, screen} from "@testing-library/react";

import {WrapperTestComponent} from "../../testUtils";
import {ICurrency} from "../../interfaces/currency";
import {CurrencyListItem} from "../CurrencyListItem";

describe("CurrencyListItem", () => {
    it("should render a currency item with single flag, name and exchange rate", async () => {
        const currency: ICurrency = {
            currency: "FJD",
            precision: 2,
            nameI18N: "Fiji Dollar",
            exchangeRate: {
                buy: 2,
                middle: 2.25,
                sell: 2.5,
                indicator: 0,
                lastModified: new Date("2012-02-14T23:00:00Z"),
            },
            banknoteRate: {
                buy: 2.2,
                middle: 2.4,
                sell: 2.6,
                indicator: 0,
                lastModified: new Date("2018-11-06T23:00:00Z"),
            },
            flags: [
                "provided",
            ],
        };

        render(
            <WrapperTestComponent>
                <CurrencyListItem
                    currency={currency}
                    baseCurrency={'EUR'}
                />
            </WrapperTestComponent>,
        );

        const flags = await screen.findAllByRole("img");
        expect(flags).toHaveLength(1);

        const countryName = await screen.findByText("Fiji");
        expect(countryName).not.toBeEmptyDOMElement();
    });

    it("should render a currency item without flag", async () => {
        const currency: ICurrency = {
            currency: "HKD",
            precision: 2,
            nameI18N: "Hongkong Dollar",
            exchangeRate: {
                buy: 2,
                middle: 2.25,
                sell: 2.5,
                indicator: 0,
                lastModified: new Date("2012-02-14T23:00:00Z"),
            },
        };

        render(
            <WrapperTestComponent>
                <CurrencyListItem
                    currency={currency}
                    baseCurrency={'EUR'}
                />
            </WrapperTestComponent>,
        );

        const flags = await screen.queryByRole("img");
        expect(flags).toBeFalsy();

        const countryName = await screen.findByText("Hong Kong");
        expect(countryName).not.toBeEmptyDOMElement();

        const currencyName = await screen.findByText("Hongkong Dollar");
        expect(currencyName).toBeInTheDocument();
    });

    it("should display currency symbol if currency name is not present", async () => {
        const currency: ICurrency = {
            currency: "FJD",
            precision: 2,
            exchangeRate: {
                buy: 2,
                middle: 2.25,
                sell: 2.5,
                indicator: 0,
                lastModified: new Date("2012-02-14T23:00:00Z"),
            },
        };

        render(
            <WrapperTestComponent>
                <CurrencyListItem
                    currency={currency}
                    baseCurrency={'EUR'}
                />
            </WrapperTestComponent>,
        );

        const countryName = await screen.findAllByText("FJD");
        expect(countryName).toHaveLength(3);

        const currencyName = await screen.queryByText("Fiji Dollar");
        expect(currencyName).not.toBeInTheDocument();
    });
});
