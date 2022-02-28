import {render, screen} from "@testing-library/react";

import {WrapperTestComponent} from "../../testUtils";
import {ExchangeRateValue} from "../ExchangeRateValue";

describe("ExchangeRateValue", () => {
    it("should render an exchange rate value with selected precision", async () => {
        render(
            <WrapperTestComponent>
                <ExchangeRateValue
                    currency={"FJD"}
                    value={2.25334}
                    precision={2}
                    baseCurrency={'EUR'}
                />
            </WrapperTestComponent>,
        );

        const currencyName = await screen.queryByText("FJD");
        expect(currencyName).not.toBeEmptyDOMElement();

        const value = await screen.queryByText("2.25");
        expect(value).not.toBeEmptyDOMElement();
    });
});
