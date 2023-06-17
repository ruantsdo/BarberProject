//React
import React, { createContext, useEffect, useState } from "react";

//Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Firebase
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from '../services/firebase'
import { doc, setDoc, getDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//Image Picker
import * as ImagePicker from 'expo-image-picker';

//Contexts Calls
const AuthContext = createContext({ signed: true })

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loginError, setLoginError] = useState(false)
    const [registerError, setRegisterError] = useState(false)
    const [signOutError, setSignOutError] = useState(false)
    const [errorText, setErrorText] = useState("")

    const [imageUrl, setImageUrl] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(()=>{
        setErrorText("")
        loadStoragedData()
    }, [])

    useEffect(() => {
    }, [selectedImage, imageUrl]);

    async function pickImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          return;
        }
      
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
      
        if (!result.canceled) {
            const ImagePath = (result.assets[0].uri).toString()
            setSelectedImage(ImagePath);
        }
    }
    
    async function uploadImage(token, uri) {
        setLoading(true)

        const storage = getStorage();
        const response = await fetch(uri);
        const blob = await response.blob();
        const fileExtension = uri.split('.').pop();
        const filename = `${token.uid}.${fileExtension}`;
        
        const storageRef = ref(storage, `usersProfileImages/${filename}`);
        await uploadBytes(storageRef, blob);

        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL)
        
        return downloadURL;
    }
      
    async function loadStoragedData(){
        const storagedToken = await AsyncStorage.getItem('@APPAuth:token')
        const storagedUser = await AsyncStorage.getItem('@APPAuth:user')

        if(storagedToken && storagedUser){
            setToken(JSON.parse(storagedToken))
            setUser(JSON.parse(storagedUser))
        }
        setLoading(false)
    }

    async function signInWithEmail( email , password ){
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const response = userCredential.user;
            AsyncStorage.setItem('@APPAuth:token', JSON.stringify(response))
            handleUserData(response)
        }).catch((error) => {
            setLoginError(true)
            setErrorText("Usuário ou senha inválidos")
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoading(false)
        });
    }

    async function resgisterWithEmail( name, email, birth, password, bio){
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
            const response = userCredential.user;
            AsyncStorage.setItem('@APPAuth:token', JSON.stringify(response))
            uploadImage(response, selectedImage)
            .then((imageUrl) => {
                writeUserInDB(response, name, email, birth, imageUrl, bio);
                handleUserData(response);
                return
            })
            .catch((error) => {
                console.log("Erro: ", error)
            });

            writeUserInDB(response, name, email, birth, imageUrl, bio);
            handleUserData(response)
        }
        ).catch((error) => {
            setRegisterError(true)
            setErrorText("Falha ao realizar cadastro")
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoading(false)
        })
    }

    function firebaseSignOut(){
        setLoading(true)

        signOut(auth).then(() => {
            AsyncStorage.clear().then(()=>{
                setUser(null)
                setToken(null)
            })
          }).catch((error) => {
            setSignOutError(true)
            setErrorText("Erro ao fazer logout")
            setLoading(false)
          });

        setLoading(false)
    }

    async function writeUserInDB( response, name, email, birth, imageUrl, bio ){
        setLoading(true)
        await setDoc(doc(db, "users", response.uid), {
            name: name,
            email: email,
            birth: birth,
            photoUrl: imageUrl,
            bio: bio,
          });
    }

    async function writeStoreInDB( name, address, email, phone, site, type, desc ){
        setLoading(true)

        await setDoc(doc(db, "establishments", token.uid), {
            owner: token.uid,
            name: name,
            address: address,
            email: email,
            phone: phone,
            website: site,
            type: type,
            description: desc,
        });

        setLoading(false)
    }

    async function handleUserData(response){
        setLoading(true)

        const docRef = doc(db, "users", response.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            AsyncStorage.setItem('@APPAuth:user', JSON.stringify(docSnap.data()))
            loadStoragedData()
        } else {
            setErrorText("Erro ao carregar os seus dados");
            setLoading(false)
        }
    }

    return(
        <AuthContext.Provider 
            value={{ 
                    signed: !!user, 
                    user,
                    token, 
                    signInWithEmail, 
                    resgisterWithEmail, 
                    firebaseSignOut,
                    writeUserInDB,
                    writeStoreInDB,
                    handleUserData, 
                    loading, 
                    errorText,
                    setErrorText, 
                    loginError,
                    setLoginError, 
                    registerError,
                    setRegisterError, 
                    pickImage,
                    setImageUrl,
                    selectedImage,
                    setSelectedImage,
                }}>
            {children}
        </AuthContext.Provider>
    ) 
}

export default AuthContext