import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    map: {
        width: Dimensions.get('window').width,
        position: "absolute",
        height: Dimensions.get('window').height,
        // alignSelf: "center",
        borderColor: '#32cd32',
        borderWidth: 5
    },
    navigationPanelContainer: {
        display: 'flex',
        flexDirection: "row",
        
        backgroundColor: "#63316D",
        //color: "#717171",
        width: "80%",
        height: 60,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "space-evenly",
        zIndex: 1,
        top: Dimensions.get('window').height - 100,
        alignSelf: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    navIcon: {
        
        height: 25,
        width: 25,
    }
});

export default styles;