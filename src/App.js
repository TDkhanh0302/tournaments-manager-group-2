import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TournamentsContextProvider from './contexts/TournamentsContext';
import AllTournament from './Pages/AllTournament/AllTournament';
import Home from './Pages/Home/Home';
import LoginForm from './Pages/Login/LoginForm';
import SignUpForm from './Pages/Login/SignUpForm';
import NewTournament from './Pages/NewTournament/NewTournament';
import TournamentBracketHost from './Pages/TournamentDetails/TournamentBracketHost';
import TournamentPlayerHost from './Pages/TournamentDetails/TournamentPlayerHost';
import TournamentSetting from './Pages/TournamentDetails/TournamentSetting';
import YourTournament from './Pages/YourTournament/YourTournament';
function App() {
  return (
    <TournamentsContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tournaments" component={AllTournament} />
          <Route path="/your-tournaments" component={YourTournament} />
          <Route path="/login" component={LoginForm} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/add-tournament" component={NewTournament} />
          <Route path="/tournament/bracket/:tournamentId" component={TournamentBracketHost} />
          <Route path="/tournament/players/:tournamentId" component={TournamentPlayerHost} />
          <Route path="/tournament/setting/:tournamentId" component={TournamentSetting} />
          {/* Tạm thời để tất cả các component host */}
        </Switch>
      </Router>
    </TournamentsContextProvider>
  );
}

export default App;
