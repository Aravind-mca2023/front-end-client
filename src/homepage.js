import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import userContext from "./context.js";
import bank from './bank.jpg';


export default function Homepage(){
    return(<>

    <img id='bank' src={bank} height='500' width='900'></img>
    </>)
}
