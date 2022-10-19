import {render, screen} from "@testing-library/react";
import {testItemsFromServer} from "../../__test-data__/itemsFromServer";
import OriginList from "../../components/OriginList";


describe('Origin list', () => {
    it('should contain list',  async () => {
        render(<OriginList originItems={testItemsFromServer}/>)
        const list = screen.getByRole('list')
        expect(list).toBeInTheDocument()
    });
    it('should render all list items',  async () => {
        await render(<OriginList originItems={testItemsFromServer}/>)
        const listItem = screen.getAllByRole('listitem')
        expect(listItem.length).toBe(2)
    });
    it('should be rendered with empty array',  async () => {
        await render(<OriginList originItems={[]}/>)
        const listItem = screen.queryAllByRole('listitem')
        expect(listItem.length).toBe(0)
    });
});