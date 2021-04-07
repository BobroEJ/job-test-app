import React from 'react';

const ItemDetails = ({name, age, phoneNumber}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{phoneNumber}</div>
        </div>
    )
}

export default ItemDetails;