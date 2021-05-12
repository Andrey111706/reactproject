import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserPage from "./components/userPage/UserPage";
import Chat from "./components/Chat/Chat";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Photo from "./components/Photo/Photo";
import Settings from "./components/Settings/Settings";





function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <div className='app-content'>
                    <Route path='/userPage'
                           render={() => <UserPage PostsData={props.state.mainPage.PostsData}
                                                   dispatch={props.dispatch}
                                                    newPostValue={props.state.mainPage.postInputValue}/>}/>
                    <Route path='/chat'
                           render={() => <Chat chatUsersData={props.state.chatPage.chatUsersData}
                                               chatMessageData={props.state.chatPage.chatMessageData}
                                               dispatch={props.dispatch}
                                               textvalue={props.textvalue} />}/>
                    <Route path='/feed' render={() => <Feed/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/photo' render={() => <Photo/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );

}


export default App;
