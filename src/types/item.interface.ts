export interface ItemInterface {
    id:number
    parent_id:number
    label:string
    children?: ItemInterface[]
}