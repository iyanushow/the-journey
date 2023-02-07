import { useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	function addGoalHandler(text) {
		setCourseGoals(prev => [...prev, text]);
	}

	function deleteItem(goal) {
		setCourseGoals(prevGoals =>
			prevGoals.filter(currGoal => currGoal !== goal)
		);
	}

	return (
		<View style={styles.container}>
			<Button
				title="Add new Goal"
				color="#5e0acc"
				onPress={() => setIsOpen(true)}
			/>
			<GoalInput isOpen={isOpen} onAddGoal={addGoalHandler} />

			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={({ item }) => (
						<GoalItem text={item} onDelete={deleteItem} id={item} />
					)}
				/>
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

	goalsContainer: {
		flex: 5,
	},
});
