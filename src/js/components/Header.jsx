import ReactDOM from 'react-dom';
import React from 'react';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log('Header');
    }
    // handleOpen = () => {
    //     console.log('open')
    //   }

    //   handleClose = () => {
    //      console.log('close')
    //   }
    render() {
        let styles = {
            textDecoration: "none"
        };
        return (
            <div style={styles}>
                <a href='#'>UBER</a> &nbsp;
                <a href='#'>Ride</a> &nbsp;
                <a href='#'>Drive</a> &nbsp;
                </div>
        );
    }

}