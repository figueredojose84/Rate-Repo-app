import React from "react";
import Repositorios from "../data/Repositorios";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import StyleText from "./StyleText";
import theme from "../theme";

const parset = value => {
    return value >= 1000 
    ? `${Math.round(value/100)/10}k`
    : String(value);

}

const RepositoryStack = repo => {
    return (
     <View style= {{flexDirection: 'row', justifyContent:"space-around"}}>
        <View>
            <StyleText fontWeight="bold" align="center" >{parset(repo.number)}</StyleText>
            <StyleText fontWeight="bold" align="center" >followers</StyleText>
        </View>
        <View>
            <StyleText fontWeight="bold" align="center" >{parset(repo.review)}</StyleText>
            <StyleText fontWeight="bold" align="center" >review</StyleText>
        </View>
        <View>
            <StyleText fontWeight="bold" align="center" >{parset(repo.view)}</StyleText>
            <StyleText fontWeight="bold" align="center" >view</StyleText>
        </View>
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
             <StyleText style={styles.languaje}>{repo.lenguaje}</StyleText>
             <RepositoryStack {...repo}/>
        </View>
        )}
       />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,      
    },
    languaje: {
        padding: 10,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        
    },
}); 

export default RepoList;