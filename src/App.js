import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Shoppage from './pages/shoppage/shoppage.component.jsx';
import SignInPage from './pages/signinpage/signinpage.component.jsx';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      //this.setState({currentUser:user});
      createUserProfileDocument(user);
      
      //console.log('user~~~',user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HashRouter>   
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={Shoppage}/>
            <Route exact path='/sign-in' component={SignInPage}/>
          </Switch>
        </HashRouter>
      </div>
      
    );
  }
}

export default App;
