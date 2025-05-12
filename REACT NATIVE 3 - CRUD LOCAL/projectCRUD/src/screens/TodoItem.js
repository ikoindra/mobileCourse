import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8f8f8",
    padding: 12,
    marginBottom: 8,
    borderRadius: 6,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  todoText: {
    fontSize: 16,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginLeft: 4,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
  },
  completeButton: {
    backgroundColor: "#f1c40f",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  return (
    <View style={styles.todoItem}>
      <View style={styles.textContainer}>
        <Text style={[styles.todoText, task.completed && styles.completedText]}>
          {task.text}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.deleteButton]}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.completeButton]}
        onPress={() => toggleCompleted(task.id)}
      >
        <Text style={styles.buttonText}>
          {task.completed ? "Undo" : "Done"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
