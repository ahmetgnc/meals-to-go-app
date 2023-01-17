import React, { FC } from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import RestaurantsScreen from './src/features/restaurants';

export type Props = {}
const App: FC<Props> = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <RestaurantsScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },

    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: '#03C988',
    },
});

export default App;
