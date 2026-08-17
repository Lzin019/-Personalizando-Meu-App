import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"

export default function Sobre() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{
                    uri: 'https://scontent.cdninstagram.com/v/t51.82787-19/768619838_18101185202352979_337373834154001846_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=rtk2JAHhFmMQ7kNvwE6b7yF&_nc_oc=Adr8vwgoe1hlZmHCl0j15RY5Hqc_IfFugMca7e-WQ7F-bJn0EUEnksOhL1hLCY4HJ30&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=wews78qTivJT3v3kUsXC8Q&_nc_ss=7b689&oh=00_AQG_7dNBEGyuaMynGgqkQjO4wwmeSeOnzpceFk5wxAbNaA&oe=6A891FEC',
                }}
                style={styles.image}
            />

            <View style={styles.card}>
                <Text style={styles.cardTitle}> 💻 Sobre Mim</Text>
                <Text style={styles.cardText}>Sou um aluno do 3° do médio, um garoto apaixonado por jogos, animes e musica, adoro passar meu tempo livre jogando com amigos ou saindo com minha namorada, caso queira saber mais sobre mim ou só bater um papo, pode entrar em contato no botão abaixo.</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}> 🚀 Objetivos</Text>
                <Text style={styles.cardText}>Aprimorar minhas habilidades em React.</Text>
            </View>

            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.primaryButton} onPress={() => {}}>
                    <Text style={styles.primaryButtonText}>Entrar em Contato</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.secondaryButton} onPress={() => {}}>
                    <Text style={styles.secondaryButtonText}>Ver Projetos </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
 }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#439175b7',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#76d6ae',
        marginBottom: 16,
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#5fcc9f',
    },
    subtitle: {
        fontSize: 14,
        color: '#4faa24',
        marginTop: 4,
        textAlign: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: '#51df91dc',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f792b',
        marginBottom: 8,
    },
    cardText: {
        fontSize: 14,
        color: '#406d51',
        lineHeight: 20,
    },
    buttonGroup: {
        width: '100%',
        marginTop: 8,
    },
    primaryButton: {
        backgroundColor: '#1b7a53',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 12,
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#0da163',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#4c775b',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
