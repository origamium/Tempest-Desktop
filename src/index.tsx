import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './static/reset.css'
import 'react-virtualized/styles.css'
import {App} from "./renderer/App";
import {configureStore} from "./redux/store";

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById("root")
)
