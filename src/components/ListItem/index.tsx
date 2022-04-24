import { useState } from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'


type Props = {
    item: Item
}

function handleRemoveItem(){
    
}

export const ListItem = ( {item }: Props ) => {
    const [isChecked, setIsChecked] = useState(item.done);
    return (
        <C.Container done={isChecked}> 
            <input 
            type="checkbox" 
            checked={isChecked}
            onChange={ e => setIsChecked(e.target.checked)} />
            <label>{item.name}</label>
            <div className="remove" onClick={handleRemoveItem}>🗑️</div>
        </C.Container>
    )
}