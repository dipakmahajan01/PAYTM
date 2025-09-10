/* eslint-disable no-unused-vars */
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from 'axios'

export const SignUp =()=>{

      const [firstName,setFirstName] = useState("")
      const [lastName,setLastName] = useState("")
      const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")

    return <div className="bg-state-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bd-white w-80 text-center p-2 h-max px-4">
               <Heading label= {"Sign Up"}/>
               <SubHeading label = {"Enter your information to create an account"}/>
               <InputBox onChange={
                (e)=>{
                  setFirstName(e.default.value)
                }
               } placeholder= "John" label={"first name"}/> 
               <InputBox onChange={
                (e)=>{
                  setLastName(e.default.value)
                }
               } placeholder= "deo" label={"last name"}/>
               <InputBox onChange={
                (e)=>{
                  setEmail(e.default.value)
                }
               } placeholder= "John@gmail.com" label={"Email"}/>
               <InputBox onChange={
                (e)=>{
                  setPassword(e.default.value)
                }
               } placeholder= "12345" label={"Password"}/>
             </div>
             <div>
                <Button onclick={
                  async ()=>{
                    const response = await axios.post('http://localhost:3000/v1/signup')
                    if(response.data){
                     localStorage.setItem("token", response.data.token)
                      
                    }
                  }
                } label= {"Sign Up"}/>   
             </div>
              <BottomWarning label ={"Already have an a account?"} buttonText={"Sign In"} to="/signin"/>
        </div>
    </div>
}