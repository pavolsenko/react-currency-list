import * as Router from "react-router-dom";
import mockAxios from "jest-mock-axios";
import {act, cleanup, render, screen} from '@testing-library/react';

import {CurrencyList} from "../CurrencyList";

import * as axiosResponses from "../__fixtures__/axiosResponses";
import {WrapperTestComponent} from "../../testUtils";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useSearchParams: jest.fn(),
}));

describe("CurrencyList", () => {
    afterEach(() => {
        cleanup();
        mockAxios.reset();
    });

    it("should return list of 2 currencies", async () => {
        jest.spyOn(Router, "useSearchParams").mockReturnValue([new URLSearchParams(), () => {}]);

        mockAxios.get.mockResolvedValueOnce(axiosResponses.validCurrenciesResponse);

        await act(async () => {
            render(
                <WrapperTestComponent>
                    <CurrencyList locale={"en"}/>
                </WrapperTestComponent>,
            );
        });

        const currency1 = await screen.findByText("Chilian Peso");
        expect(currency1).toBeInTheDocument();

        const currency2 = await screen.findByText("Iraqi Dinar");
        expect(currency2).toBeInTheDocument();
    });
});
