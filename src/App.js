import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import {createStore} from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

function App() {

    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return (
        <Provider store={store}>
            <Navbar/>
            <CartContainer/>
        </Provider>
    );
}

export default App;
