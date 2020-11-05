import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import { ErrorIndicator } from "../components/ErrorIndicator";
import { Post } from "../components/Post";
import { SearchBar } from "../components/SearchBar";
import { Spinner } from "../components/Spinner";
import { ApiService } from "../services/apiService";
import { dHeight } from "../utils/Constants";

export const PostsScreen = ({ navigation, route }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const { autorId, autorName } = route.params;
        navigation.setOptions({ title: `${autorName}'s Posts` });
        const apiService = new ApiService();

        apiService.getPosts().then((postsList) => {
            const autorPosts = postsList.filter(
                (post) => post.userId === autorId
            );
            setPosts(autorPosts);
            setError(false);
            setLoading(false);
        });
    }, []);

    const renderItem = ({ item }) => {
        return <Post item={item} />;
    };

    const onChangeTextInput = (value) => {
        setSearchQuery(value);
    };

    const search = (itemList, query) => {
        if (query.length === 0) {
            return itemList;
        }

        const searchItemList = itemList.filter(
            (item) =>
                item.title.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                item.body.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
        return searchItemList;
    };

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    const visiblePosts = search(posts, searchQuery);

    return (
        <View style={styles.container}>
            <SearchBar
                searchQuery={searchQuery}
                onSearchQuery={(text) => onChangeTextInput(text)}
            />
            <SafeAreaView style={styles.scroll}>
                <FlatList
                    keyExtractor={(post) => post.id.toString()}
                    data={visiblePosts}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    scroll: {
        height: dHeight * 0.8,
    },
});
