import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, View } from "react-native";
import StartGame from "./screens/StartGame";

export default function App() {
	return (
		<LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.root}>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.root}
				imageStyle={styles.imageBg}
			>
				<StartGame />
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
