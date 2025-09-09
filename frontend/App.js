import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recorder from './components/Recorder';
import Transcription from './components/Transcription';
import Summary from './components/Summary';
import Prontuario from './components/Prontuario';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/recorder" component={Recorder} />
          <Route path="/transcription" component={Transcription} />
          <Route path="/summary" component={Summary} />
          <Route path="/prontuario" component={Prontuario} />
          <Route path="/" exact>
            <h1>Welcome to the Audio Management App</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;