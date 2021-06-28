import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
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


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <Navigation/>
                <div className='app-content'>
                    <Route path='/userPage/:userId'
                           render={() => <UserPageContainer/>}/>
                    <Route path='/chat'
                           render={() => <ChatContainer/>}/>
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
