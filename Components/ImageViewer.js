import { StyleSheet, Text, View, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource }) {
  const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });
  return <Image source={placeholderImageSource} style={styles.image} />;
}
