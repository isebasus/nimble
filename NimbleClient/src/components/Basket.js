import React, { Component } from 'react';
import Header from "./Header.js";

export default class Basket extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header></Header>
            </div>
        );
    }
}