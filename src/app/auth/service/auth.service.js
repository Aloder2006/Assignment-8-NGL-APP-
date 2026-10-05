import { sendEmail } from "../../../common/email/nodemailer.js";
import * as authRepository from "../repository/auth.repository.js";
import * as otpRepository from "../repository/otp.repository.js";
import bcrypt from "bcrypt";
import crypto from "node:crypto";


export async function register(userData){
    //1. check user exist 
    const userExist = await authRepository.checkUserExistByEmail(userData.email);
    //2. if yes, throw error
    if(userExist) throw new Error("user already exists");
    //3. prepare data [hash-password]
    userData.password = await bcrypt.hash(userData.password,10);
    //4. save user into DB
    const createdUser = await authRepository.createUser(userData);
    //5. generate and save OTP
    const otp = crypto.randomInt(100000,999999).toString();
    otpRepository.createOTP({
        code:otp,
        email:userData.email,
        expireAt: new Date(Date.now() + 10 * 60 * 1000)
    });
    //6. send OTP into mail
    await sendEmail(
        userData.email,
        "OTP Verification",
        `
        <h3>Your Verification Code</h3>
        <h1 style="color: #007bff; letter-spacing: 4px;">${otp}</h1>
        <p>This code is valid for 10 minutes.</p>
        `
    );

    return createdUser; 

}