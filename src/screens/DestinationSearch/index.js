import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from '../../screens/DestinationSearch/styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo'

const DestinationSearch = props => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Search bar for destinations */}
      <TextInput
        style={styles.TextInput}
        placeholder="Where are you going"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          // Render each destination as a list item with the name and image
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
