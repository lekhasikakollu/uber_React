import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header.jsx';
import AppBody from './AppBody.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('In App');
    }

    render() {
        return (
            <div >
                <Header />
                <AppBody />
            </div>
        );
    }




}