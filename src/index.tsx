//this is a file
import Home from "./Views/Home";
import Login from "./Views/Login"
import React, { createElement } from "react";
import {render} from 'React-DOM';
import { createDocumentRegistry } from "typescript";
import './styles.css';

// document.body.appendChild(outer)
render(<Home/>, document.getElementById('root'))
