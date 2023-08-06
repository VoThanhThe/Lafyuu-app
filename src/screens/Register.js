import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';

// import {validaEmpty, validaEmail, validaPassword} from 'constants/validation';
import { validaEmpty, validaEmail, validaPassword } from "../constants/validation"

const Register = (props) => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const [errName, setErrName] = useState(true);
  const [errEmail, setErrEmail] = useState(true);
  const [errPassword, setErrPassword] = useState(true);
  const [errPasswordAgain, setErrPasswordAgain] = useState(true);


  const subMit = () => {
    let result = {
      name: name,
      emai: email,
      password: password,
      passwordAgain: passwordAgain
    }
    if (name.length == 0) {
      setErrName('Không được bỏ trống');
    } else if (name.length > 0) {
      setErrName('');
    }

    if (email.length == 0) {
      setErrEmail('Không được bỏ trống');
    } else if (email.length > 0) {
      if (validaEmail(email)) {
        setErrEmail('');
      } else {
        setErrEmail('Sai định dạng email');
      }
    }

    if (password.length == 0) {
      setErrPassword('Không được bỏ trống');
    } else if (email.length > 0) {
      if (validaPassword(password)) {
        setErrPassword('');
      } else if(password.length < 8 && password.length > 20) {
        setErrPassword('Mật khẩu từ 8 đến 20 kí tự');
      }else {
        setErrPassword('Mật khẩu gồm chữ viết hoa, viết thường và số');
      }
    }

    if (passwordAgain.length == 0) {
      setErrPasswordAgain('Không được bỏ trống');
    } else if (email.length > 0) {
      if (validaPassword(passwordAgain)) {
        setErrPasswordAgain('');
      } else {
        setErrPasswordAgain('Mật khẩu từ 8 đến 20 kí tự');
      }
    }

    if (errName.length == 0 && errEmail.length == 0 && errPassword.length == 0 && errPasswordAgain.length == 0) {
      console.log(result);
      navigation.navigate('Login');
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <Text style={styles.header}>Let’s Get Started</Text>
      <Text style={styles.content}>Create an new account</Text>
      <View style={styles.inputHeader}>
        <TextInput style={styles.input} placeholder="Full Name"
          onChangeText={(name) => setName(name)} />
        <Icon2
          style={styles.icon}
          name="person-outline"
          color="#9098B1"
          size={20}
        />
      </View>
      <Text style={{ color: 'red', fontSize: 16 }}>{errName}</Text>
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

      <View style={styles.inputHeader}>
        <TextInput style={styles.input} placeholder="Password Again" secureTextEntry={true}
          onChangeText={(passwordAgain) => setPasswordAgain(passwordAgain)} />
        <Icon1 style={styles.icon} name="lock" color="#9098B1" size={20} />
      </View>
      <Text style={{ color: 'red', fontSize: 16 }}>{errPasswordAgain}</Text>

      <Pressable
        style={styles.button}
        // onPress={() => {
        //   navigation.navigate('Login');
        // }}
        onPress={subMit}
      >
        <Text style={styles.textButton}>Sign Up</Text>
      </Pressable>

      <View style={styles.viewFooter}>
        <Text style={styles.textFooter}>have a account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={[styles.textFooter, { color: '#40BFFF' }]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  logo: {
    width: 72,
    height: 72,
    marginTop: 110,
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
    marginTop: 24,
  },
  textFooter: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9098B1',
    lineHeight: 18,
    textAlign: 'center',
  },
});
