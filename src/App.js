import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
// import Review from "./PortfolioContainer/Review/Review";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";


function App() {
  return (
    <div className="App">
    <Home id='Home' />
    <AboutMe id='AboutMe' />
    <Resume id='Resume' />
    {/* <Review /> */}
    <ContactMe id='ContactMe' />
  </div>
  );
}

export default App;
