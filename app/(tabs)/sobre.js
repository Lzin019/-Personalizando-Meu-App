import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"

export default function Sobre() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{
                    uri: 'https://instagram.fcgh1-1.fna.fbcdn.net/v/t51.82787-19/783707428_18102712670352979_6357914631535095060_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fcgh1-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2gFtuyIclR0Tn4KcZVqYjtwGDWaoDCQrCBKJ4XuFgJNuEGoqKZoyM3sEX7mut7o59Pg&_nc_ohc=S06lIij8FYwQ7kNvwEl7boo&_nc_gid=AchIAXyn17Aa-PtNjdX7lA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQEP_UA_1gfp2zA30Per474yeaQZ5nJu8x5tM_IM9Cr7wA&oe=6A92392E&_nc_sid=7a9f4b',
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
