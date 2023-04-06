import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  userCard: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "gray",
  },
  userAvatar: {
    marginRight: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
  },
  userName: {
    color: "white",
    marginBottom: 5,
    fontSize: 22,
    fontWeight: "500",
  },
  userHandle: {
    color: "white",
  },
});

export default styles;
