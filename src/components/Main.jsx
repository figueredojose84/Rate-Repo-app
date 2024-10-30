import react from 'react';
import {Text, View} from 'react-native';
import RepoList from './RepoList';
import Appbar from './Appbar';



const Main = () => {
    return (
        <View style={{flexGrow:1}}> 
            <Appbar/>      
            <RepoList />
        </View>
    )
}

export default Main;