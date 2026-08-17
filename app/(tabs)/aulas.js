import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const lessons = [
    'Estudar Figuras de linguagem',
    'Treinar Razão, proporção, regra de três, porcentagem e escalas',
    'Treinar interpretação de textos em Ingles',
    'Aprofundar seus conhecimentos em compreensão de processos sociais históricos',
];

export default function LessonsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sugestão Para Estudo ENEM</Text>
        <Text style={styles.description}>
          Esta aba serve para dar dicas de conteúdos mais importantes para se sair bem.
        </Text>

        <View style={styles.list}>
          {lessons.map((lesson, index) => (
            <View key={lesson} style={styles.listItem}>
              <Text style={styles.badge}>{index + 1}</Text>
              <Text style={styles.listText}>{lesson}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#9cdac0",
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#3d2c00",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#5f4b1b",
  },
  list: {
    gap: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#6ebd9ed5",
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    textAlign: "center",
    lineHeight: 32,
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    backgroundColor: "#59ecd4ad",
  },
  listText: {
    flex: 1,
    fontSize: 15,
    color: "#3d2c00",
  },
});
