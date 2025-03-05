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

export default function SignIn() {
    const router = useRouter();
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

    const handleSignIn = () => {
        if (email === "usuario@gmail.com" && password === "12345678") {
            setErrorMessage(null);
            router.replace("/");
        } else {
            setErrorMessage("Correo o contraseña incorrectos.");
        }
    };

    return (
        <Animatable.View animation="fadeIn" duration={2000} style={{ flex: 1 }}>
            <LinearGradient colors={["#0d0d0d", "#1a1f1a", "#2d3b2d"]} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }} style={styles.container}>
                <Animatable.Text animation="fadeInDown" duration={1500} style={styles.titleLogin}>
                    Iniciar Sesión
                </Animatable.Text>
                <Animatable.View animation="fadeInUp" duration={1500} delay={500} style={styles.inputContainerLogin}>
                    <Text style={styles.label}>Correo</Text>
                    <TextInput
                        placeholder="ejemplo@gmail.com"
                        placeholderTextColor="#A0A0A0"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={styles.inputLogin}
                    />
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        placeholder=""
                        placeholderTextColor="#A0A0A0"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.inputLogin}
                    />

                    {errorMessage && (
                        <Text style={styles.error}>{errorMessage}</Text>
                    )}

                    <TouchableOpacity
                        onPress={() => router.push("/home")}
                        style={styles.buttonFromLogin}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.registerLink}>
                        <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
                        <Text onPress={() => router.push("/auth/register")} style={styles.registerTextLink}>Regístrate aquí</Text>
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
    titleLogin: {
        fontSize: 32,
        fontFamily: "Kodchasan_700Bold",
        color: "#dfecdb",
        marginBottom: 30,
    },
    inputContainerLogin: {
        width: "100%",
    },
    label: {
        fontSize: 16,
        color: "#dfecdb",
        fontFamily: "Kodchasan_700Bold",
        marginBottom: 5,
    },
    inputLogin: {
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
    buttonFromLogin: {
        backgroundColor: "#3b6938",
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
    registerLink: {
        marginTop: 15,
        alignItems: "center",
    },
    registerText: {
        color: "#dfecdb",
        fontSize: 14,
        fontFamily: "Kodchasan_400Regular",
    },
    registerTextLink: {
        fontSize: 14,
        fontFamily: "Kodchasan_400Regular",
        color: "#699f62",
        textDecorationLine: "underline",
    },
});
