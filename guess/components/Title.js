import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../utils/colors";

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.secondary["100"],
		textAlign: "center",
		borderWidth: 2,
		borderColor: Colors.secondary["100"],
		padding: 12,
	},
});
