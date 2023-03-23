import React,{useState} from 'react';
import {VStack} from "@chakra-ui/layout";
import {FormControl,FormLabel} from "@chakra-ui/form-control"; 
import {Input,InputGroup,InputRightElement} from '@chakra-ui/input';
import {Button} from "@chakra-ui/button";



export const Signup = () => {

  const[show,setShow]=useState(false);
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[confirmpassword,setconfirmpassword]=useState();
  const[password,setpassword]=useState();
  const[pic,setPic]=useState();

  const handleClick =()=>setShow(!show);

  const postDetails=()=>{};
  const submitHandler=()=>{};




  return (
  <VStack spacing="5px"> 


    <FormControl id='first-name' isRequired>

      <FormLabel>Name</FormLabel>

      <Input 
      placeholder="Enter Your Name"
      onChange={(e)=>setName(e.target.value )}
      />

    </FormControl>


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

    <FormControl id='password' isRequired>

      <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input 
          type={show ? "text":"password"}
          placeholder="Confirm Password"
          onChange={(e)=>setconfirmpassword(e.target.value )}
          />
        
        <InputRightElement width="4.5rem">
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? "Hide":"Show"}
          </Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>


  <FormControl id='pic'>
    <FormLabel>Upload Profile Photo</FormLabel>
    <input
      type="file"
      onPlay={1.5}
      accept="image/"
      onChange={(e)=>postDetails(e.target.files[0])}
    />
  </FormControl>

    
  <Button

    colorScheme={"green"}
    width="100%"
    stype={{marginTop:15}} 
    onClick={submitHandler}
  >Sign up</Button>

  </VStack>
    
  );



 
};

export default Signup;