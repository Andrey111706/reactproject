import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserPage from "./components/UserPage";

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
