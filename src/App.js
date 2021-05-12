import './App.css'; // css
import Header from './components/Header';
import Footer from './components/Footer';

// App Component
// Ideal place for you to setup the layout
function App() {

  // Returing JSX
  return (
    <div className="App">
      <Header></Header>

      <div className="mt-5">
        <h1>Success!</h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
