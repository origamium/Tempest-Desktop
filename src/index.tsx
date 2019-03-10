import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './static/reset.css'
import 'react-virtualized/styles.css'
import {App} from "./renderer/App";

ReactDOM.render(
        <App />,
    document.getElementById("root")
)
