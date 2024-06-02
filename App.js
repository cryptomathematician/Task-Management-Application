import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput,FlatList,Button} from 'react-native';
import React from 'react';


export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  
  const images = [
    { src: require('./assets/card2.png')},
    { src: require('./assets/card3.png')},
    // Add more images as needed
  ];
 
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
      <StatusBar style="auto" />
        <View style= {styles.devProfile}>
          <View><Image source={require('./assets/Frame-1.png')} style={styles.profileImage} /></View>
        </View>
        <View style={{ flexGrow: 1}}>
          <View>
            <View style={{marginHorizontal:30,marginTop:-40,width:'100%',marginLeft:-10}}>
            <View style={styles.searchBar}>
              <Image name="search" size={20} color="gray" style={styles.icon} source={require('./assets/search.png')} />
              <TextInput style={styles.input} placeholder="Search" />
              <Image name="filter" size={20} color="gray" style={styles.picture} source={require('./assets/Filter.png')}/>
            </View>
            </View>
            <View style={{paddingTop:40, paddingBottom: 20}}>
              <Text style={styles.boldText}>Categories</Text>
            </View>
          </View>
        </View>
         <FlatList
            data={images}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={item.src} style={styles.categoryImage} />
                <Text style={styles.imageText}>{item.label}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.taskContainerWrapper}>
            <View style={styles.taskContainer}>
              <Text style={styles.taskTitle}>Ongoing Tasks</Text>
              <View style={styles.taskCard}>
                <Text style={styles.taskText}>Mobile App development</Text>
              </View>
              <View style={styles.taskCard}>
                <Text style={styles.taskText}>Web development</Text>
              </View>
              <View style={styles.taskCard}>
                <Text style={styles.taskText}>Push Ups</Text>
              </View>
            </View>
          </View>
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
  todayTasks: {
    width: 154,
    fontSize: 15,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    padding: 3,
    marginVertical: 5,
    width: '100%',
    alignSelf: 'center',
    height: 110,
    justifyContent: 'center',
    borderColor: '#E8D1BA',
  },
  taskText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  taskContainerWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskContainer: {
    width: '90%',
    backgroundColor: '#F7F0E8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: '#F7F0E8'
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});
