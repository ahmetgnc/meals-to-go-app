import React from 'react';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function App(): JSX.Element {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>First Commmit</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default App;
