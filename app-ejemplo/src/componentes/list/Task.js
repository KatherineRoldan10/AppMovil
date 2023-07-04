import React from "react";
import {Image, View, StyleSheet,Text} from "react-native";
import Stylesheet from "react-native";


const Task = ({task}) => {

    return (

            <View style={styles.container}>
                   <View style={styles.itemLeft}>
                    <Image style={styles.image} source={{uri: task.urls.raw}}/>
                    <Text style={styles.itemText}>
                    {task.alt_description}

                    </Text>
                </View>
            </View>

    )
}

   const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
},  itemLeft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
},  image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15
}, itemText: {
        maxWidth: "88%"
},
})

export default Task;