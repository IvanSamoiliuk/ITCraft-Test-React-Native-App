import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { AutorsScreen } from "./src/screens/AutorsScreen";
import { PostsScreen } from "./src/screens/PostsScreen";

async function loadApplication() {
    await Font.loadAsync({
        "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });
}

const Stack = createStackNavigator();

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onError={(err) => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Autors"
                    component={AutorsScreen}
                    options={{
                        headerStyle: {
                            height: 64,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerTitleAlign: "left",
                    }}
                />
                <Stack.Screen
                    name="Posts"
                    component={PostsScreen}
                    options={{
                        headerStyle: {
                            height: 64,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerTitleAlign: "left",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
    },
});
