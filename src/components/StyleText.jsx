import React from "react";
import {Text, View, StyleSheet} from "react-native";
import theme from "../theme";


const styles =  StyleSheet.create({
    primary: {
        color: theme.colors.primary,
    },
    secundary: {
        color: theme.colors.secudary,
    },
    Text: {
        color: theme.colors.Text,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,   
        fontWeight: theme.fontWeights.normal
      
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    blue: {
        color: "blue",
    },
    big: {
        fontSize: theme.fontSizes.subheading,
    },
    TextAlign: {
        textAlign: 'center',
    },
})

export default function StyleText({align,children, color, fontSize, fontWeight, style,  ...restprops }) {
    const textStyles = [
        styles.Text,
        align === "center" && styles.TextAlign,
        color === "primary" && styles.primary,
        color === "secundary" && styles.secundary,
        fontSize === "big" && styles.big,
        fontWeight === "bold" && styles.bold,

    ]

        
    return (
        <Text style={textStyles} {...restprops}>
            {children}
        </Text>
    )
}
    