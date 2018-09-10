import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";// for making sure that all browser start at the same... we are reset the css..beacuse each browser have there default state.. and our app may look diff in diff browser if we dont reset
// npm install normlize.css
import './styles/styles.scss';
import AppRouter from "./Router/AppRouter"
ReactDOM.render(<AppRouter />,document.getElementById('app'));





















