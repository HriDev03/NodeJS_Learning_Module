class ApiResponse{
    constructor(statusCode,data,message="Sucess"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.sucess=statusCode<400 
    }
}

// 400-499 : client error
// 500-499 : server error
// 200-299 : sucessful
// 100-199 : informational response 