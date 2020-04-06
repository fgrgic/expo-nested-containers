// import i18n from 'i18n-js';
import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { MatchContext } from '../containers/DefaultContainer';
import { SettingsContext } from '../containers/SettingsContainer';

const HomeScreen = () => {
  const { match } = useContext(MatchContext);
  const { i18n } = useContext(SettingsContext);

  return (
    match && (
      <SafeAreaView>
        <Text>{i18n.t('welcome')}</Text>
      </SafeAreaView>
    )
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
