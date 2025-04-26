import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from './postsSlice';  // Путь от EditPostScreen.js

const EditPostScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  const post = useSelector(state => state.posts.find(p => p.id === postId));
  const dispatch = useDispatch();

  const [title, setTitle] = useState(post ? post.title : '');
  const [description, setDescription] = useState(post ? post.description : '');

  const handleUpdatePost = () => {
    if (title && description) {
      dispatch(updatePost({ id: postId, title, description }));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Update Post" onPress={handleUpdatePost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  }
});

export default EditPostScreen;
