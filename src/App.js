import Header from "./components/Header";
import Featured from "./components/Featured";
import Books from "./components/Books";
import SocialMediaLinks from "./components/SocialMediaLinks";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="two-col">
        <Featured />
        <Books />
      </div>
      <SocialMediaLinks />
    </div>
  );
}

export default App;
