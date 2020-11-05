import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const HeaderBar = () => {
    return (
        <View style={styles.headerBlock}>
            <Text style={styles.textBlock}>Autors</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBlock: {
        marginTop: 12,
        marginBottom: 12,
    },
    textBlock: {
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
