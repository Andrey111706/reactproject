import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Photo from "./components/Photo/Photo";
import Settings from "./components/Settings/Settings";
import ChatContainer from "./components/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import UserPageContainer from "./components/userPage/UserPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Loader from "./assets/loader/Loader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Loader/>
        }

        return (

            <div className="App">
                <HeaderContainer/>
                <Navigation/>
                <div className='app-content'>
                    <Route path={['/userPage/:userId', '/userPage/']}
                           render={() => <UserPageContainer/>}/>
                    <Route path='/chat'
                           render={() => <ChatContainer/>}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/photo' render={() => <Photo/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
                <Footer/>
            </div>
        );

    }
}

let mapStateToProps = (state) => {
    return ({
        initialized: state.app.initialized
    })

}
export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
