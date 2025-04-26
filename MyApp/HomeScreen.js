import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from './store';

const HomeScreen = ({ navigation }) => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const handleEditPost = (post) => {
    navigation.navigate('CreatePost', { post });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
            <Button title="Edit" onPress={() => handleEditPost(item)} />
            <Button title="Delete" onPress={() => handleDeletePost(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Create New Post" onPress={() => navigation.navigate('CreatePost')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
