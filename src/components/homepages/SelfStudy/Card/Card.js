import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Card.css';


class Card extends Component{
    render() {
        if(this.props.href)
        return (
            <a href={this.props.href} className="Card">
                <h1> {this.props.name}</h1>
                <div className="Card-image">
                <img src={this.props.img}/> </div>
                <div> {this.props.des}</div>
   
            </a>
           );
        return(

         <Link to={this.props.link} className="Card">
             <h1> {this.props.name}</h1>
             <div className="Card-image">
             <img src={this.props.img}/> </div>
             <div> {this.props.des}</div>

         </Link>
        );
    }
}

export default Card;   