import React from "react";
import { Text, View } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Menu from "./componentes/home/Menu";
import ListComponent from "./componentes/list/List";
import Inicio from "./componentes/Inicio/Inicio";
import Chat from "./componentes/Api/Chat";



const Tab  = createBottomTabNavigator();
const Navigation = () => {
        return(
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: "Home"

          }}>
                </Tab.Screen>

            <Tab.Screen name="list" component={ListComponent} options={{
                tabBarLabel: "Listado"

            }}>

            </Tab.Screen>
            <Tab.Screen name="Inicio" component={Inicio} options={{
                            tabBarLabel: "Inicio"

                        }}>
              </Tab.Screen>
              <Tab.Screen name="Chat" component={Chat} options={{
                                          tabBarLabel: "Chat"

                                      }}>
                            </Tab.Screen>

            </Tab.Navigator>

)}



 export default Navigation;