import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserPage from "./components/userPage/UserPage";
import Chat from "./components/Chat/Chat";

function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <div className='app-content'>
                <Chat />
            </div>
            <Footer />
        </div>
    );
}


export default App;
