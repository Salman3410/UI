import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { ONBOARDING } from "../utils/onBoardingData";

const { width } = Dimensions.get("window");

export default function OnBoardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < ONBOARDING.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food Here</Text>

      <FlatList
        ref={flatListRef}
        data={ONBOARDING}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {ONBOARDING.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, currentIndex === i && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>
            {currentIndex === ONBOARDING.length - 1 ? "Let's Go" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff746c",
    paddingTop: 60,
  },
  header: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  slide: {
    width,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  image: {
    height: 260,
    width: 260,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#eee",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  footer: {
    paddingBottom: 40,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    width: 20,
    opacity: 1,
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#fff",
    marginHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff746c",
  },
});
