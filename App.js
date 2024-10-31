import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SIgnIn from './src/components/SIgnIn';
import Main from './src/components/Main';
import PefilesUsuarios from './src/components/PerfilesUsuarios';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SIgnIn" component={SIgnIn} />
        <Stack.Screen name="PefilesUsuarios" component={PefilesUsuarios} />
      </Stack.Navigator>
    </NavigationContainer>
  )
 
}

