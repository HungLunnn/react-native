import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";


interface ITodo {
  id: number;
  name: string;
}
export default function Index() {

  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInterger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo) return;
    setListTodo([...listTodo,
    {
      id: randomInterger(2, 2000000),
      name: todo
    }]);
    setTodo("")
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Todo App</Text>

      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button
          title="Add Todo"
          onPress={handleAddTodo}

        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={(item => item.id + "")}
          renderItem={({ item }) => {
            return (
              <Text style={styles.todoItem}>
                {item.name}
              </Text>
            )
          }}
        />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    textAlign: "center",
    fontSize: 35,
  },
  body: {
    padding: 15
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    marginHorizontal: 15,
    margin: 10,
  },
  todoItem: {
    padding: 10,
    fontSize: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: "dashed"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
});
