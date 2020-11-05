import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { dHeight } from "../utils/Constants";

export const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#c1bdbd" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: dHeight,
        justifyContent: "center",
        alignItems: "center",
        height: dHeight * 0.8,
    },
});
