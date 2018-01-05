import ReactDOM from 'react-dom';
import React from 'react';

import { connect } from 'react-redux';

 class Content extends React.Component{
    constructor(props){
        super(props);
        console.log('In Content');
        
    }

    render(){
        var styles={
            backgroundImage : "url('https://d1a3f4spazzrp4.cloudfront.net/chameleon-assets/v1.0.0/c70b8eba-a194-42c9-b734-00bd27cda456/desk.jpg')",
            width: "100%" ,
            height: "500px"
        };
        var dataArray =this.props.data;
        return (
            <div>
                
                
                <h1>{dataArray[0]}</h1>
                <h3>{dataArray[1]}</h3>
                <div style={styles}></div>
                </div>
                    );
    }
        
}

function mapStateToProps(state) {
    return {
        data : state.viewControl.dataToShow
    }
}

export default connect(mapStateToProps)(AppBody);
