import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

export default function App() {
  const [titleText, setTitleText] = useState('Mes objectifs');
  const [searchText, setSearchText] = useState('');
  const [sampleGoals, setSampleGoals] = useState([
    'Faire les courses',
    'Aller a la salle de sport 3 fois par semaine',
    'Monter à plus de 5000M daltitude',
    'Acheter mon premier appartement',
    'Perdre 5kgs',
    'Gagner en productivité',
    'Apprendre un nouveau langage',
    'Faire une mission en freelance',
    'Organiser un meetup',
    'Faire un triathlon',
  ]);
  const [filteredGoals, setFilteredGoals] = useState(sampleGoals);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('');
  const [newGoalText, setNewGoalText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleSearchSubmit = () => {
    const filtered = sampleGoals.filter((goal) =>
      goal.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredGoals(filtered);
  };

  const openModal = (goal) => {
    setSelectedGoal(goal);
    setNewGoalText(goal);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const updateGoal = (oldText, newText) => {
    const updatedGoals = [...sampleGoals];
    const index = updatedGoals.indexOf(oldText);
    
    if (index !== -1) {
      updatedGoals[index] = newText;
      setSampleGoals(updatedGoals);
      setFilteredGoals(updatedGoals); 
    }
    
    closeModal();
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./wow.jpg')} resizeMode='cover' blurRadius={20} style={styles.image}>
        <Text style={styles.titleText}>{titleText}</Text>
        <TextInput
          style={{ ...styles.textInput, 
            placeholderTextColor: 'white', color: 'white'}}
          placeholder="Rechercher..."
          onChangeText={handleSearchTextChange}
          value={searchText}
          onSubmitEditing={handleSearchSubmit}
        />
        <FlatList
          data={filteredGoals}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
              <TouchableOpacity onPress={() => openModal(item)} style={styles.editButton}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </ImageBackground>

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.modalTextInput}
              value={newGoalText}
              onChangeText={(text) => setNewGoalText(text)}
            />
            <Button title="Update" onPress={() => updateGoal(selectedGoal, newGoalText)} color="blue" />
            <Button title="Cancel" onPress={closeModal} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  textInput: {
    fontStyle: 'italic',
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderColor: 'white',
    fontSize: 20,
    maxHeight: 100,
    width: '90%',
  },
  titleText: {
    fontFamily: 'Cochin',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: 'Cochin',
    fontSize: 18,
    marginVertical: 8,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 10)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  editButton: {
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  editText: {
    color: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTextInput: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 18,
  },
});
