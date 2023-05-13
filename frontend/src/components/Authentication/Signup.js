import React,{useState} from 'react';
import {VStack} from "@chakra-ui/layout";
import {FormControl,FormLabel} from "@chakra-ui/form-control"; 
import {Input,InputGroup,InputRightElement} from '@chakra-ui/input';
import {Button} from "@chakra-ui/button";
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import {useHistory}from 'react-router-dom'

export const Signup = () => {

  const[show,setShow]=useState(false);
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[confirmpassword,setconfirmpassword]=useState();
  const[password,setpassword]=useState();
  const[pic,setPic]=useState();
  const [loading,setLoading]=useState(false);
  const toast = useToast()
  const handleClick =()=>setShow(!show);
  const history =useHistory();

  const postDetails=(pics)=>{
    setLoading(true);
    if(pics===undefined)
    {
        toast({
          title:"please select an image",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"bottom",
        });
        return;
    }
      if(pics.type==="image/jpeg" || pics.type==="image/png")
      {
        const data=new FormData();
        data.append("file",pics);
        data.append("upload_preset","chatbox");
        data.append("cloud_name","dut4suycr");
        fetch("https://api.cloudinary.com/v1_1/dut4suycr/image/upload",{
          method:"post",
          body:data,
        }).then((res)=>res.json())
        .then(data=>{
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        }).catch((err)=>{
          console.log(err);
          setLoading(false);
        });
        
      }else{
        toast({
          title:"please select an image",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"bottom",
        });
        setLoading(false);
        return;
      }
  };
  const submitHandler=async()=>{
    setLoading(true);
    if(!name ||!email || !password || !confirmpassword)
    {
      toast({
          title:"please fill all the fields",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"bottom",
        });
        setLoading(false);
        return;
    }
    if(password!==confirmpassword)
    {
      toast({
          title:"password did not match",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"bottom",
        });
        setLoading(false);
        return;
    }
    try
    {
      const config={
        headers:{
          "Content-type":"application/json",
        },
      };
      const {data}=await axios.post("/api/user",
      {name,email,password,pic},
      config
      );
        toast({
          title:"registered successfully",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"bottom",
        });

        localStorage.setItem('userInfo',JSON.stringify(data));
        setLoading(false);
        history.push("/chats");

    }
    catch(error){
       toast({
          title:"Error occured",
          description:error.response.data.message,
          status:"error",
          duration:5000,
          isClosable:true,
          position:"bottom",
        });
        setLoading(false);
    }

  };




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
    isLoading={loading}
  >Sign up</Button>

  </VStack>
    
  );



 
};

export default Signup;