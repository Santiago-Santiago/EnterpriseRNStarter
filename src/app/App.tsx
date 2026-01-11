import { NewAppScreen } from '@react-native/new-app-screen';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationProvider } from './providers/NavigationProvider';

export default function AppScreen() {
    const safeAreaInsets = useSafeAreaInsets();
    return (
        <NavigationProvider>
            <NewAppScreen
                templateFileName="App.tsx"
                safeAreaInsets={safeAreaInsets}
            />
        </NavigationProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
