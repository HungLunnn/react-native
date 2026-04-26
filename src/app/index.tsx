import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: "600"}}>
          Count: {count}
        </Text>
      <View>
        <Button color={"red"} title="Increase" onPress={() => setCount(count + 1)}/>
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
