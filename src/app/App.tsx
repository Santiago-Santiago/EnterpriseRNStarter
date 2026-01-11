import React from 'react';
import { AuthProvider } from './providers/AuthProvider';
import { RootNavigator } from './navigation/RootNavigator';


const App = () => (
    <AuthProvider>
        <RootNavigator />
    </AuthProvider>
);

export default App;
