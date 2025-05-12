//components/TodoList.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // State Hooks
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true },
    { id: 2, text: "Meeting At School", completed: false },
  ]);
  const [text, setText] = useState("");
  // Function to Add Task
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText("");
  }
  // Function to Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  // Function to Toggle Task completion
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="New Task"
          style={styles.input}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <View style={styles.taskContainer}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskContainer: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
  },
});

export default TodoList;
