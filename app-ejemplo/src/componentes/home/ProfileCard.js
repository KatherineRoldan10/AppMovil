import React from "react";
import { Linking, Text, Image, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name="twitter" size={30} color={"purple"}/>
const linkedin = <Icon name="linkedin" size={30} color={"purple"}/>
const whatsapp = <Icon name="whatsapp" size={30} color={"purple"}/>
const facebook = <Icon name="facebook" size={30} color={"purple"}/>
const tiktok = <Icon name="tiktok" size={30} color={"purple"}/>

const ProfileCard = () => {
 const user = {
      avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png",
      coverPhoto: "https://www.xtrafondos.com/wallpapers/resized/gato-con-estrellas-de-fondo-11524.jpg?s=large",
      name: "Katherin Roldan"
    }



return(
        <View style={styles.container}>
           <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
           <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                {user.name}
           </Text>
        </View>
            <View style={styles.buttonContainer}>
               <Text style={{ color: "purple" }} onPress={() => Linking.openURL("https://twitter.com")}>{twitter}</Text>
               <Text style={{ color: "purple" }} onPress={() => Linking.openURL("https://www.linkedin.com/")}>{linkedin}</Text>
               <Text style={{ color: "purple" }} onPress={() => Linking.openURL("https://www.whatsapp.com")}>{whatsapp}</Text>
               <Text style={{ color: "purple" }} onPress={() => Linking.openURL("https://www.facebook.com")}>{facebook}</Text>
               <Text style={{ color: "purple" }} onPress={() => Linking.openURL("https://www.tiktok.com/es/")}>{tiktok}</Text>
           </View>
        </View>
)
}
const styles = StyleSheet.create(
    {
        container : {
              width: "58%",
              alignItems: "center"
       },coverPhoto: {
              width: "100%",
              height: 200,
              resizeMode: "cover"
      },avatarContainer: {
                alignItems: "center",
                marginTop: -75
              },avatar: {
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 5,
                borderColor: "white"
              },name: {
                marginTop: 15,
                fontSize: 20,
                fontWeight: "Arial"
              },buttonContainer: {
                 flexDirection: "row",
                 marginTop: 20,
                 width: "68%",
                 justifyContent: "space-between"
        }
       }
    )

export default ProfileCard;