import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {Routes, Strings} from './constants';
import {Provider} from 'react-redux';
import {AnswerScreen, HomeScreen} from './module';
import {store} from './redux';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{title: Strings.question}}
            name={Routes.home}
            component={HomeScreen}
          />
          <Stack.Screen name={Routes.answer} component={AnswerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
