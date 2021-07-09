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
        
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        alignItems: 'center',
        backgroundColor: "#63316D",
        borderRadius: 25,
        height: 55,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // borderColor: '#32cd32',
        // borderWidth: 5
    },
    navIcon: {
        // opacity: 0.5,
        height: 25,
        width: 25,
    },
    navIconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: 60,
        borderColor: '#32cd32',
        borderWidth: 5
    }
});

export default styles;