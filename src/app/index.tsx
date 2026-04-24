import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>hunglunn</Text>
      </View>
      <Text style={styles.title1}>src/app/index.tsx</Text>
      <Text>OK nhaaaaaaa</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title1: {
    color: "red", fontSize: 50,
    borderWidth: 1,
    },
    header: {
      fontSize: 30,
      fontWeight: 600
    }
});
