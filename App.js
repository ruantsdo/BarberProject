import 'react-native-gesture-handler'

//React
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

//Routes
import Routes from './src/routes';

//Contexts
import { AuthProvider } from './src/contexts/auth';

//Styles
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './src/themes/colors&sizes.theme'

//Notification Bar Calc
const STATUS_BAR_HEIGHT = StatusBar.currentHeight ? StatusBar.currentHeight : 0

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={DefaultTheme}>
        <AuthProvider>
          <SafeAreaView style={styles.container}>
            <Routes />
          </SafeAreaView>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}


//Styles
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:STATUS_BAR_HEIGHT,
  }
})