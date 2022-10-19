import {render, screen} from "@testing-library/react";

import ItemLists from "../../components/ItemLists";
import {store} from "../../store";
import {Provider} from "react-redux";

describe('Item lists', () => {
    it('should contain 2 headers', async () => {
        render(
            <Provider store={store}>
                <ItemLists/>
            </Provider>
        )
        const origin = await screen.findByText(/Origin list/i)
        const mapped = await screen.findByText(/Mapped list/i)
        expect(origin).toBeInTheDocument()
        expect(mapped).toBeInTheDocument()
    });

    it('ItemLists snapshot', async () => {
        render(
            <Provider store={store}>
                <ItemLists/>
            </Provider>
        )
        const container = await screen.findByTestId('lists')
        expect(container).toMatchSnapshot()
    });
});