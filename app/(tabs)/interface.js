import { View, Text, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao app!</Text>
            <Text style={styles.subtitle}>Sua primeira interface em React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6f7e6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize:25,
        fontWeight: 'bold',
        color: '#0da181',
    },
    subtitle: {
        fontSize: 15,
        color: '#67c0b4',
        marginTop: 8,
    },
});
