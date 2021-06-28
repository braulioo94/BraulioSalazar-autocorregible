import React,{useContext} from 'react';
import { VStack } from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';
import { Box } from '@chakra-ui/layout';
import heroContext from '../useContext/heroContext'

const LoginPage = () => {
    const herosContext = useContext(heroContext) ;
    const {handleLoginSubmit} = herosContext ;
  
    return ( 
    <>
        <div className='containerLoginPage'>
            <div className='containerImagenHeroes'>
            </div>
              <div className='containerFormLogin'>
                  <Box
                  w='100%'
                  h='fit-content'
                  py={7}
                  boxShadow='xl'
                  borderWidth='1px'
                  borderColor='gray.200'
                  borderRadius='xl'
                  d='flex'
                  justifyContent='center'
                  justifyItems='center'
              >
                  <VStack
                    w={{ base: '90%', sm: '80%' }}
                    d='flex'
                    alignItems='center'
                    spacing={5}
                    justifyContent='center'
                    textAlign='center'
                  >
                      <h2>Iniciar Sesion</h2>
                    {/* Form */}
                      <LoginForm onLoginSubmit={handleLoginSubmit} />
                  </VStack>
                </Box>
              </div>
        </div>  
    </>
  );
}
 
export default LoginPage;