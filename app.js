import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FavoritesProvider } from './FavoritesContext'; // Импорт провайдера для избранного
import NewsList from './screens/NewsList';
import NewsDetails from './screens/NewsDetails';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NewsList" component={NewsList} options={{ title: 'Новости' }} />
          <Stack.Screen name="NewsDetails" component={NewsDetails} options={{ title: 'Детали новости' }} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Избранное' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
