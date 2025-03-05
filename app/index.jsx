import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { useRouter } from "expo-router";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import {
    useFonts,
    Kodchasan_400Regular,
    Kodchasan_700Bold,
} from "@expo-google-fonts/kodchasan";

export default function WelcomeScreen() {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Kodchasan_400Regular,
        Kodchasan_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Animatable.View animation="fadeIn" duration={2000} style={{ flex: 1 }}>
            <LinearGradient colors={["#090909", "#1a2b1a"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.containerWelcome}>
                <Animatable.Text animation="fadeInDown" duration={1500} style={styles.titleWelcome}>
                    NATUREVANCE
                </Animatable.Text>

                <Animatable.View animation="fadeInDown" duration={1500} delay={500} style={styles.logoContainer}>
                    <Image source={require("../assets/logo.png")} style={styles.logoImage} />
                </Animatable.View>

                <Animatable.Text animation="fadeInDown" duration={1500} delay={1000} style={styles.subtitleWelcome}>
                    Gestiona tu basura, cuida el planeta.
                </Animatable.Text>

                <Animatable.View animation="fadeInUp" duration={1500} delay={1500}>
                    <TouchableOpacity style={[styles.button, styles.buttonLogin]} onPress={() => router.push("/auth/login")}>                    
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" duration={1500} delay={1800}>
                    <TouchableOpacity style={[styles.button, styles.buttonRegister]} onPress={() => router.push("/auth/register")}>                    
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </LinearGradient>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    containerWelcome: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    titleWelcome: {
        fontSize: 36,
        fontFamily: "Kodchasan_700Bold",
        color: "#f5f9f4",
        marginBottom: 20,
    },
    logoContainer: {
        width: 140,
        height: 140,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    logoImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    subtitleWelcome: {
        fontSize: 18,
        fontFamily: "Kodchasan_400Regular",
        color: "#f5f9f4",
        textAlign: "center",
        marginBottom: 30,
    },
    button: {
        width: 250,
        paddingVertical: 14,
        borderRadius: 16,
        marginBottom: 15,
        borderWidth: 1,
        alignItems: "center",
    },
    buttonLogin: {
        backgroundColor: "#3b6938",
        borderColor: "#3b6938",
    },
    buttonRegister: {
        backgroundColor: "#699f62",
        borderColor: "#699f62",
    },
    buttonText: {
        color: "#f5f9f4",
        fontSize: 16,
        fontFamily: "Kodchasan_700Bold",
    },
});