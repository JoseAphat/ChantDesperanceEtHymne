import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const { width: screenWidth } = Dimensions.get("window");
const isSmallScreen = screenWidth < 400;
const isMediumScreen = screenWidth >= 400 && screenWidth < 768;
const isLargeScreen = screenWidth >= 768;

export const responsiveScale = (size: number) => {
  if (isSmallScreen) return scale(size * 0.9);
  if (isMediumScreen) return scale(size);
  return scale(size * 1.1);
};

export const responsiveVerticalScale = (size: number) => {
  if (isSmallScreen) return verticalScale(size * 0.9);
  if (isMediumScreen) return verticalScale(size);
  return verticalScale(size * 1.1);
};

export const responsiveModerateScale = (size: number) => {
  if (isSmallScreen) return moderateScale(size * 0.9);
  if (isMediumScreen) return moderateScale(size);
  return moderateScale(size * 1.1);
};

export { isSmallScreen, isMediumScreen, isLargeScreen };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E42",
    paddingHorizontal: responsiveScale(10),
    paddingTop: responsiveVerticalScale(-30),
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveVerticalScale(5),
    marginBottom: responsiveVerticalScale(10),
    marginHorizontal: responsiveScale(10),
    position: "relative",
    maxWidth: isLargeScreen ? responsiveScale(400) : "100%",
    alignSelf: "center",
  },
  textInput: {
    flex: 1,
    height: responsiveVerticalScale(45),
    borderBottomColor: "#dfdedcf7",
    borderBottomWidth: moderateScale(2),
    paddingLeft: responsiveScale(15),
    paddingRight: responsiveScale(45),
    color: "#dfdedcf7",
    fontSize: responsiveModerateScale(14),
    backgroundColor: "transparent",
    minWidth: responsiveScale(250),
    maxWidth: responsiveScale(350),
  },
  clearButton: {
    position: "absolute",
    right: responsiveScale(8),
    backgroundColor: "#ddd",
    borderRadius: responsiveScale(15),
    width: responsiveScale(20),
    height: responsiveScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  clearIcon: {
    color: "red",
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: responsiveScale(15),
    paddingTop: responsiveVerticalScale(15),
    paddingBottom: responsiveVerticalScale(20),
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "flex-start",
  },
  searchWrapper: {
    position: "relative",
    zIndex: 1000,
  },
  historyContainer: {
    backgroundColor: "#1a2d52",
    borderRadius: responsiveModerateScale(12),
    marginHorizontal: responsiveScale(10),
    marginTop: responsiveVerticalScale(5),
    padding: responsiveScale(12),
    maxHeight: responsiveVerticalScale(250),
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
    width: "95%",
    alignSelf: "center",
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsiveVerticalScale(10),
    paddingBottom: responsiveVerticalScale(8),
    borderBottomWidth: 1,
    borderBottomColor: "#dfdedcf7",
  },
  historyTitle: {
    color: "#dfdedcf7",
    fontSize: responsiveModerateScale(14),
    fontWeight: "bold",
  },
  clearHistoryText: {
    color: "#ff6b6b",
    fontSize: responsiveModerateScale(12),
    fontWeight: "600",
  },
  historyList: {
    maxHeight: responsiveVerticalScale(180),
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: responsiveVerticalScale(10),
    borderBottomWidth: 0.5,
    borderBottomColor: "#dfdedcf750",
  },
  historyItemButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  historyIcon: {
    marginRight: responsiveScale(10),
  },
  historyItemText: {
    color: "#dfdedcf7",
    fontSize: responsiveModerateScale(13),
    flex: 1,
  },
  removeButton: {
    padding: responsiveScale(5),
  },
  bookButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfdedcf7",
    padding: responsiveVerticalScale(10),
    borderRadius: responsiveModerateScale(12),
    width: "45%",
    height: responsiveVerticalScale(110),
    marginBottom: responsiveVerticalScale(15),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: responsiveModerateScale(6),
    elevation: 5,
    borderColor: "red",
    borderLeftWidth: responsiveModerateScale(4),
    borderRightWidth: responsiveModerateScale(4),
  },
  image: {
    width: responsiveScale(60),
    height: responsiveScale(60),
    resizeMode: "contain",
    marginBottom: responsiveVerticalScale(5),
  },
  bookButtonText: {
    fontSize: responsiveModerateScale(14),
    fontWeight: "bold",
    color: "#0A1E42",
    textAlign: "center",
    lineHeight: responsiveModerateScale(16),
    paddingHorizontal: responsiveScale(4),
    bottom: responsiveVerticalScale(14),
  },
  notesButtonWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveVerticalScale(0),
    marginBottom: responsiveVerticalScale(10),
  },
  notesButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfdedcf7",
    padding: responsiveVerticalScale(10),
    borderRadius: responsiveModerateScale(12),
    width: "45%",
    height: responsiveVerticalScale(105),
    marginBottom: responsiveVerticalScale(15),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: responsiveModerateScale(6),
    elevation: 5,
    borderColor: "red",
    borderLeftWidth: responsiveModerateScale(4),
    borderRightWidth: responsiveModerateScale(4),
  },
  notesButtonText: {
    fontSize: responsiveModerateScale(14),
    fontWeight: "bold",
    color: "#0A1E42",
    textAlign: "center",
    lineHeight: responsiveModerateScale(16),
    paddingHorizontal: responsiveScale(4),
  },
});
