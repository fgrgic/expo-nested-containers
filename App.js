import React from 'react';
import DefaultContainer from './src/containers/DefaultContainer';
import SettingsContainer from './src/containers/SettingsContainer';
import './src/localization';
import Routes from './src/Routes';

const App = () => {
  return (
    <SettingsContainer>
      <DefaultContainer>
        <Routes />
      </DefaultContainer>
    </SettingsContainer>
  );
};

export default App;
