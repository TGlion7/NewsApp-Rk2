import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from './store';

const CreatePostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { post } = route.params || {}; // если это редактирование поста

  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleSubmit = () => {
    if (post) {
      dispatch(updatePost({ id: post.id, title, content }));
    } else {
      dispatch(createPost({ id: Date.now(), title, content }));
    }
    navigation.goBack(); // возвращаемся на главный экран
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
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      <Button title={post ? 'Update Post' : 'Create Post'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default CreatePostScreen;
