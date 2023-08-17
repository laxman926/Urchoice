/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import LoginScreen from './src/screens/LoginScreen';
import DestinationSearch from './src/screens/DestinationSearch';

 const post1 = feed[0];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Post post= {post1}/> */}
      {/* <HomeScreen /> */}
      {/* <SearchResultsScreen/> */}
      {/* <LoginScreen/> */}
      <DestinationSearch/>
    </View>
  );
};

export default App;
