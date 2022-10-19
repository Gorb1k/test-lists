import {render, screen} from "@testing-library/react";
import MappedList from "../../components/MappedList";
import {testMappedItems} from "../../__test-data__/itemsFromServer";

describe('Mapped list', () => {
    it('should contain list',  async () => {
        render(<MappedList mappedItems={testMappedItems}/>)
        const list = screen.getAllByTestId('list')
        expect(list[0]).toBeInTheDocument()
    });
    it('should not contain duplicates',  async () => {
       await render(<MappedList mappedItems={testMappedItems}/>)
        const listItem = screen.getAllByRole('listitem')
        expect(listItem.length).toBe(2)
    });
    it('should be rendered with empty array',  async () => {
        await render(<MappedList mappedItems={[]}/>)
        const listItem = screen.queryAllByRole('listitem')
        expect(listItem.length).toBe(0)
    });
});