import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles.js';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      {/* Bed and rooms */}
      <Text style={styles.bedrooms}> 1 Bed 1 bedRooms</Text>

      {/* discription  */}
      <Text style={styles.discription} numberOfLines={2}>
        {' '}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially
      </Text>
      {/* price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> $43</Text>
        <Text style={styles.newPrice}> $36</Text>
      </Text>
      {/* total price */}
      <Text style={styles.total}> $247</Text>
    </View>
  );
};

export default Post;
