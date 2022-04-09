import React, { PropsWithChildren } from 'react';
import { StyleSheet, SafeAreaView, View, ViewStyle } from 'react-native';
import Constants from 'expo-constants';

interface Props {
    children: PropsWithChildren<any>;
    style?: ViewStyle;
}

const Screen: React.FC<Props> = ({ children, style }: Props) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    view: { flex: 1 }
});

export default Screen;
