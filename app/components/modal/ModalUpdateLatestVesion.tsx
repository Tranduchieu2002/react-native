import { Linking, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../button/button';
import { spacing } from '../../theme';

const ModalUpdateLatestVesion = () => {
    const [modalVisible, setModalVisible] = useState(true);


    const onPress = () => {
        Linking.openURL("#")
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>We're realese newest version pls update!</Text>
                        <View style={styles.buttonWrap}>
                            <Button
                                style={[styles.button, styles.buttonClose]} disabled={true}

                                onPress={onPress}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Button>
                            <Button
                                style={[styles.button]}
                                disabled={true}
                                onPress={onPress}
                            >
                                <Text style={styles.textStyle}>Update</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default ModalUpdateLatestVesion

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        width: 300,
        borderRadius: spacing[2],
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        opacity: 0.5,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonWrap: {
        width: "100%",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    button: {
        borderRadius: spacing[2],
        padding: 10,
        elevation: 2,
        backgroundColor: "#2196F3",
    },
})