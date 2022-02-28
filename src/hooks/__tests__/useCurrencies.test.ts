import {renderHook} from "@testing-library/react-hooks";
import Router from "react-router-dom";

import mockAxios from "jest-mock-axios";
import {useCurrencies} from "../useCurrencies";
import * as axiosResponses from "../__fixtures__/axiosResponses";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useSearchParams: jest.fn(),
}));

describe("useCurrencies", () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it("should return empty currencies array", () => {
        jest.spyOn(Router, "useSearchParams").mockReturnValue([new URLSearchParams(), () => {}]);

        mockAxios.get.mockResolvedValueOnce(axiosResponses.emptyCurrenciesResponse);

        const {result} = renderHook(useCurrencies);
        expect(result.current.currencies).toEqual([]);
    });
});
