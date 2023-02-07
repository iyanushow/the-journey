import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [text, setText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function inputHandler(text) {
		setText(text);
	}

	function addGoalHandler() {
		setCourseGoals(prev => [...prev, text]);
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your course goal"
					style={styles.textInput}
					onChangeText={inputHandler}
				/>

				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals ....</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},

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
	goalsContainer: {
		flex: 4,
	},
});
