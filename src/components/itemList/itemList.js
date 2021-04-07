import React from 'react';
import ItemDetails from '../itemDetails';

const ItemList = () => {
    const db = [
        {
            "id": 0,
            "favourite": false,
            "name": "Gilbert Morton",
            "age": 30,
            "phone": "(369) 432-9206",
            "image": "sheep",
            "phrase": "Japman somam mes lizmasapa om zefopi ki wa ogju mofrajnir denba uc famoso opeipu woul.",
            "video": "shoe"
        },
        {
            "id": 1,
            "favourite": true,
            "name": "Jeffery Davidson",
            "age": 57,
            "phone": "(415) 670-6901",
            "image": "pig",
            "phrase": "Lejtefup boc hi ricge tela mo ragdi vutomeh kuhup veosubu pe ceso juhzustum ipagagcub fu."
        },
        {
            "id": 2,
            "favourite": false,
            "name": "Lela Clark",
            "age": 30,
            "phone": "(635) 873-1879",
            "image": "cat",
            "phrase": "Bup dod elavor etudorkaw bapibune peijbur biot cuskoruc no liwuduk osi lazob zu rij buduhkaf.",
            "video": "boy"
        }
    ]

    const renderItems = (arr) => {
        return (arr.map((item) => {
            const {name, age, phoneNumber, id} = item;
            return (
                <div key={id} id={id}>
                    <div>{name}</div>
                    <div>{age}</div>
                    <div>{phoneNumber}</div>
                </div>
            )
        }))
    }

    return (
        renderItems(db)
    )
}

export default ItemList;