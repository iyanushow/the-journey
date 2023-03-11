import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Game from "./screens/Game";
import StartGame from "./screens/StartGame";
import { Colors } from "./utils/colors";

export default function App() {
	const [userNumber, setUserNumber] = useState();

	return (
		<LinearGradient
			colors={[Colors.primary["300"], Colors.secondary["100"]]}
			style={styles.root}
		>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.root}
				imageStyle={styles.imageBg}
			>
				<SafeAreaView style={styles.root}>
					{userNumber ? (
						<Game />
					) : (
						<StartGame onConfirmNumber={number => setUserNumber(number)} />
					)}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	imageBg: {
		opacity: 0.15,
	},
});
