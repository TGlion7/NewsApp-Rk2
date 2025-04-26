import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CreatePostScreen from './CreatePostScreen';
import EditPostScreen from './EditPostScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
  },
};

export default function MainNavigator() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Блог' }} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ title: 'Создать пост' }} />
          <Stack.Screen name="EditPost" component={EditPostScreen} options={{ title: 'Редактировать пост' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
