import {render, screen} from "@testing-library/react";

import {CountryFlags} from "../CountryFlags";
import {IntlProvider} from "react-intl";

it("Should display 3 country flags", async () => {
    render(
        <IntlProvider locale={"en"}>
            <CountryFlags
                countryCodes={["AT", "DE", "CH"]}
                countries={["Austria", "Germany", "Switzerland"]}
            />
        </IntlProvider>,
    );

    const images = await screen.findAllByRole("img");
    expect(images).toHaveLength(3);
});
