import React from "react";
import {View, StyleSheet} from "react-native";
import StyleText from "./StyleText";
import Constansts from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constansts.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.TextPrimary,
    },
});

const AppBar = () => {
    return (
    <View>
        <View style={styles.container}>
            <StyleText fontWeight="bold" style={styles.text}>Repositories</StyleText>
        </View>
    </View>
    );
}

export default AppBar;