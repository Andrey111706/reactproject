import './App.css';
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserPage from "./components/userPage/UserPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <UserPage />
            <Footer />
        </div>
    );
}


export default App;
