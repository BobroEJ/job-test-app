import React from 'react';

const ItemDetails = ({name, age, phone, id}) => {
    return (
        <div key={id} id={id} className='item'>
            <div className='item-name'>{name}</div>
            <div className='item-age'>{age}</div>
            <div className='item-phone'>{phone}</div>
        </div>
    )
}

export default ItemDetails;