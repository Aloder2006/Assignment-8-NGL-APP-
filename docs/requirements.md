# NGL APP [anonymous messaging app]

* send anonymous messages or public messages.
* view a profile with a related messages.
* handle manage messages.


- tech stack:
    - express
    - node.js
    - mongo db/mongoose
    - redis [caching]
    - nodemailer [otp]
    - JWT [authentication]
    - bcrypt [hashing]
    - oauth2 [google]
    - validation [Zod, Joi, Yup, class-validator]
    - erorr handling [AppError]
    - rate limting
    - load balancing [nginx]

- OTP [one time password]:
    - delete OTP after 10 minutes.
    - delete OTP after use.
    - store OTP temporarily [time to live].
        - database using mongodb support TTL.[HDD]
        - into cache redis support TTL.[RAM] x50 faster more DB.

- link:
    - verify email
        - /api/v1/auth/verify-email?email=value&otp=123456
    - login
        - /api/v1/auth/login?email=value&otp=123456

- features:
    - authentication flow:
        - register
        - verify email using OTP
        - login
        - reset password
        - send OTP
        - login with google
        - logout
    - message flow:
        - send message [anonymous or public]
        - view a messages
        - delete messages [soft-delete]
    -user flow:
        - view a profile [me]
        - edit a profile [me]
        - delete a profile [soft-delete]
    - guards:
        - authentication [token]
    
    
