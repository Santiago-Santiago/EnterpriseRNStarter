import { NewAppScreen } from '@react-native/new-app-screen';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppScreen() {
    const safeAreaInsets = useSafeAreaInsets();
    return (
        <NewAppScreen
            templateFileName="App.tsx"
            safeAreaInsets={safeAreaInsets}
        />
        // <View style={styles.container}>
        //     <Text>Enterprise RN Starter</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
