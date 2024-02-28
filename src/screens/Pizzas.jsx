import React from 'react';
import { Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import pizza1 from './../../assets/top-view-pizza-png.png'
import pizza2 from './../../assets/Pizza_Grande_PNG_Transparente_Sem_Fundo.png'

function Pizzas() {
    return(
        <ScrollView contentContainerStyle={styles.sectionContainer}>
            
            <Image source={pizza1} style={styles.pizza}></Image>
            <Text style={styles.text1}>Pizza de Calabresa com Queijo</Text>
            <Text style={styles.text1}>R$: 29.90</Text>
            <Text style={styles.text2}>COMPRAR</Text>

            <Image source={pizza2} style={styles.pizza}></Image>
            <Text style={styles.text1}>Pizza de Bacon com Azeitonas</Text>
            <Text style={styles.text1}>R$: 39.90</Text>
            <Text style={styles.text2}>COMPRAR</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E5DCD3',
    },
    pizza: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    text1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#3F3E3E',
    },
    text2: {
        backgroundColor: '#B20016',
        color: 'white',
        borderRadius: 12,
        width: 200,
        height: 40,
        textAlignVertical: 'center',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 15,
    },
});
  
export default Pizzas;
