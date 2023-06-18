// React
import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'

// Contexts
import AuthContext from "../contexts/auth";

// Styles
import { StyleSheet } from "react-native"
import { DefaultTheme } from "../themes/colors&sizes.theme";

const TargetInHome = ({ targetData, fetchTargetData }) => {
    const {} = useContext(AuthContext)

    useEffect(() => {
      fetchTargetData()
    }, []);

    let targets = targetData

    const getCurrentTime = (opens, closes) => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const formattedCurrentTime = `${currentHour}:${currentMinute}`;

      const [ohour, ominute] = opens.split(':'); 
      const [chour, cminute] = closes.split(':'); 

      if(ohour < chour){
        if (parseInt(currentHour) >= parseInt(ohour) && parseInt(currentMinute) >= parseInt(ominute) 
        && parseInt(currentHour) <= parseInt(chour) && parseInt(currentMinute) <= parseInt(cminute)){
          return <Text style={{ position: 'absolute', left: 100, bottom: 10, color: 'green', fontWeight: 'bold' }}>Aberto</Text>
        } else {
          return <Text style={{ position: 'absolute', left: 90, bottom: 10, color: 'red', fontWeight: 'bold' }}>Fechado</Text>
        }
      }

      if(ohour > chour){
        if (parseInt(currentHour) >= parseInt(chour) && parseInt(currentMinute) >= parseInt(ominute) 
        && parseInt(currentHour) >= parseInt(ohour) && parseInt(currentMinute) >= parseInt(cminute)){
          return <Text style={{ position: 'absolute', left: 100, bottom: 10, color: 'green', fontWeight: 'bold' }}>Aberto</Text>
        } else {
          return <Text style={{ position: 'absolute', left: 90, bottom: 10, color: 'red', fontWeight: 'bold' }}>Fechado</Text>
        }
      }
    }

      return (
        <View style={styles.container} >
            {targets.map((target, index) => (
              <TouchableOpacity key={index} style={styles.card} >
                <Image source={{ uri: (target.photoURL) }} style={styles.image} />
                {getCurrentTime(target.opens, target.closes)}
                <View style={styles.infoContainer}>
                  <View style={styles.info}>
                    <Text style={styles.text} > Nome</Text>
                    <Text style={styles.text} > {target.name}</Text>
                  </View>
                  <View style={styles.info}>
                    <Text style={styles.text} > Funcionamento</Text>
                    <Text style={styles.text} > Das {target.opens} as {target.closes}</Text>
                  </View>
                  <View style={styles.info}>
                    <Text style={styles.text} > Endereço</Text>
                    <Text style={styles.text} > {target.address}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      );
}

export default TargetInHome

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',

    width: '100%',

    alignItems: 'center',

    marginBottom: 15,
  },
  card: {
    width: '95%',
    height: 150,

    borderWidth: 1,
    borderColor: DefaultTheme.color.white,
    borderRadius: 5,

    justifyContent: 'center',

    marginBottom: 10,
  },
  image: {
    position: 'absolute',
    left: 10,

    width: '40%',
    height: '90%',

    borderRadius: 5,
  },
  infoContainer: {
    position: 'absolute',
    right: 10,
    width: '50%',
  },
  info:{ 
    backgroundColor: DefaultTheme.color.primaryContrast,
    borderRadius: 5,

    marginVertical: 4,
  },
  text:{
    color: DefaultTheme.color.white,
  },
})