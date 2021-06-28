import React from 'react';
import { withFormik, Field, Form, Formik,ErrorMessage } from 'formik';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import { FormControl, FormErrorMessage, Box, VStack, Button as button } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const FormSearch = ({ onLoginSubmit, ...props })  => {

    

    const validateEmail =(value) => {
        let error;
        if (!value) error = 'El nombre es requerido';
            return error;
        }

    return (
        <>
        <Box w='full' {...props}  >
            <div>
                <h1><strong>Ingrese el heroe que desea buscar</strong> </h1>
            </div>
            
            <div>
            <Formik initialValues={{}} onSubmit={onLoginSubmit}  >
                {(props) => (
                    <Form >
                        <VStack spacing={5}   >
                            {/* Email input */}
                            <Field name='nombre' validate={validateEmail} >
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email} >
                                    <InputGroup >
                                        <InputLeftElement pointerEvents='none'  />
                                        <Input  m='auto'size='lg' type='nombre' {...field}  borderColor='gray.300' id='nombre' placeholder='Ingrese el nombre del heroe'  />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            <button
                                className='btn btn-success mb-2 mt-2'
                                type='submit'
                                >
                                    Buscar
                            </button>
                    </VStack>
                </Form>
                )}
            </Formik>
            </div>
            
        </Box>  

        </>
        )
}

export default FormSearch;  