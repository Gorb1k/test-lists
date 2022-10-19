import {ItemInterface} from "../types/item.interface";

export const mapItems = (payload: ItemInterface[]):ItemInterface[] => {
    const duplicatedIds: Array<number> = []
    return payload.map((item) => {
        for (let i = 0; i < payload.length; i++) {
            if (item.id === payload[i].parent_id) {
                item.children = item.children ? [...item.children, payload[i]] : [payload[i]]
                duplicatedIds.push(payload[i].id)
            }
        }
        return item
    }).filter((item) => !duplicatedIds.some((id) => item.id === id))
}