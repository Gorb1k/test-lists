import {ItemsSliceInterface} from "../../store/items/items.interface";
import itemsSlice from "../../store/items/itemsSlice";
import {fetchItems} from "../../store/items/items.thunk";
import {testItemsFromServer, testMappedItems} from "../../__test-data__/itemsFromServer";
import {testItemsInitialState} from "../../__test-data__/initialState";

describe('Items slice', () => {
    let initialState:ItemsSliceInterface = testItemsInitialState
    afterEach(() => {
        initialState = testItemsInitialState
    })
    it('should change isLoading status', () => {
        const state = itemsSlice(initialState, fetchItems.pending('test', 'test'))
        expect(state.isLoading).toBeTruthy()
    });
    it('should set correct items', () => {

        const state = itemsSlice(initialState, fetchItems.fulfilled(testItemsFromServer, 'test', 'test'))
        expect(state).toEqual({
            originItems: testItemsFromServer,
            mappedItems: testMappedItems,
            isLoading: false,
            error: ''
        })

    });
    it('should set an error', () => {
        const state = itemsSlice(initialState, fetchItems
            .rejected( {} as Error, 'test', 'test', 'Test:Reject'))
        expect(state.error).toBe('Test:Reject')
    });
});