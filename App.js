import { StyleSheet, View } from 'react-native';
import Home from './screens/Home/Home';
import { Provider } from 'react-redux';

import store from './store';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
      <Provider store={store}>
        <StackNavigator></StackNavigator>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
