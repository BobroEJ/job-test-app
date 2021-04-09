// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import ItemDetails from '../itemDetails';
// import TServise from '../../services/tservice';

export default class ItemList extends Component {
    
    state = {
        data: [
            // {
            //     "id": 0,
            //     "favourite": false,
            //     "name": "Gilbert Morton",
            //     "age": 30,
            //     "phone": "(369) 432-9206",
            //     "image": "sheep",
            //     "phrase": "Japman somam mes lizmasapa om zefopi ki wa ogju mofrajnir denba uc famoso opeipu woul.",
            //     "video": "shoe"
            // },
            // {
            //     "id": 1,
            //     "favourite": true,
            //     "name": "Jeffery Davidson",
            //     "age": 57,
            //     "phone": "(415) 670-6901",
            //     "image": "pig",
            //     "phrase": "Lejtefup boc hi ricge tela mo ragdi vutomeh kuhup veosubu pe ceso juhzustum ipagagcub fu."
            // },
            // {
            //     "id": 2,
            //     "favourite": false,
            //     "name": "Lela Clark",
            //     "age": 30,
            //     "phone": "(635) 873-1879",
            //     "image": "cat",
            //     "phrase": "Bup dod elavor etudorkaw bapibune peijbur biot cuskoruc no liwuduk osi lazob zu rij buduhkaf.",
            //     "video": "boy"
            // }
        ]
    }
    
    // fetch('./data.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({data})
    //     })

    getData = async () => {
        let res = await fetch('./data.json')
            .then(res => res.json())
            // .then(data => {
            //     this.setState({data})
            // })
        return res
    }
    
    
    

    renderItems = (arr) => {
        return (arr.map((item) => {
            return ItemDetails(item);
        }))
    }

    render() {
        this.getData().then(data => {
            this.setState({data})
        })
        return (
            this.renderItems(this.state.data)
        )
    }
}
