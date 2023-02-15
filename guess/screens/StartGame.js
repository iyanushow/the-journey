import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";

export default function StartGame() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				maxLength={2}
				keyboardType={"number-pad"}
			/>
			<View style={styles.btnContainer}>
				<PrimaryBtn onPress={() => console.log("reset")} className={styles.btn}>
					Reset
				</PrimaryBtn>

				<PrimaryBtn
					onPress={() => console.log("Confirm")}
					className={styles.btn}
				>
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
		backgroundColor: "#3b001d",
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
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
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
