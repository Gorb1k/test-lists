import {fetchItems} from "../../store/items/items.thunk";
import {testItemsFromServer} from "../../__test-data__/itemsFromServer";
import {ItemInterface} from "../../types/item.interface";

global.fetch = jest.fn()
const mockFetch = fetch as jest.MockedFunction<typeof fetch>

describe('items thunk', () => {

    describe('resolved thunk', () => {
        beforeEach(() => {
            mockFetch.mockResolvedValue({
                ok: true,
                json: () => Promise.resolve(testItemsFromServer)
            } as Response)
        })
        it('should have 2 calls', async () => {
            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            expect(dispatch.mock.calls).toHaveLength(2)
        });
        it('should have pending type', async () => {
            const type = fetchItems.pending('test','test').type
            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            const [pending, fulfilled] = dispatch.mock.calls
            expect(pending[0].type).toBe(type)
        });
        it('should have fulfilled type', async () => {
            const type = fetchItems.fulfilled({} as ItemInterface[],'test', 'test').type
            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            const [pending, fulfilled] = dispatch.mock.calls
            expect(fulfilled[0].type).toBe(type)
        });
        it('should have correct payload', async () => {
            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            const [pending, fulfilled] = dispatch.mock.calls
            expect(fulfilled[0].payload).toEqual(testItemsFromServer)
        });
    });
    describe('rejected thunk', () => {
        beforeEach(() => {
            mockFetch.mockResolvedValue({
                ok: false,
                statusText: 'Test:Rejected'
            } as Response)
        })
        it('should have 2 calls', async () => {
            const thunk = fetchItems('test-api')
            const dispatch = jest.fn()
            await thunk(dispatch, () => {
            }, () => {
            })
            expect(dispatch.mock.calls).toHaveLength(2)
        });
        it('should have pending type', async () => {
            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            const type = fetchItems.pending('test','test').type
            const [pending, rejected] = dispatch.mock.calls
            expect(pending[0].type).toBe(type)
        });
        it('should have rejected type', async () => {

            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            const type = fetchItems.rejected({} as Error,'test', 'test').type
            const [pending, rejected] = dispatch.mock.calls
            expect(rejected[0].type).toBe(type)
        });
        it('should have correct payload', async () => {
            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            const [pending, rejected] = dispatch.mock.calls
            expect(rejected[0].payload).toEqual('Test:Rejected')
        });
        it('should have rejectedWithValue', async () => {
            const dispatch = jest.fn()
            const thunk = fetchItems('test-api')
            await thunk(dispatch, () => {
            }, () => {
            })
            const [pending, rejected] = dispatch.mock.calls
            expect(rejected[0].meta.rejectedWithValue).toBeTruthy()
        });
    });

});