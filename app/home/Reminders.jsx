// app/home/Notifications.jsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Kodchasan_400Regular, Kodchasan_700Bold } from "@expo-google-fonts/kodchasan";

export default function NotificationsScreen() {
    // Carga de fuentes (opcional)
    const [fontsLoaded] = useFonts({
        Kodchasan_400Regular,
        Kodchasan_700Bold,
    });

    if (!fontsLoaded) {
        return null; // Espera a que las fuentes se carguen
    }

    return (
        <View style={styles.container}>
            {/* Sección superior (barra verde) */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Notificaciones</Text>
            </View>

            {/* Contenido principal con fondo oscuro */}
            <View style={styles.content}>
                <ScrollView>
                    {/* Notificación 1 */}
                    <View style={styles.notificationCard}>
                        <Ionicons name="notifications" size={24} color="#2a4629" />
                        <View style={styles.notificationTextContainer}>
                            <Text style={styles.notificationTitle}>Sacar la basura</Text>
                            <Text style={styles.notificationTime}>12:30</Text>
                            <Text style={styles.notificationStatus}>Prioridad</Text>
                        </View>
                    </View>

                    {/* Notificación 2 */}
                    <View style={styles.notificationCard}>
                        <Ionicons name="notifications" size={24} color="#2a4629" />
                        <View style={styles.notificationTextContainer}>
                            <Text style={styles.notificationTitle}>Cambiar la bolsa</Text>
                            <Text style={styles.notificationTime}>2:30</Text>
                            <Text style={styles.notificationStatus}>Pendiente</Text>
                        </View>
                    </View>

                    {/* Notificación 3 */}
                    <View style={styles.notificationCard}>
                        <Ionicons name="notifications" size={24} color="#2a4629" />
                        <View style={styles.notificationTextContainer}>
                            <Text style={styles.notificationTitle}>Limpiar contenedor</Text>
                            <Text style={styles.notificationTime}>8:30</Text>
                            <Text style={styles.notificationStatus}>Prioridad</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    /* Estructura general */
    container: {
        flex: 1,
        backgroundColor: "#091109", // Fondo oscuro para la parte inferior
    },

    /* Encabezado (verde) */
    header: {
        
        height: 100,
        justifyContent: "flex-end",
        paddingBottom: 15,
        alignItems: "center",
        // No flecha de regreso
    },
    headerTitle: {
        fontSize: 32,
        color: "#fff",
        fontFamily: "Kodchasan_700Bold",
    },

    /* Contenido principal */
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    /* Tarjeta de notificación */
    notificationCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#c1d5b0",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
    },
    notificationTextContainer: {
        marginLeft: 12,
    },
    notificationTitle: {
        fontSize: 16,
        color: "#2a4629",
        fontFamily: "Kodchasan_700Bold",
        marginBottom: 4,
    },
    notificationTime: {
        fontSize: 14,
        color: "#2a4629",
        fontFamily: "Kodchasan_400Regular",
    },
    notificationStatus: {
        fontSize: 14,
        color: "#2a4629",
        fontFamily: "Kodchasan_400Regular",
    },
});
