import ReactDOM from 'react-dom';
import React from 'react';

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var formStyles = {
            backgroundColor : '#f8f8f9',
                marginLeft : "850px",
                marginRight : "50px",
                width :"400px",
                height : "450px",
                fontFamily : "Helvetica Neue",
                padding : "10px"
                
        };
        return (
                <div className='well'>
                
                <div className='formLayout' style={formStyles}>
                <h3>SignUp</h3>
                
                <input defaultValue='' placeholder='First Name' className='form-control'/>
                <input defaultValue='' placeholder='Last Name' className='form-control'/>
                <input defaultValue='' placeholder='Email' className='form-control'/>
                <input defaultValue='' placeholder='Create Password' className='form-control'/>
                <br/> <br/>
                <button className='btn btn-success btn-lg' >SignUp For Uber -></button>
                </div>
                </div>
                    );
    }
        
}
