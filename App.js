import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput,FlatList,Button} from 'react-native';
import React from 'react';
import OngoingTasks from './components/ongoingTasks';
import CategoryImage from './components/categoryImage';
import Search from './components/search';


export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  
 
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
      <StatusBar style="auto" />
        <View style= {styles.devProfile}>
          <View><Image source={require('./assets/Frame-1.png')} style={styles.profileImage} /></View>
        </View>
        <View style={{ flexGrow: 1}}>
          <View>
            <View style={{marginHorizontal:30,marginTop:-40,width:'100%',marginLeft:-10}}>
              <Search />
            </View>
            <View style={{paddingTop:40, paddingBottom: 20}}>
              <Text style={styles.boldText}>Categories</Text>
            </View>
          </View>
        </View>
        <CategoryImage />
        <OngoingTasks />
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    marginTop: -100,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 50,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  devProfile: {
    width:'100%',
    height: 52,
    top: 52,
    left: 30,
    marginVertical: 134, // equivalent to gap
  },
 
  categoryImage: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
  },
  imageText: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'black',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
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
