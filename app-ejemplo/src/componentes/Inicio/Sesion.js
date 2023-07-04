import React from "react";
import {useState} from "react";
import { Alert, Modal, StyleSheet, StatusBar,TextInput, Button, View , Text} from "react-native";

const Sesion = () => {
    const [nombre, setNombre] = useState([])
    const [apellido, setApellido] = useState([])
    const [showProfile, setShowprofile] = useState(false);

    const closeProfile = () => {
    setShowProfile (!showProfile)
    }
    const getProfile = () => {
    setShowprofile(true)
    }
     const handlePress = () => {
     navigation.navigate('Home');
     }
return(
        <View style={styles.container }>
            <View style={styles.inputContainer}>
                 <TextInput
                     style={styles.input}
                     placeholder="Nombre"
                     value={nombre}
                     onChangeText={setNombre} />
                 <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={setApellido} />

                 <Button title="Bienvenido" onPress={getProfile} />
                 <Button title="Regresar" onPress={handlePress} />
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showProfile}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed");
                        closeProfile();

                    }}>
                        <View style={styles.centeredView}>
                             <View style={styles.modalView}>
                             <Text style={styles.modalText}>
                                 Bienvenido  {nombre} {apellido}

                             </Text>
                             <Button title= "Cerrar" onPress={handlePress}/>

                            </View>
                        </View>
                    </Modal>
                 </View>

)
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "E8EAED",
        marginTop: StatusBar.currentHeight || 0,
        display: "flex"
}, taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        height: 980
}, sectionTitle: {
        fontSize: 24,
        fontWeight: "bold"
}, items: {

}, peritem: {

}, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        marginTop: 22
}, modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignContent: "center",
        shadowColor:"#000",
        Width:100,
        height: 300,
        shadowOffset: {
        width: 0,
        height: 2
},shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
}, modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: "100%"
}, inputContainer: {
        marginBottom: 10,
}, input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
  }
 })

export default Sesion;