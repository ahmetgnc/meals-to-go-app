import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {RestaurantsScreen} from './src/features/restaurants/screens';

export type Props = {};

const App: FC<Props> = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ThemeProvider theme={theme}>
                <StatusBar />
                <RestaurantsScreen />
            </ThemeProvider>
        </SafeAreaView>
    );
};

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
