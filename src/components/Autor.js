import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const Autor = ({ item: { name, email, posts, id }, onOpen }) => {
    const getAvatarLetters = (str) => {
        var matches = str.match(/\b(\w)/g);
        var acronym = matches.slice(0, 2).join("");
        return acronym;
    };
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(id, name)}>
            <View style={styles.autor}>
                <View style={styles.avatarBlock}>
                    <Text style={styles.avatarText}>
                        {getAvatarLetters(name)}
                    </Text>
                    <View>
                        <View style={styles.textBlock}>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.name}
                            >
                                {name}
                            </Text>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.email}
                            >
                                {email}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.posts}>
                    <Text>{posts} posts</Text>
                    <View>
                        <Image
                            source={require("../../assets/icons/Vector.png")}
                            style={styles.arrow}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    autor: {
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16,
    },
    avatarBlock: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 16,
        marginBottom: 16,
    },
    avatarText: {
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0.1,
        width: 40,
        height: 40,
        borderRadius: 50,
        textAlign: "center",
        backgroundColor: "#6FCF97",
        lineHeight: 40,
    },
    textBlock: {
        marginLeft: 16,
    },
    name: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.44,
        textAlign: "left",
        letterSpacing: 0.44,
    },
    email: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0.44,
        textAlign: "left",
        letterSpacing: 0.4,
        color: "#382A2C",
        opacity: 0.54,
        width: 180,
    },
    arrow: {
        height: 7.409999847412109,
        width: 4,
        marginLeft: 20,
    },
    posts: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: 99,
    },
});
