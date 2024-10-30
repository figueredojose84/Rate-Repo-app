import React from "react";
import Repositorios from "../data/Repositorios";
import { FlatList } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
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
const RepoItemHeader = (props) => {
    return (
    <View style= {{flexDirection: 'row', paddingBottom:10}}>
        <View style={{paddingRight:10}}>
            <Image source={require('../../assets/reactnative-inner.svg')} style={styles.Image} />
        </View>
        <View style={{flex:1}}>
            <StyleText fontWeight="bold" color="primary">{props.id}</StyleText>
            <StyleText>{props.description}</StyleText>
            <StyleText  style={styles.languaje}>{props.lenguaje}</StyleText>
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
            <RepoItemHeader {...repo}/>
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
        borderRadius: 15,
        overflow: 'hidden',
        
    },
    Image: {
        width: 48,
        height: 48,
    }
}); 

export default RepoList;