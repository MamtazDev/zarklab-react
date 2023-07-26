import React, { useEffect } from 'react'

import { Amplify, Auth } from "aws-amplify"
// 
// import { AwsConfigAuth } from "../auth.config";

// REACT_APP_COGNITO_CLIENT_ID=4rb8ecs8i6phea5ififkvcil1t
// REACT_APP_COGNITO_USERPOOL_ID=us-east-1_y1SZksWpn
const AwsConfigAuth = {
    region: "us-east-1",
    userPoolId: "us-east-1_iJNzGNptL",
    userPoolWebClientId: "65n2hiu49tacap7h2hbr6idmv",
    cookieStorage: {
        domain: "AUTH_COOKIE_STORAGE_DOMAIN",
        path: "/",
        expires: 365,
        sameSite: "strict",
        secure: true,
    },
    authenticationFlowType: "USER_SRP_AUTH",
};



function Signin() {



    Amplify.configure({ Auth: AwsConfigAuth });

    const handleSignUp = async (e) => {
        e.preventDefault()
        const email = "nahid.opediatech@gmail.com"
        const password = "Nahif123@"


        console.log("Initiating sign up ",)
        console.log("Initiating sign up ", email)
        if (email && password) {
            const result = await Auth.signUp({
                username: email,
                // password: password,
                // preferred_username:'dihan',
                // username:'dihan@gmail.com'

                password: password,
                attributes: {
                    preferred_username: "DIhan",
                    email, // optional
                    // phoneNumber, // optional - E.164 number convention
                    // other custom attributes
                },
                autoSignIn: {
                    // optional - enables auto sign in after user is confirmed
                    enabled: true,
                },


            })

            if (!result.userConfirmed) {
                // setdisplayOTPInput(true)
            }
            console.log(result)
        }


    // const handleSignIn = async (e) => {
    //     e.preventDefault()
    //     const email = "nahid.muradabir@gmail.com"
    //     const password = "Nahif123@"


    //     console.log("Initiating sign up ",)
    //     console.log("Initiating sign up ", email)
    //     if (email && password) {
    //         const result = await Auth.signIn({
    //             // email: email,
    //             // password: password,
    //             // preferred_username:'dihan',
    //             // username:'dihan@gmail.com'

    //             preferred_username: "DIhan",
    //             password: password,
    //             attributes: {
    //                 email, // optional
    //                 // phoneNumber, // optional - E.164 number convention
    //                 // other custom attributes
    //             },
    //             autoSignIn: {
    //                 // optional - enables auto sign in after user is confirmed
    //                 enabled: true,
    //             },


    //         })

    //         if (!result.userConfirmed) {
    //             setdisplayOTPInput(true)
    //         }
    //         console.log(result)
    //     }

    }


    useEffect(() => {
        async function checkAuth() {
            try {
                const user = await Auth.currentAuthenticatedUser()
                console.log(user)
            } catch (e) {
                // setEmail(undefined)
                // setPassword(undefined)
            }
        }
        checkAuth()

    }, [])

    return (
        <div>
            <button className='btn btn-success' onClick={(e) => handleSignUp(e)}>Signup</button>
        </div>
    )
}

export default Signin