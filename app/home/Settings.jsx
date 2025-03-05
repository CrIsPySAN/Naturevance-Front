// app/home/Settings.jsx
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Kodchasan_400Regular, Kodchasan_700Bold } from "@expo-google-fonts/kodchasan";
// Importa useRouter de expo-router
import { useRouter } from "expo-router";

export default function SettingsScreen() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        Kodchasan_400Regular,
        Kodchasan_700Bold,
    });

    if (!fontsLoaded) {
        return null; // Espera a que las fuentes se carguen
    }

    // Manejo del cierre de sesión
    const handleLogout = () => {
        // Redirige a la pantalla de bienvenida ("/")
        router.replace("/");
    };

    return (
        <View style={styles.container}>
            {/* Sección superior (verde claro) */}
            <View style={styles.topSection}>
                <Text style={styles.title}>Perfil</Text>
            </View>

            {/* Avatar (imagen) con botón de editar, "flotando" entre la parte verde y la negra */}
            <View style={styles.avatarContainer}>
                <Image
                    source={require("../../assets/profile.png")}
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>

            {/* Sección inferior (negro) */}
            <View style={styles.bottomSection}>
                <Text style={styles.sectionTitle}>Información</Text>

                <TouchableOpacity style={styles.itemRow}>
                    <Text style={styles.itemText}>Información de contacto</Text>
                    <Ionicons name="chevron-forward" size={20} color="#dfecdb" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemRow}>
                    <Text style={styles.itemText}>Políticas</Text>
                    <Ionicons name="chevron-forward" size={20} color="#dfecdb" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemRow}>
                    <Text style={styles.itemText}>Redes Sociales</Text>
                    <Ionicons name="chevron-forward" size={20} color="#dfecdb" />
                </TouchableOpacity>

                {/* Botón Cerrar Sesión */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#091109", // El fondo principal es negro
    },
    topSection: {
        backgroundColor: "#c1d5b0",
        height: 140, // Altura suficiente para que el avatar "cruce" la frontera
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 45,
    },
    title: {
        fontSize: 40,
        color: "#fff",
        fontFamily: "Kodchasan_700Bold",
    },
    avatarContainer: {
        position: "absolute",
        top: 90,         // Ajusta según la altura de topSection
        left: "50%",
        transform: [{ translateX: -60 }],
        width: 120,
        height: 120,
        alignItems: "center",
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: "#2a4629",
        resizeMode: "cover",
    },
    editButton: {
        marginTop: 8,
        backgroundColor: "#2a4629",
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    editButtonText: {
        color: "#fff",
        fontFamily: "Kodchasan_400Regular",
    },
    bottomSection: {
        flex: 1,
        marginTop: 80, // Deja espacio para el avatar que "invade" la parte inferior
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        color: "#dfecdb",
        fontFamily: "Kodchasan_700Bold",
        marginBottom: 15,
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#4e8448",
    },
    itemText: {
        fontSize: 16,
        color: "#dfecdb",
        fontFamily: "Kodchasan_400Regular",
    },
    logoutButton: {
        marginTop: 30,
        backgroundColor: "#3b6938",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    logoutText: {
        color: "#dfecdb",
        fontSize: 16,
        fontFamily: "Kodchasan_700Bold",
    },
});
