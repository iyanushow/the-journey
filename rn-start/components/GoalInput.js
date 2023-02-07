import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
	const [text, setText] = useState("");

	function inputHandler(text) {
		setText(text);
	}

	function addGoalHandler() {
		props.onAddGoal?.(text);
		setText("");
	}

	return (
		<Modal animationType="slide" visible={props.isOpen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your course goal"
					style={styles.textInput}
					onChangeText={inputHandler}
					value={text}
				/>

				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},

	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
		borderRadius: 6,
	},
});

export default GoalInput;
