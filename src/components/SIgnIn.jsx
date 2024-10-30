import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import { Formik, useField } from "formik";
import StyleTextInput from "./StyleTextInput";
import StyleText from "./StyleText";



//https://github.com/midudev/rate-repository-app/blob/second-class/src/pages/LogIn.jsx


const FormikInputValue = ({name, ...props}) => {
 const [field, meta, helpers] = useField(name)
    return(
        <>
            <StyleTextInput 
                placeholder="Usuario" 
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyleText style={Styles.text}>{meta.error}</StyleText>}
        </>
    )
}

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Campo requerido';
    }
    if (!values.password) {
        errors.password = 'Campo requerido';
    }
    return errors;
}


const initialValues = {
    username: '',
    password: '',
}

const Styles = StyleSheet.create({
    Form: {
        margin: 50,
     },
     Image: {
        width: 100,
        height: 100,
        marginBottom: 50,
        alignSelf: 'center',
    },
    text: {
        color: 'red',
    }
});


const SignIn = () => {
    return (
      <Formik validate={validate} initialValues={initialValues} onSubmit={values=> console.log(values)}>
            {({handleChange, handleSubmit, values}) => {
                return (
                    <View style={Styles.Form}>
                        <Image source={require('../../assets/Inter.png')} style={Styles.Image}/>
                        <FormikInputValue 
                            placeholder="Usuario" 
                            name="username" 
                            value={values.username}
                            onChangeText={handleChange('username')}

                        />
                        <FormikInputValue 
                            placeholder="Contraseña"
                            name="password"
                            secureTextEntryD
                        />
                        <Button   title="Iniciar Sesion" />
                    </View>
                )
            }}
      </Formik>
    )
}


export default SignIn;