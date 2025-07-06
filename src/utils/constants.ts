// import { Text, View, Pressable } from "react-native";
// import { useTheme } from "@react-navigation/native";
// import { useColorSchemeContext } from "@/contexts/ColorSchemeProvider";

// export default function Index() {
//   const { toggleScheme, scheme } = useColorSchemeContext();
//   const { colors } = useTheme();

//   return (
//     <View
//       className="flex-1 items-center justify-center"
//       style={{ backgroundColor: colors.background }}
//     >
//       <Text
//         className="text-xl font-Poppins_500Medium text-center"
//         style={{ color: colors.text }}
//       >
//         Edit app/index.tsx to edit this screen BIYACH.
//       </Text>
//       <Pressable
//         onPress={toggleScheme}
//         className="mt-6 px-4 py-2 rounded"
//         style={{ backgroundColor: colors.primary }}
//       >
//         <Text className="font-Poppins_500Medium text-white">
//           Switch to {scheme === "dark" ? "Light" : "Dark"} Mode
//         </Text>
//       </Pressable>
//     </View>
//   );
// }
