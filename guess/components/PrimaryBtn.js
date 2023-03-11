import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function PrimaryBtn({ children, onPress, className }) {
	return (
		<View style={[styles.btnOut, className]}>
			<Pressable
				style={({ pressed }) => [
					styles.btnContainer,
					pressed && Platform.OS === "ios" && styles.pressed,
				]}
				onPress={onPress}
				android_ripple={{ color: Colors.primary["400"] }}
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
		backgroundColor: Colors.primary["500"],
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
