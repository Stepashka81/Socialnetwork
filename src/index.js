import React from 'react';

import './index.css';
import{rerenderEntireTree} from "./Render";

import {state} from "./components/Redux/state";

 rerenderEntireTree(state)