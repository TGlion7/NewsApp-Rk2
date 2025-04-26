import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './store';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import CreatePostScreen from './CreatePostScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Мой Блог',
              headerStyle: {
                backgroundColor: '#f8f8f8',
              },
              headerRight: () => (
                <Image
                  source={require('./assets/logo.png')}
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
              ),
            }}
          />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
