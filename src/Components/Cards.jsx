import React, {Component} from "react";
import { FaCcDiscover } from "react-icons/fa";
import Card from "./Card";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import '../App.css';


class Cards extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="CD">
                        <Card imgsrc={img1}/>
                    </div>
                    <div className="CD">
                        <Card imgsrc={img2}/>
                    </div>
                    <div className="CD">
                        <Card imgsrc={img3}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;