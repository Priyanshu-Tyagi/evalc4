import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AppContext";

const userLogin = ({ email, password }) => {
    return fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
  };

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {loginUser,isAuth} = useContext(AuthContext);

    const handleLogin = () => {
        userLogin({
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            loginUser("eve.holt@reqres.in", res.token);
          });
      };
    
    if(isAuth){
        return <Navigate to="/dashboard" />
    }
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     handleLogin();
    // }
  return (
    <div>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <Button type="submit" onClick={handleLogin}>Submit</Button>
      </FormControl>
    </div>
  );
}
