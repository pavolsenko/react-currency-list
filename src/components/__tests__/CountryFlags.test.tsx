import {render, screen} from "@testing-library/react";

import {CountryFlags} from "../CountryFlags";
import {WrapperTestComponent} from "../../testUtils";

describe("CountryFlag", () => {
    it("should display 3 country flags", async () => {
        render(
            <WrapperTestComponent>
                <CountryFlags
                    countryCodes={["AT", "DE", "CH"]}
                    countries={["Austria", "Germany", "Switzerland"]}
                />
            </WrapperTestComponent>,
        );

        const images = await screen.findAllByRole("img");
        expect(images).toHaveLength(3);
    });

    it("should display 1 country flag", async () => {
        render(
            <WrapperTestComponent>
                <CountryFlags
                    countryCodes={["AT"]}
                    countries={["Austria"]}
                />
            </WrapperTestComponent>,
        );

        const images = await screen.findAllByRole("img");
        expect(images).toHaveLength(1);
    });

    it("should display 3 country flag + text 'more'", async () => {
        render(
            <WrapperTestComponent>
                <CountryFlags
                    countryCodes={["AT", "DE", "CH", "SK", "HU"]}
                    countries={["Austria", "Germany", "Switzerland", "Slovakia", "Hungary"]}
                />
            </WrapperTestComponent>,
        );

        const images = await screen.findAllByRole("img");
        expect(images).toHaveLength(3);

        const textMore = await screen.findByText("more");
        expect(textMore).toBeInTheDocument();
    });
});
