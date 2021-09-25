import Header from "./components/atoms/header/header";
import Dashboard from "./components/organisms/dashboard/dashboard";
import Footer from "./components/atoms/footer/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
