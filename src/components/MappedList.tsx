import {FC} from 'react';
import {ItemInterface} from "../types/item.interface";

interface IMappedList {
    mappedItems: ItemInterface[]
}

const MappedList: FC<IMappedList> = ({mappedItems}) => {
    return (
            <ul data-testid={'list'}>
                {mappedItems.map((item) => {
                        return <li key={item.id}>
                            <span>{item.label}</span>
                            {item.children && item.children.length > 0 && <MappedList mappedItems={item.children}/>}
                        </li>
                    }
                )}
            </ul>
    );
};

export default MappedList;