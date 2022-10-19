import {FC, useEffect} from 'react';
import MappedList from "./MappedList";
import OriginList from "./OriginList";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store";
import {fetchItems} from "../store/items/items.thunk";
import {selectItems} from "../store/items/items.selector";


const ItemLists: FC = () => {

    const {mappedItems, originItems, isLoading, error} = useSelector(selectItems)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchItems('http://5af1eee530f9490014ead8c4.mockapi.io/items'))
    },[])

    if (isLoading) return <h1 style={{padding: '2rem'}}>Loading data...</h1>
    if (error) return <h1 style={{padding: '2rem'}}>{error}</h1>
    return (
        <div className={'list'} data-testid={'lists'}>
            <div>
                <h4>Origin list:</h4>
                <OriginList originItems={originItems}/>
            </div>
            <div>
                <h4>Mapped list:</h4>
                <MappedList mappedItems={mappedItems}/>
            </div>
        </div>

    );
};

export default ItemLists;