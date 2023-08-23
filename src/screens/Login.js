import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import { AppContext } from '../ultil/AppContext';
import { validaEmpty, validaEmail, validaPassword } from "../constants/validation";
import { users } from "../data/Data";
import { ToastAndroid } from 'react-native';


const Login = props => {
  const { isLogin, setisLogin } = useContext(AppContext);
  const { navigation } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errEmail, setErrEmail] = useState(true);
  const [errPassword, setErrPassword] = useState(true);
  const click = () => {
    let result = {
      emai: email,
      password: password,
    }
    if (email.length == 0) {
      setErrEmail('Không được bỏ trống.');
    } else if (email.length > 0) {
      if (validaEmail(email)) {
        setErrEmail('');
      } else {
        setErrEmail('Sai định dạng email');
      }
    }

    if (password.length == 0) {
      setErrPassword('Không được bỏ trống.');
    } else if (email.length > 0) {
      if (validaPassword(password)) {
        setErrPassword('');
      } else {
        setErrPassword('Mật khẩu gồm chữ hoa, chữ thường, chữ số và từ 8 đến 20 kí tự');
      }
    }

    if (validaEmail(email) && validaPassword(password)) {
      console.log(result);
      setisLogin(true);
    }

  };
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <Text style={styles.header}>Welcome to Lafyuu</Text>
      <Text style={styles.content}>Sign in to continue</Text>
      <View style={styles.inputHeader}>
        <TextInput style={styles.input} placeholder="Your Email"
          onChangeText={(email) => setEmail(email)} />
        <Icon style={styles.icon} name="envelope-o" color="#9098B1" size={20} />
      </View>
      <Text style={{ color: 'red', fontSize: 16 }}>{errEmail}</Text>

      <View style={styles.inputHeader}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}
          onChangeText={(password) => setPassword(password)} />
        <Icon1 style={styles.icon} name="lock" color="#9098B1" size={20} />
      </View>
      <Text style={{ color: 'red', fontSize: 16 }}>{errPassword}</Text>

      <TouchableOpacity style={styles.button} onPress={click}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.header,
          { fontSize: 14, color: '#9098B1, marginTop: 24' },
        ]}>
        OR
      </Text>
      <Pressable style={styles.buttonSocial}>
        <Text style={styles.textButtonSocial}>Login with Google</Text>
        <Image
          style={styles.imageGG}
          source={require('../assets/Google.png')}
        />
      </Pressable>
      <Pressable style={styles.buttonSocial}>
        <Text style={styles.textButtonSocial}>Login with facebook</Text>
        <Image
          style={styles.imageFace}
          source={require('../assets/Facebook.png')}
        />
      </Pressable>

      <Text style={[styles.header, { color: '#40BFFF' }]}>Forgot Password?</Text>
      <View style={styles.viewFooter}>
        <Text style={styles.textFooter}>Don’t have a account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={[styles.textFooter, { color: '#40BFFF' }]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  logo: {
    width: 72,
    height: 72,
    marginTop: 68,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 16,
  },
  content: {
    fontSize: 12,
    fontWeight: '400',
    color: '#9098B1',
    lineHeight: 21.6,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingLeft: 50,
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 18,
  },
  inputHeader: {
    position: 'relative',
    marginTop: 8,
  },
  button: {
    width: '100%',
    height: 57,
    backgroundColor: '#40BFFF',
    borderRadius: 5,
    marginTop: 16,
  },
  textButton: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 57,
    textAlign: 'center',
  },
  buttonSocial: {
    width: '100%',
    height: 57,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 16,
    borderColor: '#EBF0FF',
    position: 'relative',
  },
  textButtonSocial: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9098B1',
    lineHeight: 57,
    textAlign: 'center',
  },
  imageGG: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 16,
    left: 18,
  },
  imageFace: {
    width: 11,
    height: 20,
    position: 'absolute',
    top: 16,
    left: 18,
  },
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  textFooter: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9098B1',
    lineHeight: 18,
    textAlign: 'center',
  },
});
