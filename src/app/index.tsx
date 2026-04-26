import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<String>("");
  const [age, setAge] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>Name: {name}</Text>
        <TextInput
          multiline
          onChangeText={(value) => setName(value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15
          }} />
      </View>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>Age: {age}</Text>
        <TextInput
          onChangeText={(value) => setAge(+value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15
          }} />
      </View>

      <View>
      <Text style={{ fontSize: 30, fontWeight: "600" }}>
          Count: {count}
        </Text>
        <Button color={"red"} title="Increase" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
