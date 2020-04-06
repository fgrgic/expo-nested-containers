// import i18n from 'i18n-js';
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { SETTINGS } from '../constants';
import i18n, { setLocale } from '../localization';

export const SettingsContext = React.createContext({
  settings: null,
  setSettings: () => {},
});

const SettingsContainer = (props) => {
  const [settings, setSettings] = useState(null);

  const initializeSettings = () => {
    setSettings({
      playTo: 1001,
      lang: i18n.locale,
    });
  };

  const setPlayTo = (playTo) => {
    setSettings({
      ...settings,
      playTo,
    });
  };

  const setLang = (lang) => {
    setLocale(lang);
    setSettings({
      ...settings,
      lang,
    });
  };

  const settingsFromStorage = (storageSettings) => {
    if (storageSettings) {
      if (storageSettings.lang) {
        setLocale(storageSettings.lang);
      }
      setSettings(storageSettings);
    }
  };

  const saveSettings = async () => {
    if (settings) {
      await AsyncStorage.setItem(SETTINGS, JSON.stringify(settings));
    }
  };

  const loadSettings = async () => {
    const storageSettings = await AsyncStorage.getItem(SETTINGS);
    if (!storageSettings) {
      initializeSettings();
    } else {
      settingsFromStorage(JSON.parse(storageSettings));
    }
  };

  useEffect(() => {
    saveSettings();
  }, [settings]);

  useEffect(() => {
    // console.warn('load settings');
    loadSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, setPlayTo, setLang, i18n }}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContainer;
