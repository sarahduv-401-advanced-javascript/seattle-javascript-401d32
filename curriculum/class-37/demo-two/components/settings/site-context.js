import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Daily Dose of Code',
      twitter: 'DailyDoseofCode',
      email: 'dailydoseofcode@gmail.com',
      changleTitleTo: this.changeTitleTo,
      changeTwitterTo: this.changeTwitterTo,
      changeEmailTo: this.changeEmailTo,
      displayMode: 'light',
      toggleDisplayMode: this.toggleDisplayMode
    }
  }

  changeTitleTo = (value) => this.setState({title: value});

  changeTwitterTo = (value) => this.setState({twitter: value});

  changeEmailTo = (value) => this.setState({email: value});

  toggleDisplayMode = () => {
    if(this.state.displayMode === 'light') {
      this.setState({displayMode: 'dark'})
    } else {
      this.setState({displayMode: 'light'})
    }
  }

  render() {
    return(
      // .Provider is built in
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}