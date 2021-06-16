import React, { useContext, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';
import ThemeContext from '../context/ThemeContext';
// import { ThemeColors } from '../themes/ThemeColors';
// import { colorMode } from '../themes/ThemeColors';

export function Header() {
  const [themeMode, setThemeMode] = useContext(ThemeContext)
  
  // const colorMode = ThemeColors(ThemeContext)
  // console.log(colorMode.header)  

  return (
    <View style={themeMode === 'light' ? styles.header : [styles.header, {backgroundColor: '#3E3E3E'}]}>
    {/* <View style={styles.header}> */}
      <Switch value={themeMode === "light" ? false : true} onValueChange={() => setThemeMode(themeMode === "light" ? "dark" : "light")}/>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor:  '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
