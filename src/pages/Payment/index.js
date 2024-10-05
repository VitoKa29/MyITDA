import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { COLORS, SIZES, STYLES } from "../../styles";
import ButtonPembayaran from "../../components/ButtonPembayaran";
import ICONS from "../../assets/icons";
import DATA from "../../services/cache";
import SectionTitleBig from "../../components/SectionTitleBig";
import PaymentInfo from "../../components/PaymentInfo";
import {
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import Tutorial from "./tutorial";

export default function Payment({ navigation }) {
  const jumlahArray = DATA.dataPembayaran.data.length - 1;
  const nim = DATA.dataPembayaran.data[jumlahArray].nim;
  const nama = DATA.dataPembayaran.data[jumlahArray].nama;
  const kd_ta = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_ta);
  const kd_smt = parseInt(DATA.dataPembayaran.data[jumlahArray].kd_smt);
  const total_harga = parseInt(
    DATA.dataPembayaran.data[jumlahArray].total_harga
  );
  const total_denda = parseInt(
    DATA.dataPembayaran.data[jumlahArray].total_denda
  );
  const total_tagihan = total_harga + total_denda;
  const tgl_akhir_bayar = DATA.dataPembayaran.data[jumlahArray].tgl_akhir_bayar;
  const tgl_mulai = DATA.dataPembayaran.data[jumlahArray].tgl_mulai;
  const tgl_bayar = DATA.dataPembayaran.data[jumlahArray].tgl_bayar;
  const status_bayar = DATA.dataPembayaran.data[jumlahArray].status_bayar;
  const metode_pembayaran =
    DATA.dataPembayaran.data[jumlahArray].metode_pembayaran;

  const isMasaPembayaran = true;
  const beasiswa = DATA.dataBeasiswa.data[0] ? true : false;

  let jenis_beasiswa = "";
  if (beasiswa) {
    jenis_beasiswa = DATA.dataBeasiswa.data[0].jenis_beasiswa;
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const toggleModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const closeModal = () => {
    bottomSheetModalRef.current?.dismiss();
    setIsModalVisible(false);
  };

  return (
    <View style={[STYLES.containerTabView, { marginTop: "3%" }]}>
      <SectionTitleBig title={"Tagihan Anda"} />

      <PaymentInfo
        kd_ta={kd_ta}
        kd_smt={kd_smt}
        total_harga={total_harga}
        total_denda={total_denda}
        total_tagihan={total_tagihan}
        tgl_akhir_bayar={tgl_akhir_bayar}
        tgl_mulai={tgl_mulai}
        status_bayar={status_bayar}
        tgl_bayar={tgl_bayar}
        metode_pembayaran={metode_pembayaran}
        beasiswa={beasiswa}
        jenis_beasiswa={jenis_beasiswa}
        isMasaPembayaran={isMasaPembayaran}
      />

      <ButtonPembayaran
        title="Lihat Riwayat Pembayaran"
        navigation={() => navigation.navigate("Riwayat")}
        rightIcon={
          <Image
            source={ICONS.logoRiwayat}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
        }
      />
      <ButtonPembayaran
        title="Lihat Tutorial Pembayaran"
        navigation={toggleModal}
        rightIcon={
          <Image
            source={ICONS.logoTutorial}
            style={{
              width: 27,
              height: 27,
              marginTop: 3,
              marginRight: 2,
            }}
            resizeMode="contain"
          />
        }
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={["70%", "70%"]}
        onDismiss={() => setIsModalVisible(false)}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: COLORS.secondary }}
        handleIndicatorStyle={LOCAL_STYLE.handleIndicator}
        backdropComponent={({ animatedIndex, style }) => (
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={[style, { backgroundColor: "rgba(0,0,0,0.7)" }]} />
          </TouchableWithoutFeedback>
        )}
        animationConfigs={{ duration: 150 }}>
        <Tutorial />
      </BottomSheetModal>
    </View>
  );
}

const LOCAL_STYLE = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: SIZES.full,
  },
  handleIndicator: {
    backgroundColor: COLORS.lightGray,
    width: 40,
    height: 5,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
  },
});
