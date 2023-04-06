import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coverImage: {
    height: 200,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 10,
  },
  userName: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
  userStats: {
    color: "white",
  },
  infoContainer: {
    padding: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: -50,
  },
  userAvatar: {
    marginRight: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
  },
  name: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: "600",
  },
  handle: {
    color: "gray",
    marginBottom: 10,
  },
  bio: {
    lineHeight: 20,
  },
  subscription: {
    color: "grey",
    marginTop: 20,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "gainsboro",
  },
  buttonText: {
    color: "royalblue",
    padding: 10,
    fontWeight: "600",
  },
});

export default styles;
