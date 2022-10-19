import {ItemInterface} from "../../types/item.interface";

export interface ItemsSliceInterface {
    mappedItems: ItemInterface[],
    originItems: ItemInterface[],
    isLoading: boolean,
    error: string
}