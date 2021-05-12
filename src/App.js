import './App.css'; // css
import Header from './components/Header';
import Footer from './components/Footer';
import Program from './components/Program';

// App Component
// Ideal place for you to setup the layout
function App() {

  // Returing JSX
  return (
    <div>
      <Header></Header>

      <div className="container mt-5">
        <div className="text-left">
          <h1>Program Component | Props Demo </h1>
          <Program name="Man Vs Wild"
            time="8 PM"
            category="Infotainment">
            A wild adventure program on Discovery TV
          </Program>

          <Program name="Planet Earth"
            time="9 PM"
            category="Infotainment">
            Show in Natgeo
          </Program>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
