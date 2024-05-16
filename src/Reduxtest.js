//import logo from './logo.svg';
import './App.css';
import  createStore  from 'react-redux';

function Reduxtest(){

    const initialState = (text) => {
            return {
                type:"SPEAK",
                text
        };
    }

    const reducer = (state={}, action) =>{
        switch(action.type){
            case "SPEAK":
                return {type:action.type};
                default:
                    return state;
        }
           
    }

    const store = createStore(reducer);

    store.dispatch(initialState("hi"));

    store.subscribe(()=>{
        console.log("store changed");
        store.getState();
    });

    return (
        <div className="App">

            Redux Test Component

        </div>
    );

}

export default Reduxtest;