import React from "react";
import {StyleSheet,TextInput } from "react-native";

const styles = StyleSheet.create({
    TextInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10,
     }
});

const StyleTextInput = ({ style= {},...props}) => {
    const inputStyle = {
        ...styles.TextInput,
        ...style,
    }
    return <TextInput style={inputStyle} {...props} />
}

export default StyleTextInput;