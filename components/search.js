import React from 'react'
import {View, Image, TextInput, StyleSheet} from 'react-native';



function Search() {
  return (
    <View style={styles.searchBar}>
        <Image name="search" size={20} color="gray" style={styles.icon} source={require('../assets/search.png')} />
        <TextInput style={styles.input} placeholder="Search" />
        <Image name="filter" size={20} color="gray" style={styles.picture} source={require('../assets/Filter.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      margin: 20,
      backgroundColor: '#fff',
      width: 300,
      height: 50,
      marginLeft: 8,
    },
    icon: {
      marginHorizontal: 13,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
    picture:{
      marginRight:-70,
    },
});
  

export default Search
