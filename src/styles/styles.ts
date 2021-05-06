import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    darkModeContainer: {
        display: 'flex',
        backgroundColor: "#000000",
        color: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        padding: 10,
        // margin: 5,
        // borderColor: '#32cd32',
        // borderWidth: 5
    },
    
    container: {
        display: "flex",
        // backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        padding: 10,
        // margin: 5,
        // borderColor: '#32cd32',
        // borderWidth: 5
        
    },
    map: {
        width: Dimensions.get('window').width,
        position: "absolute",
        height: Dimensions.get('window').height,
    },
    navigationPanelContainer: {
        display: 'flex',
        flexDirection: "row",
        
        backgroundColor: "#63316D",
        // backgroundColor: "#717171",
        width: "80%",
        height: 60,
        position: "absolute",
        zIndex: 1,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "space-evenly",
        // zIndex: 1,
        top: Dimensions.get('window').height - 85,
        alignSelf: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    navIcon: {
        // opacity: 0.5,
        height: 25,
        width: 25,
    }
});

export default styles;