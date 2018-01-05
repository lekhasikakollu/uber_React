import ReactDOM from 'react-dom';
import React from 'react';
import "./Header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log('Header');
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }
    handleMouseEnter(e) {
        // this.refs.dropdownRide.togg
        let theRef = e.target.name;
        console.log(theRef);
        this.refs.ride.classList.toggle('showDiv');

    }
    handleMouseLeave(e) {
        let thesRef = e.target.name;
        console.log(thesRef);
        this.refs.thesRef.classList.toggle('hideDiv');
    }

    render() {
        let styles = {
            textDecoration: "none"
        };

        return (
            <div style={styles}>
                <a href='#' style={{ cursor: "pointer" }}>UBER</a> &nbsp;
                <a href='#' name='ride' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Ride</a> &nbsp;

                <a href='#' name='drive' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Drive</a> &nbsp;
                <div ref='drive' className="hideDiv" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <ul>
                        <li>Banana</li>
                        <li>Grapes</li>
                    </ul>
                </div>
                <div ref='ride' className="hideDiv" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <ul>
                        <li>Overview</li>
                        <li>How it works</li>
                        <li>Fare estimator</li>
                        <li>Safety</li>
                        <li>Cities</li>
                        <li>Airports</li>
                    </ul>

                </div>
            </div>
        );
    }

}