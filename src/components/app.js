import React, {Component} from 'react';
import { white, amber500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  appBar: {
    color: amber500,
    height: 50
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="Hello World!" />
      </MuiThemeProvider>
    );
  }
}

export default App;
