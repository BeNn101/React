import { StatusBar  } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [titleText, setTitleText] = useState("Mes objectifs")
  const bodyText = sampleGoals;

  const onPressTitle = () => {
    setTitleText("WOW[pressed]");
  };  

  const renderGoals = () => {
    const goalElements = [];
    for (let i = 0; i < bodyText.length; i++) {
      goalElements.push(
        <Text key={i} style={styles.bodyText}>
          {'\u2022'} {bodyText[i]}
        </Text>
      );
    }
    return goalElements;
  };
const FlatTask = () => {
  return (

    
    
    <View style={styles.container}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
      </Text>
      <FlatList
      data={sampleGoals}
      renderItem={({sampleGoals}) => <Text style={styles.bodyText}>
        
      </Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    

  },
  titleText: {
    fontFamily: 'Cochin',
    fontSize: 40,
    fontWeight: 'bold'
  },
  bodyContainer : {
    alignItems: 'center',
    justifyContent: 'center',    
  },
  bodyText: {
    fontFamily: 'Cochin',
    fontSize: 16,
    marginVertical: 5,
  }
  
});

const sampleGoals=[
  "Faire les courses",
  "Aller a la salle de sport 3 fois par semaine",
  "Monter à plus de 5000M d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup",
  "Faire un triathlon",
];

}


