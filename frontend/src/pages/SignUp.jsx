import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"


export const SignUp =()=>{
    return <div className="bg-state-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bd-white w-80 text-center p-2 h-max px-4">
               <Heading label= {"Sign Up"}/>
               <SubHeading label = {"Enter your information to create an account"}/>
               <InputBox placeholder= "John" label={"first name"}/> 
               <InputBox placeholder= "deo" label={"last name"}/>
               <InputBox placeholder= "John@gmail.com" label={"Email"}/>
               <InputBox placeholder= "12345" label={"Password"}/>
             </div>
             <div>
                <Button label= {"Sign Up"}/>   
             </div>
              <BottomWarning label ={"Already have an a account?"} buttonText={"Sign In"} to="/signin"/>
        </div>
    </div>
}