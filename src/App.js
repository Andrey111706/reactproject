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



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <div className='app-content'>
                    <Route path='/chat' component={Chat}/>
                    <Route path='/userPage' component={UserPage}/>
                    <Route path='/feed' component={Feed}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/photo' component={Photo}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
