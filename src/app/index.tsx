// app/index.tsx
import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text className="font-Poppins_700Bold">Hello from index.tsx</Text>
      <Link href={"/welcome"} asChild>
        <Button title="Go Welomce" />
      </Link>
    </View>
  );
}

// if (!hasOnboarded) {
//   return <Redirect href="/welcome" />;
// }
// if (!token) {
//   return <Redirect href="/sign-in" />;
// }
// // both token and onboarded true:
// return <Redirect href={role === "requester" ? "/requester" : "/runner"} />;
