import {ItemInterface} from "../types/item.interface";

export const mapItems = (payload: ItemInterface[]): ItemInterface[] => {

    const result: ItemInterface[] = []
    const payloadCopy: ItemInterface[] = JSON.parse(JSON.stringify(payload))

    payloadCopy.forEach((item, index, array) => {
        if (item.parent_id === 0) {
            result.push(item)
        } else if (item.parent_id > 0) {
            array[item.parent_id - 1].children = array[item.parent_id - 1].children !== undefined
                ? [...array[item.parent_id - 1].children!, item]
                : [item]
        }
    })

    return result

}