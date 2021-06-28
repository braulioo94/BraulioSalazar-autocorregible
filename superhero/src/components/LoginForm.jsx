import React,{useState} from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { withFormik, Field, Form, Formik} from 'formik';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FormControl, FormErrorMessage, Box, VStack, Button as button } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';


const LoginForm = ({ onLoginSubmit, ...props }) => {
    

    const validateEmail =(value) => {
        let error;
        if (!value) error = 'El email es requerido';
            return error;
        }

        const validatePassword =(value) => {
            let error;
            if (!value) error = 'La contraseña es requerida';
                return error;
            }

    return (
        <Box w='full' {...props} >
            <Formik initialValues={{}} onSubmit={onLoginSubmit}>
                {(props) => (
                    <Form>
                        <VStack spacing={5}>
                            {/* Email input */}
                            <Field name='email' validate={validateEmail}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents='none'  />
                                        <Input size='lg' type='email' {...field}  borderColor='gray.300' id='email' placeholder='Email'  />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            
                            {/* Password input */}
                            <Field name='password' validate={validatePassword}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents='none'  />
                                        <Input size='lg' type='password' {...field}   borderColor='gray.300' id='password' placeholder='Contraseña'  />
                                    </InputGroup>
                                </FormControl>
                                )}
                            </Field>
                            
                            <button
                                className='btn btn-success'
                                type='submit'
                                >
                                    Loguearse
                            </button>
                    </VStack>
                </Form>
                )}
            </Formik>
        </Box>  
    );
}

 

  export default LoginForm;  