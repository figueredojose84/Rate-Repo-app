import React from "react";
import Repositorios from "../data/Repositorios";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import StyleText from "./StyleText";

const parset = value => {
    return value >= 1000 
    ? `${Math.round(value/100)/10}k`
    : String(value);

}

const RepositoryStack = repo => {
    return (
     <View style= {{flexDirection: 'row', justifyContent:"space-around"}}>
        <StyleText fontWeight="bold" align="center" >{parset(repo.number)}</StyleText>
        <StyleText fontWeight="bold" align="center" >{repo.url}</StyleText>
    </View>
    )
}

const RepoList = () => {
    return (
        <FlatList
        data={Repositorios}
        ItemSeparatorComponent = {() => <View style={{height: 1, backgroundColor: 'black'}} />}
        renderItem={({item: repo}) => (
            <View key={repo.id} style={styles.container}>
            <StyleText fontWeight="bold" color="primary">{repo.id}</StyleText>
            <StyleText>{repo.description}</StyleText>
            <RepositoryStack {...repo}/>
        </View>
        )}
       />
    )
}

const styles = StyleSheet.create({
    container: {
       padding: 20,
       paddingBottom: 10,
       paddingTop: 10,
    },
}); 

export default RepoList;