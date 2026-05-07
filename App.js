import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './src/context/AppContext';
import Sidebar from './src/components/Sidebar';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import LyricsScreen from './src/screens/LyricsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import PlaylistsScreen from './src/screens/PlaylistsScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4A148C' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen} 
        options={{ title: 'Hasina Masina', headerShown: false }}
      />
      <Stack.Screen 
        name="Lyrics" 
        component={LyricsScreen} 
        options={{ title: 'Paroles', headerBackTitle: 'Retour' }}
      />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4A148C' },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen 
        name="FavoritesMain" 
        component={FavoritesScreen} 
        options={{ title: 'Mes Favoris' }}
      />
      <Stack.Screen 
        name="Lyrics" 
        component={LyricsScreen} 
        options={{ title: 'Paroles' }}
      />
    </Stack.Navigator>
  );
}

function PlaylistsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4A148C' },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen 
        name="PlaylistsMain" 
        component={PlaylistsScreen} 
        options={{ title: 'Mes Playlists' }}
      />
      <Stack.Screen 
        name="Lyrics" 
        component={LyricsScreen} 
        options={{ title: 'Paroles' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <Sidebar {...props} />}
          screenOptions={{
            drawerStyle: {
              width: 280,
              backgroundColor: '#4A148C',
            },
            drawerLabelStyle: {
              color: '#FFFFFF',
            },
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Accueil" component={HomeStack} />
          <Drawer.Screen name="Favoris" component={FavoritesStack} />
          <Drawer.Screen name="Playlists" component={PlaylistsStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
  
}