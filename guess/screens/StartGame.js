import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";
import { Colors } from "../utils/colors";

export default function StartGame({ onConfirmNumber }) {
	const [number, setNumber] = useState("");

	function resetHandler() {
		setNumber("");
	}

	function confirmHandler() {
		const chosenNumber = parseInt(number);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			return Alert.alert(
				"Invalid Number!",
				"Entered value has to be a number between 0 and 99",
				[
					{
						text: "Close",
						style: "cancel",
						onPress: resetHandler,
					},
				]
			);
		}

		onConfirmNumber(chosenNumber);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				maxLength={2}
				keyboardType={"number-pad"}
				value={number}
				onChangeText={number => setNumber(number)}
			/>
			<View style={styles.btnContainer}>
				<PrimaryBtn onPress={resetHandler} className={styles.btn}>
					Reset
				</PrimaryBtn>

				<PrimaryBtn onPress={confirmHandler} className={styles.btn}>
					Confirm
				</PrimaryBtn>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: Colors.primary["200"],
		elevation: 10,
		shadowColor: "black",
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
	},

	textInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.secondary["100"],
		borderBottomWidth: 2,
		color: Colors.secondary["100"],
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},

	btnContainer: {
		flexDirection: "row",
	},

	btn: {
		flex: 1,
	},
});
