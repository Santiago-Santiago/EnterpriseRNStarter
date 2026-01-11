import { View, Text, Button } from "react-native";
import { AuthRepositoryImpl } from "../../../data/datasource/AuthRepositoryImpl";
import { LoginUseCase } from "../../../domain/usecases/LoginUseCase";
import { useAuthStore } from "../hooks/useAuthStore";

export function LoginScreen() {
    const setUser = useAuthStore((state) => state.setUser);

    const onLogin = async () => {
        //simulate Login
        const useCase = new LoginUseCase(new AuthRepositoryImpl());
        const user = await useCase.excute("test@santiago.com", "password123");
        setUser(user);
    }

    return (
        <View>
            <Text>Login</Text>
            <Button title="Login" onPress={onLogin} />
        </View>
    );
}