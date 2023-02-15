import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryBtn({ children, onPress, className }) {
	return (
		<View style={[styles.btnOut, className]}>
			<Pressable
				style={({ pressed }) => [
					styles.btnContainer,
					pressed && Platform.OS === "ios" && styles.pressed,
				]}
				onPress={onPress}
				android_ripple={{ color: "#640233" }}
			>
				<Text style={styles.btnText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnOut: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},

	btnContainer: {
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	btnText: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
