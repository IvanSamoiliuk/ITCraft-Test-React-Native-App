import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
} from "react-native";
import { dHeight, dWidth, MAIN_COLOR } from "../utils/Constants";
import { ApiService } from "../services/apiService";
import { ErrorIndicator } from "../components/ErrorIndicator";
import { SearchBar } from "../components/SearchBar";
import { Spinner } from "../components/Spinner";
import { Autor } from "../components/Autor";

export const AutorsScreen = ({ navigation }) => {
    const [autors, setAutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const apiService = new ApiService();
        apiService
            .getAllAutors()
            .then((autorsList) => {
                apiService.getPosts().then((postsList) => {
                    const newAutors = autorsList.map((autor) => {
                        autor.posts = postsList.filter(
                            (post) => post.userId === autor.id
                        ).length;
                        return autor;
                    });
                    setAutors(newAutors);
                    setError(false);
                    setLoading(false);
                });
            })
            .catch((e) => setError(true));
    }, []);

    const onAutorHandler = (autorId, name) => {
        navigation.navigate("Posts", { autorId: autorId, autorName: name });
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
                item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                item.email.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
        return searchItemList;
    };

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorIndicator />;
    }

    const hasAutors = !(loading || error);

    const visibleAutors = search(autors, searchQuery);

    const Content = () => (
        <View>
            <SafeAreaView style={styles.scroll}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={visibleAutors}
                    renderItem={({ item }) => (
                        <Autor item={item} onOpen={onAutorHandler} />
                    )}
                />
            </SafeAreaView>
        </View>
    );

    const searchBar = (
        <SearchBar
            onSearchQuery={(value) => onChangeTextInput(value)}
            searchQuery={searchQuery}
        />
    );

    const content = hasAutors ? <Content items={autors} /> : null;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={MAIN_COLOR} />
            {searchBar}
            {content}
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
