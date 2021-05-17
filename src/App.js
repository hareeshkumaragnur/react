import './App.css'; // css
import Header from './components/Header';
import Footer from './components/Footer';
import Program from './components/Program';
import ChannelList from './containers/ChannelList';
import TrendingShows from './containers/TrendingShows';
import Subscribers from './containers/Subscribers';

// App Component
// Ideal place for you to setup the layout
function App() {

  // Returing JSX
  return (
    <div>
      <Header></Header>

      <div className="container mt-5">
        <div className="text-left">
          <h2>Program Component | Props Demo </h2>
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

        <div>
          <h2 className="greenText">Channel List Component | Class Comp, State, Events Demo </h2>
          <ChannelList></ChannelList>
          <hr />
        </div>

        <div>
          <br />
          <h2>Trending Shows | Lists and Keys, Conditional Rendering, Events, Mutating State obj Immutably </h2>
          <TrendingShows date="Today"/>
        </div>

        <div>
          <br/>
          <h2>Subscribers | Lifecycle Hooks Demo</h2>
          <Subscribers />
        </div>

      </div>


      <Footer />
    </div>
  );
}

export default App;
