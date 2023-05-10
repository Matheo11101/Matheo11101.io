// Import necessary modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Instant Replay Screen
const InstantReplayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Instant Replay Screen</Text>
    </View>
  );
};

// Rankings Screen
const RankingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Rankings Screen</Text>
    </View>
  );
};

// Create the stack navigator
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  InstantReplay: { screen: InstantReplayScreen },
  Rankings: { screen: RankingsScreen },
});

// Create the app container
const AppContainer = createAppContainer(AppNavigator);

// App component
const App = () => {
  return <AppContainer />;
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
