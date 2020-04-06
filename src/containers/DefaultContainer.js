// import * as SecureStore from 'expo-secure-store';
import React, { useContext, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { MATCH } from '../constants';
import { SettingsContext } from './SettingsContainer';

export const MatchContext = React.createContext({
  match: null,
  setMatch: () => {},
});

const DefaultContainer = (props) => {
  const { settings } = useContext(SettingsContext);

  const [match, setMatch] = useState(null);

  const initializeMatch = () => {
    setMatch({
      teamOne: { playerOne: '', playerTwo: '' },
      teamTwo: { playerOne: '', playerTwo: '' },
      games: [
        {
          winner: 0,
          rounds: [],
        },
      ],
    });
  };

  const loadMatch = async () => {
    // await AsyncStorage.clear();
    const storageMatch = await AsyncStorage.getItem(MATCH);
    if (!storageMatch) {
      initializeMatch();
    } else {
      setMatch(JSON.parse(storageMatch));
    }
  };

  const saveMatch = async () => {
    if (match) {
      await AsyncStorage.setItem(MATCH, JSON.stringify(match));
    }
  };

  useEffect(() => {
    saveMatch();
    return () => {};
  }, [match, settings]);

  useEffect(() => {
    loadMatch();
    return () => {};
  }, []);

  return (
    <MatchContext.Provider
      value={{
        match,
        initializeMatch,
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default DefaultContainer;
