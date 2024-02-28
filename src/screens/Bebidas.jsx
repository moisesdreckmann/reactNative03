import React from 'react';
import { Text, Image, ScrollView, StyleSheet } from 'react-native';
import bebida1 from './../../assets/Litro_Coca_Cola_2L_PNG_Transparente_Sem_Fundo.png'
import bebida2 from './../../assets/lata_coca.png'
import bebida3 from './../../assets/Latinha_de_Cerveja_Budweiser_PNG_Transparente_Sem_Fundo.png'

function Bebidas() {
    return(
        <ScrollView contentContainerStyle={styles.sectionContainer}>
            <Image source={bebida1} style={styles.bebidas}/>
            <Text style={styles.text1}>Coca Cola 2l</Text>
            <Text style={styles.text1}>R$: 12.90</Text>
            <Text style={styles.text2}>COMPRAR</Text>

            <Image source={bebida2} style={styles.bebidas}/>
            <Text style={styles.text1}>Coca Cola 350ml</Text>
            <Text style={styles.text1}>R$: 3.90</Text>
            <Text style={styles.text2}>COMPRAR</Text>

            <Image source={bebida3} style={styles.bebidas}/>
            <Text style={styles.text1}>Budweiser 300ml</Text>
            <Text style={styles.text1}>R$: 4.90</Text>
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
      paddingVertical: 20,
    },
    text1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#3F3E3E',
        marginTop: 10,
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
    bebidas: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    },
});

export default Bebidas;
