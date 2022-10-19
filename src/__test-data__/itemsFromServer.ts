import {ItemInterface} from "../types/item.interface";

export const testItemsFromServer:ItemInterface[] = [
    {id:1, label:'hello1', parent_id:0},
    {id:2, label:'hello2', parent_id:1},
]

export const testMappedItems:ItemInterface[] = [
    {id:1, label:'hello1', parent_id:0, children:[{id:2, label:'hello2', parent_id:1}]}
]