class User{
    
    constructor(password,email,avatar,username,user_id = null){

        this.user_id = user_id;
        this.password = password;
        this.email = email;
        this.avatar = avatar;
        this.username = username;

    }
}

module.exports = {User};