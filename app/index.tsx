import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* 
 Используем только HomeScreen т.к. это главный экран и мы начинаем с него 
 На самом HomeScreen, etc..  TabNavigation
*/
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import EventScreen from './screens/EventScreen';

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function burger() {
  return (
    <View>

    </View>
  );
}

export default function MyStack() {
  return (
    <>
      {/* 
      <RootStack.Navigator>
      <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        </RootStack.Navigator> */}

      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Tab.Screen name="menu" component={burger} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
      </Tab.Navigator>
    </>

  );
};

/*

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';

// (...)

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({
                        focused,
                        color,
                        size,
                    }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (
                            route.name === 'Settings'
                        ) {
                            iconName = focused
                                ? 'ios-list'
                                : 'ios-list-outline';
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

*/