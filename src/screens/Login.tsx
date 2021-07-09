import React from 'react';
import {View, Button, Text, Image} from 'react-native';
import {AuthContext} from '../utils/context';

type LoginProps = {
    loggedIn: boolean
}

const Login = ({navigation} : any) => {
	const { signIn } = React.useContext(AuthContext);
	return (
		<View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image style= {{position: 'absolute' , top: 200, height: 100, width: 100}} source= {require('../../assets/vector_logo_v2.png')}></Image>
			<Text>I am a login pages</Text>
			<Button title="Login" onPress = {() => {
				signIn();
			}}/>
		</View>
	)
}

export default Login;