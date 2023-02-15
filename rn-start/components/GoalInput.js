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
				<View style={styles.btnContainer}>
					<View style={styles.btn}>
						<Button title="Add Goal" onPress={addGoalHandler} />
					</View>
					<View style={styles.btn}>
						<Button title="Cancel" onPress={props.closeModal} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,
		padding: 16,
	},

	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "100%",
		padding: 8,
		borderRadius: 6,
	},

	btnContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	btn: {
		width: "30%",
		marginHorizontal: 8,
	},
});

export default GoalInput;
