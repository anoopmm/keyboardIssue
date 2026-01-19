import { StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
export default function App() {
    const { height: screenHeight, width } = useWindowDimensions();
    console.log(111, screenHeight, width);
    return (
        <View>
            <View style={{ flex: 1, padding: 16 }}>
                <View style={{ flex: 1, gap: 10 }}>
                    <TextInput placeholder="Enter your name" style={styles.input} />
                    <TextInput placeholder="Enter your name" style={styles.input} />
                </View>
                <View style={{ backgroundColor: "gray", height: 60 }}>
                    <TextInput placeholder="Enter your name" style={styles.input} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        borderRadius: 5,
    },
});
