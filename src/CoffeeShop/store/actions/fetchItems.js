import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchItemsStart=()=>{
    return{
        type: actionTypes.FETCH_ITEMS_START
    }
}

export const fetchItemsSuccess=(items)=>{
    return{
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        items: items

    }
}

export const fetchItemsFail=()=>{
    return{
        type:actionTypes.FETCH_ITEMS_FAIL

    }
}

export const testAction=(test)=>{
    return{
        type:actionTypes.TEST1, 
        test: test

    }
}

export const fetchItems=()=>{
    return dispatch=>{
        let fetchedItems=null;
       // this.setState({loading: true});
       dispatch(fetchItemsStart());
        axios.get('https://shoppingcart-9ee7a.firebaseio.com/initialItems.json')
            .then(response=>{
                // fetchedItems= response.data.items;
                // let item = [];
                // for (let i=0; i<fetchedItems.length; i++){
                //     console.log('this is for loop fetchedItems i name ', fetchedItems[i].name);
                //      item[i] = fetchedItems[i];
                //      console.log(item[i].name);
                // }
                dispatch(fetchItemsSuccess(response.data.items));
                // this.setState({items: item});
               // this.setState({loading: false});
            })
    }
}

export const addItem=(index)=>{
    return{
        type: actionTypes.ADD_ITEM,
        index: index
}
}

export const removeItem=(index)=>{
    return{
        type: actionTypes.REMOVE_ITEM
        
    }
}

export const addAnimal=(index)=>{
    return{
        type: actionTypes.ADD_ANIMAL,
        index: index 
    }
}

export const addCow=()=>{
    return{
        type: actionTypes.ADD_COW
        
    }
}