import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Task from './components/CreateTask';
import TaskList from './components/TaskList';

const App = () => {
  const padding = {
    padding: 5,
  };

  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          <Link style={padding} to="/task">
            Task
          </Link>
          <Link style={padding} to="/list">
            List
          </Link>
        </div>
        <Switch>
          <Route path="/task">
            <Task />
          </Route>
          <Route path="/list">
            <TaskList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
