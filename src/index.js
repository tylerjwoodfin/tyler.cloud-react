import ReactDOM from 'react-dom';
import {Nav} from './nav';
import './assets/style.css';
import { Column1 } from './index/column1';
import { Column2 } from './index/column2';

// const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(<Nav/>, document.getElementById('nav'));
ReactDOM.render(<Column1/>, document.getElementById('column1'));
ReactDOM.render(<Column2/>, document.getElementById('column2'));