'use client'

import React, { useState} from "react"
import * as Components from '../src/app/api/Components';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import "../src/app/globals.css"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"]
})

 function LoginForm() {
     const [signin, toggle] = React.useState(true);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const router = useRouter()

     const handleSubmit1 = async(e) => {
        e.preventDefault();

        if(!email || !password){
            setError("All fields are mandatory!");
            return;
        }

        if(email.search(/([a-z]|[A-Z])+\.([a-z]|[A-Z])+[0-9]{4}@vitstudent.ac.in/) == -1){
            setError("Please login with VIT mail");
            return;
        }

        try {
            const res = await signIn("credentials", {
              email: email,
              password: password,
              redirect: false,
              callbackUrl: 'http://localhost:3000/member/dashboard'
            });
      
            if (res.error) {
              setError("Invalid Credentials");
              return;
            }
            
            router.replace("member/dashboard");
          } catch (error) {
            console.log(error);
          }
     }

     const handleSubmit2 = async(e) => {
      e.preventDefault();

      if(!email || !password){
          setError("All fields are mandatory!");
          return;
      }

      if(email.search(/([a-z]|[A-Z])+\.([a-z]|[A-Z])+[0-9]{4}@vitstudent.ac.in/) == -1){
          setError("Please login with VIT mail");
          return;
      }

      try {
          const res = await signIn("credentials2", {
            email: email,
            password: password,
            redirect: false,
            callbackUrl: 'http://localhost:3000/admin/dashboard'
          });
    
          if (res.error) {
            setError("Invalid Credentials");
            return;
          }
          
          router.replace("admin/dashboard");
        } catch (error) {
          console.log(error);
        }
   }

      return(
        <div  className={`${montserrat.className} grid1 w-full h-screen overflow-hidden`}>
          <div class="background-container">
          <div class="dimmer">
          <Components.Container>
              <Components.SignUpContainer signinin={signin}>
                  <Components.Form onSubmit={handleSubmit2}>
                      <Components.Title>Sign In</Components.Title>
                      <Components.Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className={`${montserrat.className}`}/>
                      <Components.Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className={`${montserrat.className}`}/>
                      <Components.Button className={`${montserrat.className}`}>Sign In</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinin={signin}>
                   <Components.Form onSubmit={handleSubmit1}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className={`${montserrat.className}`}/>
                       <Components.Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className={`${montserrat.className}`}/>
                       <Components.Button className={`${montserrat.className}`}>Sign In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinin={signin}>
                  <Components.Overlay signinin={signin}>

                  <Components.LeftOverlayPanel signinin={signin}>
                      <Components.Title>Member?</Components.Title>
                      <Components.Paragraph>
                          Click the sign in button below :)
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)} className={`${montserrat.className}`}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinin={signin}>
                        <Components.Title>Admin?</Components.Title>
                        <Components.Paragraph>
                        Click the sign in button below :)
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)} className={`${montserrat.className}`}>
                                Sign In
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>
            
          </Components.Container>
          {error && (
            <Components.ErrorMsg>{error}</Components.ErrorMsg>
          )}
            </div>
            </div>
            </div>
      )
 }


 export default LoginForm;