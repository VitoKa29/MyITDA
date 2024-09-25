import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../styles";
import ProgressBar from "../ProgressBar";

export default function TableRow({ semester, sks, ip }) {
  return (
    <View style={LOKAL_STYLES.tableRow}>
      <View style={LOKAL_STYLES.semesterContainer}>
        <Text>{semester}</Text>
      </View>
      <View style={LOKAL_STYLES.progressContainer}>
        <ProgressBar ip={ip.toFixed(2)} />
        <View style={LOKAL_STYLES.sksContainer}>
          <View style={LOKAL_STYLES.sksBadge}>
            <Text style={LOKAL_STYLES.sksText}>{sks} sks</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const LOKAL_STYLES = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  semesterContainer: {
    flex: 1,
    paddingRight: SIZES.padding,
  },
  progressContainer: {
    flex: 4,
    justifyContent: "center",
  },
  sksContainer: {
    alignItems: "flex-start",
    paddingVertical: 5,
    width: 35,
    height: 45,
    resizeMode: "contain",
  },
  sksBadge: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 4,
    borderRadius: SIZES.radius,
  },
  sksText: {
    color: COLORS.white,
    fontSize: SIZES.extraSmallText,
  },
});
