import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, onDelete, id }) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				// onPress={onDelete.bind(this, id)}
				style={({ pressed }) => pressed && styles.pressed}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
		padding: 8,
	},
	pressed: {
		opacity: 0.5,
	},
});
