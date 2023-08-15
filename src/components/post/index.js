import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles.js';
import feed from '../../../assets/data/feed.js';

const Post = props => {
  const post = props.post;
  console.warn(post);
  return (
    <View style={styles.container}>
      {/* image */}
      <Image style={styles.image} source={{uri: post.image}} />
      {/* Bed and rooms */}
      <Text style={styles.bedrooms}>
        {' '}
        {post.bed} Bed {post.bedroom} bedRooms
      </Text>

      {/* discription  */}
      <Text style={styles.discription} numberOfLines={2}>
        {' '}
        {post.type} {post.title}
      </Text>
      {/* price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> ${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text>
        /night
      </Text>
      {/* total price */}
      <Text style={styles.total}> ${post.totalPrice}</Text>
    </View>
  );
};

export default Post;
