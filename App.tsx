import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from './screens/main';
import DetailScreen from './screens/detail';
import { Provider } from "react-redux";

import rootSaga from './redux/sagas/contacts';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from "./redux/reducers/contacts";
import styles from './Styles';

import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

const AppNavigator = createStackNavigator({
      Main: MainScreen,
      Detail: DetailScreen
    },{
      initialRouteName: "Main"
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
      <View style={styles.container}>
        <AppContainer/>
      </View>
        </Provider>
    );
  }
}