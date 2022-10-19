import {FC} from 'react';
import {ItemInterface} from "../types/item.interface";

interface IOriginList {
    originItems:ItemInterface[]
}

const OriginList: FC<IOriginList> = ({originItems}) => {

    return (

            <ul>
                {originItems && originItems.map((item) => {
                        return <li key={item.id}>
                            <span>{item.label}</span>
                        </li>
                    }
                )}
            </ul>
    );
};

export default OriginList;