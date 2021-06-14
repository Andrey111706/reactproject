import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserPage from "./components/userPage/UserPage";

import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Photo from "./components/Photo/Photo";
import Settings from "./components/Settings/Settings";
import ChatContainer from "./components/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <div className='app-content'>
                    <Route path='/userPage'
                           render={() => <UserPage store={props.store}/>}/>
                    <Route path='/chat'
                           render={() => <ChatContainer store={props.store}/>}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/photo' render={() => <Photo/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );

}


export default App;
