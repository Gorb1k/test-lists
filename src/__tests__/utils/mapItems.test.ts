import {mapItems} from "../../utils/mapItems";
import {testItemsFromServer, testMappedItems} from "../../__test-data__/itemsFromServer";

describe('mapItems', () => {
    it('should return correct data', () => {


        const result = mapItems(testItemsFromServer)
        expect(result).toEqual(testMappedItems)
    });
});