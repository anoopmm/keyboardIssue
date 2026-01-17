import { StyleSheet, TextInput, View } from "react-native";
import { KeyboardAvoidingView, KeyboardProvider } from "react-native-keyboard-controller";
export default function App() {
    return (
        <KeyboardProvider>
            <KeyboardAvoidingView style={{ flex: 1, padding: 16 }} behavior="padding">
                <View style={{ flex: 1, gap: 10 }}>
                    <TextInput placeholder="Enter your name" style={styles.input} />
                    <TextInput placeholder="Enter your name" style={styles.input} />
                </View>
                <View style={{ backgroundColor: "gray", height: 60 }}>
                    <TextInput placeholder="Enter your name" style={styles.input} />
                </View>
            </KeyboardAvoidingView>
        </KeyboardProvider>
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
