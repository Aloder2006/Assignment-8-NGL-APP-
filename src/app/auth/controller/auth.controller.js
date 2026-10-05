import * as authService from "../service/auth.service.js"
export async function register(req,res, next){
    try{
        const createdUser = await authService.register(req.body);
        res.status(201).json({
            message:"User registered successfully",
            status:"success",
           data:createdUser
        });

    }catch(error){
        next(error)
    }
}
    
