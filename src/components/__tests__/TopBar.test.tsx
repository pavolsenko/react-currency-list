import {render, screen} from "@testing-library/react";

import {WrapperTestComponent} from "../../testUtils";
import {TopBar} from "../TopBar";

describe("TopBar", () => {
    it("should render the top bar", async () => {
        render(
            <WrapperTestComponent>
                <TopBar
                    availableLocales={[{ title: "English", value: "en" }]}
                    locale={"en"}
                    onLocaleChange={() => {
                    }}
                />
            </WrapperTestComponent>,
        );

        const headingElement = screen.getByText(/George/i);
        expect(headingElement).toBeInTheDocument();
    });
});
