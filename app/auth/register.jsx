import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Kodchasan_400Regular, Kodchasan_700Bold } from "@expo-google-fonts/kodchasan";

export default function Register() {
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [fontsLoaded] = useFonts({
        Kodchasan_400Regular,
        Kodchasan_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleRegister = () => {
        if (!userName || !email || !password) {
            setErrorMessage("Todos los campos son obligatorios.");
            return;
        }
        setErrorMessage(null);
        router.replace("/");
    };

    return (
        <Animatable.View animation="fadeIn" duration={2000} style={{ flex: 1 }}>
            <LinearGradient colors={["#0d0d0d", "#1a1f1a", "#2d3b2d"]} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }} style={styles.container}>
                <Animatable.Text animation="fadeInDown" duration={1500} style={styles.titleRegister}>
                    Registrarse
                </Animatable.Text>
                <Animatable.View animation="fadeInUp" duration={1500} delay={500} style={styles.inputContainerRegister}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        placeholder="Ingrese su nombre de usuario"
                        placeholderTextColor="#A0A0A0"
                        value={userName}
                        onChangeText={setUserName}
                        autoCapitalize="none"
                        style={styles.inputRegister}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="ejemplo@gmail.com"
                        placeholderTextColor="#A0A0A0"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={styles.inputRegister}
                    />
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        placeholder="Ingrese su contraseña"
                        placeholderTextColor="#A0A0A0"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.inputRegister}
                    />
                    {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
                    <TouchableOpacity onPress={handleRegister} style={styles.buttonFromRegister}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginLink}>
                        <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
                        <Text onPress={() => router.push("/auth/login")} style={styles.loginTextLink}>Inicia sesión aquí</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </LinearGradient>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    titleRegister: {
        fontSize: 32,
        fontFamily: "Kodchasan_700Bold",
        color: "#dfecdb",
        marginBottom: 30,
    },
    inputContainerRegister: {
        width: "100%",
    },
    label: {
        fontSize: 16,
        color: "#dfecdb",
        fontFamily: "Kodchasan_700Bold",
        marginBottom: 5,
    },
    inputRegister: {
        height: 50,
        backgroundColor: "#f5f9f4",
        color: "#091109",
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontFamily: "Kodchasan_400Regular",
    },
    error: {
        color: "#FF4C4C",
        marginBottom: 15,
        textAlign: "center",
        fontFamily: "Kodchasan_400Regular",
    },
    buttonFromRegister: {
        backgroundColor: "#699f62",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#dfecdb",
        fontSize: 16,
        fontFamily: "Kodchasan_700Bold",
    },
    loginLink: {
        marginTop: 15,
        alignItems: "center",
    },
    loginText: {
        color: "#dfecdb",
        fontSize: 14,
        fontFamily: "Kodchasan_400Regular",
    },
    loginTextLink: {
        fontSize: 14,
        fontFamily: "Kodchasan_400Regular",
        color: "#699f62",
        textDecorationLine: "underline",
    },
});