// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import ItemDetails from '../itemDetails';

export default class ItemList extends Component {
    
    state = {
        data: []
    }



    getData = async () => {
        let res = await fetch('./data.json')
            .then(res => res.json())
        return res
    }

    componentDidMount() {
        this.getData().then(data => {
            this.setState({data})
        })
    }
    
    
    

    renderItems = (arr) => {
        return (arr.map((item) => {
            return ItemDetails(item);
        }))
    }

    render() {        
        return (
            this.renderItems(this.state.data)
        )
    }
}
