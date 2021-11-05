import React from 'react';
import './sign-in.styles.css';
import FormInput from '../form-input/form-input.component.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit')
    }
    handleChange = event => {
        console.log('handleChange',event)
        const {value,name} = event.target;
        this.setState( {[name]: value} )
    }
    render(){
        return  <div className='sign-in'> 
                    <h2>I already have an account</h2>
                    <div class='instruction'>Sign in with your email and password</div>
                    <form onSubmit = {this.handleSubmit}> 
                        <FormInput  name="email" 
                                type="email" 
                                value={this.state.email}
                                handleChange={this.handleChange}
                                label ='Email'
                                required/>
                        <FormInput  name="password" 
                                type="password" 
                                value={this.state.password}
                                handleChange={this.handleChange}
                                label ='Password'
                                required/>
                        <div className="buttons">
                            <CustomButton onClick={ ()=>this.handleSubmit()} > 
                                Sing In
                            </CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}> 
                                Sing In With Google
                            </CustomButton>
                        </div>
                    </form>
                </div> 
    }
}
export default SignIn;