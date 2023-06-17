// React
import React, { useContext, useState, useEffect } from "react";
import { View, Text } from 'react-native'

// Firebase
import { db } from "../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// Contexts
import AuthContext from "../contexts/auth";

const TargetInHome = () => {
    const {} = useContext(AuthContext)


    const [targets, setTargets] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "users"));
                const querySnapshot = await getDocs(q);
                const targetsData = [];
                querySnapshot.forEach((doc) => {
                    targetsData.push(doc.data());
                });
                setTargets(targetsData);
            } catch (error) {
                console.error('Erro ao ler dados do Firestore:', error);
            }
        }

        fetchData();
    }, []);
    
      return (
        <View>
            {targets.map((target, index) => (
              <View key={index}>
                <Text>{target.name}</Text>
                <Text>{target.email}</Text>
              </View>
                // Aqui você pode criar os componentes desejados com base nas informações do Firestore
            ))}
        </View>
      );
}

export default TargetInHome