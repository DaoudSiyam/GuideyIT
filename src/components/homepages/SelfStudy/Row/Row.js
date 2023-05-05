import React, {Component} from "react";
import Card from "../Card/Card";
import './Row.css';

class Row extends Component{
   
    render() {

    return(
        <div className="row">
            <div className="row-cards">
                {this.props.field.map((p)=>(
                    <Card 
                    {...p}
                    />
            )
            )
            }
            </div>
        </div>
       
    )
}}

 export default Row; 
