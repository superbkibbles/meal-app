import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './src/components/Screen';
import { Searchbar, TextInput } from 'react-native-paper';

const spacing = 16;

export default function App() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);
    return (
        <Screen>
            <StatusBar style="dark" />
            <View style={styles.search}>
                <Searchbar onChangeText={onChangeSearch} placeholder="search" />
            </View>
            <View style={styles.main}>
                <Text>out react</Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    search: {
        padding: spacing
    },
    main: {
        backgroundColor: 'blue',
        flex: 1,
        padding: spacing
    }
});
