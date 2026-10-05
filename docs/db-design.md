# DATABASE DESIGN

- User
    - name -> [String - required - max [20] - min [3] - trim:true]
    - email -> [String - required - unique - trim:true - lowercase:true]
    - password -> [String - required(if provider is local)]
    - provied -> [String - enum:['google', 'facebook', 'local'] - default:'local']
    - isDeleted -> [Boolean - default:false]
    - isVerified -> [Boolean - default:false]
    - date of birth [Date]
    - gender [String - enum:['male', 'female']]
    - createdAt [Date]
    - updatedAt [Date]

---------------------------------------

- Message
    - content -> [String - required - trim - max:200 - min:1]
    - receiver -> [ObjectId - required - ref: User]
    - sender -> [ObjectId - optional - ref: User - default:null]
    - isDeleted -> [Boolean - default:false]
    - createdAt -> [Date]
    - updatedAt -> [Date]

---------------------------------------

- OTP [one time password]:
    - code -> [String, required, length:6]
    - email -> [String, required, trim, lowercase]
    - expireAt -> [Date] e.g: 2026-11-24T02:15:00.701Z
    - createdAt -> [Date] e.g: 2026-11-24T02:10:00.701Z
