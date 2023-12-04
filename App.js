import { StatusBar  } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [titleText, setTitleText] = useState("Mes objectifs")
  

  const onPressTitle = () => {
    setTitleText("WOW[pressed]");
  };  

  
const FlatTask = () => {
  return (

    
    
    <View style={styles.container}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
      </Text>
      <FlatList
      data={sampleGoals}
      renderItem={({item}) => <Text style={styles.item}>
        {item.key}
        
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
  
  item: {
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
  return <FlatTask />;
}


