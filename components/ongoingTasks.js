import React from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';


function OngoingTasks() {
    

  return (
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
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Design Mockups</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Content Creation</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Social Media Posting</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Market Research</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Financial Reporting</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>HR Onboarding</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>IT System Maintenance</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Operations Optimization</Text>
      </View>
      <View style={styles.taskCard}>
        <Text style={styles.taskText}>Strategic Planning</Text>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
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
  

export default OngoingTasks
