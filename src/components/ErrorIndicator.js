import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { dHeight } from "../utils/Constants";

export const ErrorIndicator = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sorry! Something has wrong! </Text>
            <Text>`¯\_(ツ)_/¯`</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: dHeight * 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.44,
        textAlign: "left",
        letterSpacing: 0.44,
    },
});
