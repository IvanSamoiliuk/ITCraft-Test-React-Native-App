import React from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";

export const SearchBar = ({ searchQuery, onSearchQuery }) => {
    return (
        <View style={styles.searchBlock}>
            <TextInput
                style={styles.textInput}
                placeholder="Search"
                value={searchQuery}
                onChangeText={(text) => onSearchQuery(text)}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Image
                source={require("../../assets/icons/SearchQuery.png")}
                style={styles.icon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBlock: {
        position: "relative",
        marginHorizontal: 16,
    },
    textInput: {
        backgroundColor: "#efeeee",
        height: 40,
        borderRadius: 4,
        padding: 10,
        marginBottom: 24,
        paddingLeft: 40, 
    },
    icon: {
        width: 17.5,
        height: 17.5,
        position: "absolute",
        left: 11,
        top: 11,
    },
});
