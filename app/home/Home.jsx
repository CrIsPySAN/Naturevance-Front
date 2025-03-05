import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, Feather } from "@expo/vector-icons";
import CalendarStrip from "react-native-calendar-strip";
import { useFonts, Kodchasan_400Regular, Kodchasan_700Bold } from "@expo-google-fonts/kodchasan";

export default function Dashboard() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        Kodchasan_400Regular,
        Kodchasan_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#6b8f71" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={{ height: 50 }} />

            {/* Encabezado */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Hi! Natanael</Text>
                <Image source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} style={styles.avatar} />
            </View>

            {/* Sección de Contenedores */}
            <Text style={styles.sectionTitle}>Contenedores</Text>
            <View style={styles.containersSection}>
                <View style={styles.containerCard}>
                    <FontAwesome name="trash" size={50} color="#0C120C" />
                    <Text style={styles.cardTitle}>Información</Text>
                </View>
                <View style={styles.containerCard}>
                    <Text style={styles.cardTitle}>Capacidad</Text>
                    <Text style={styles.cardName}>Contenedor 1</Text>
                    <View style={styles.progressBar} />
                    <Text style={styles.cardName}>Contenedor 2</Text>
                    <View style={styles.progressBar} />
                </View>
            </View>

            {/* Sección Semanal con Calendario */}
            <Text style={styles.sectionTitle}>Semana</Text>
            <CalendarStrip
                style={styles.calendarStrip}
                calendarHeaderStyle={{ color: "#E8F1E6" }}
                dateNumberStyle={{ color: "#E8F1E6" }}
                dateNameStyle={{ color: "#E8F1E6" }}
                highlightDateNumberStyle={{ color: "#fff" }}
                highlightDateNameStyle={{ color: "#fff" }}
                selectedDate={new Date()}
            />

            {/* Sección de Recordatorios */}
            <Text style={styles.sectionTitle}>Recordatorios</Text>
            <View style={styles.remindersSection}>
                <View style={styles.reminderCard}>
                    <Text style={styles.reminderTitle}>Limpiar</Text>
                    <Text>Limpiar el contenedor</Text>
                    <Text style={styles.reminderDate}>3-Jul-2025</Text>
                </View>
                <View style={styles.reminderCard}>
                    <Text style={styles.reminderTitle}>Cambiar</Text>
                    <Text>Cambiar la bolsa de basura</Text>
                    <Text style={styles.reminderDate}>5-Jul-2025</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C120C",
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0C120C",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    greeting: {
        fontSize: 32,
        color: "#E8F1E6",
        fontFamily: "Kodchasan_700Bold",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#6B8F71",
    },
    sectionTitle: {
        color: "#E8F1E6",
        fontSize: 20,
        fontFamily: "Kodchasan_700Bold",
        marginTop: 10,
    },
    containersSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    containerCard: {
        backgroundColor: "#6B8F71",
        padding: 20,
        borderRadius: 15,
        width: "48%",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 18,
        color: "#0C120C",
        fontFamily: "Kodchasan_700Bold",
    },
    cardName: {
        fontSize: 14,
        color: "#0C120C",
        fontFamily: "Kodchasan_400Regular",
        marginTop: 5,
    },
    progressBar: {
        width: "100%",
        height: 6,
        backgroundColor: "#263",
        marginTop: 5,
        borderRadius: 5,
    },
    calendarStrip: {
        height: 150,
        backgroundColor: "#6B8F71",
        borderRadius: 10,
        marginTop: 10,
    },
    remindersSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    reminderCard: {
        backgroundColor: "#6B8F71",
        padding: 15,
        borderRadius: 15,
        width: "48%",
    },
    reminderTitle: {
        fontSize: 16,
        fontFamily: "Kodchasan_700  Bold",
        color: "#0C120C",
        marginBottom: 5,
    },
    reminderDate: {
        fontSize: 14,
        fontFamily: "Kodchasan_400Regular",
        color: "#0C120C",
        marginTop: 5,
    },
});