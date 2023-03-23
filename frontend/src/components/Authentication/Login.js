import React,{useState} from 'react';
import {VStack} from "@chakra-ui/layout";
import {FormControl,FormLabel} from "@chakra-ui/form-control"; 
import {Input,InputGroup,InputRightElement} from '@chakra-ui/input';
import {Button} from "@chakra-ui/button";

export const Login = () => {
  const[show,setShow]=useState(false);
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setpassword]=useState();
  
  const handleClick =()=>setShow(!show);

  const submitHandler=()=>{};




  return (
  <VStack spacing="5px"> 


    


    <FormControl id='email' isRequired>

      <FormLabel>Email</FormLabel>

      <Input 
      placeholder="Enter Your Email"
      onChange={(e)=>setEmail(e.target.value )}
      />
      
    </FormControl>


     <FormControl id='password' isRequired>

      <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input 
          type={show ? "text":"password"}
          placeholder="Enter Your password"
          onChange={(e)=>setpassword(e.target.value )}
          />
        
        <InputRightElement width="4.5rem">
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? "Hide":"Show"}
          </Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>

   
    
  <Button

    colorScheme={"green"}
    width="100%"
    stype={{marginTop:15}} 
    onClick={submitHandler}
  >
    Login
  </Button>

  <Button
    variant={"solid"}
    colorScheme='blue'
    width="100%"
    onClick={()=>
    {
      setEmail('guest@example.com');
      setpassword("123456");

    }}
    >

    Guest user details

    </Button>





  </VStack>
    
  );


}

export default Login;