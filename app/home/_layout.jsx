// app/home/_layout.jsx
import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,        // Oculta el header en cada tab
                tabBarShowLabel: false,    // Oculta el texto debajo de los íconos
                tabBarActiveTintColor: "#2a4629",
                tabBarInactiveTintColor: "#4e8448",
                tabBarStyle: {
                    flexDirection: "row",
                    justifyContent: "space-around",
                    backgroundColor: "#c1d5b0",  // Color de fondo
                    paddingVertical: 10,
                    borderTopWidth: 0,          // Oculta línea superior si no la quieres
                },
            }}
        >
            {/* Pestaña principal (Home) */}
            <Tabs.Screen
                name="Home"
                options={{
                    tabBarLabel: () => null,    // Oculta el texto
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="home" size={size} color={color} />
                            {focused && (
                                <View
                                    style={{
                                        width: size * 0.6,    // Ajusta el ancho de la línea
                                        height: 2,
                                        backgroundColor: color,
                                        marginTop: 4,
                                    }}
                                />
                            )}
                        </View>
                    ),
                }}
            />

            {/* Pestaña de Recordatorios (Reminders) */}
            <Tabs.Screen
                name="Reminders"
                options={{
                    tabBarLabel: () => null,    // Oculta el texto
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="notifications" size={size} color={color} />
                            {focused && (
                                <View
                                    style={{
                                        width: size * 0.6,
                                        height: 2,
                                        backgroundColor: color,
                                        marginTop: 4,
                                    }}
                                />
                            )}
                        </View>
                    ),
                }}
            />

            {/* Pestaña de Ajustes (Settings) */}
            <Tabs.Screen
                name="Settings"
                options={{
                    tabBarLabel: () => null,    // Oculta el texto
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="settings" size={size} color={color} />
                            {focused && (
                                <View
                                    style={{
                                        width: size * 0.6,
                                        height: 2,
                                        backgroundColor: color,
                                        marginTop: 4,
                                    }}
                                />
                            )}
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
