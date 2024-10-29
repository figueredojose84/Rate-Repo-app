import react from 'react';
import Constants from 'expo-constants';
import {Text, View} from 'react-native';
import RepoList from './RepoList';





const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
            <RepoList />
        </View>
    )
}

export default Main;