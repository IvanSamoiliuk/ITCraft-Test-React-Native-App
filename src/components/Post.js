import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Post = ({ item: { title, body } }) => {
    return (
        <View style={styles.post}>
            <View style={styles.textBlock}>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.title}
                >
                    {title}
                </Text>
                <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.text}
                >
                    {body}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    post: {
        height: 113,
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        backgroundColor: "#fff",
        marginLeft: 13,
        marginRight: 14,
        marginBottom: 20
    },
    textBlock: {
        marginLeft: 18,
        marginRight: 17,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.44,
        textAlign: "left",
        letterSpacing: 0.44,
        marginTop: 16,
        marginBottom: 9,
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.44,
        textAlign: "left",
        letterSpacing: 0.4,
        marginBottom: 12,
    },
});
