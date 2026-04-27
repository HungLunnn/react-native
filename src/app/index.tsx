import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [students, setStudents] = useState([
    { id: 1, name: "Eric", age: 28 },
    { id: 2, name: "Rock", age: 29 },
    { id: 3, name: "Tracsh", age: 30 },
    { id: 4, name: "Rtup", age: 22 },
    { id: 5, name: "GKW2", age: 11 },
    { id: 6, name: "2131", age: 11 },
    { id: 7, name: "GKwdfwdW2", age: 11 },
  ])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Hello world !</Text>
      <FlatList 
      data={students}
      keyExtractor={item => item.id + ""}
      renderItem={({item}) =>  {
        return (
          <View style={{
            padding: 30,
            backgroundColor: "pink",
            marginBottom: 30
          }}>
            <Text>{item.name}</Text>
          </View>
        )
      }}
      >
        

      </FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
});
