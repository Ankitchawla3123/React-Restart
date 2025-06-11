import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

// single client once can also be used, no need to create new instance of it again and again as it only holds email and password meanwhile account is seperate and a session to be formed so must make different accounts for each instance/ login/ signup

export class Authservice {
    client = new Client();
    account;
    // we can declare the client here also but we won't as thats kinda hardcode always made so instead of that we will use constructor function as whenever the object is made then client is loaded with its value of project id and the end point
    constructor (){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojectid);
        this.account=new Account(this.client);
    }

    async createAccount({email, password,name}){

        try {
            const userAccount = await this.account.create(ID.unique(),email, password,name )
            if (userAccount) {
                // call another method to do login or successfull method return that ur account created go to login 
                return this.login({email,password}); // calling the method login directly once signup is done
            }
            else{
                return userAccount
            }
        } catch (error) {
            throw error;
            
        }        
    }

    async login ({email, password}){
        try {
            session = await this.account.createEmailPasswordSession(email,password)
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentuser(){
        
        try {
            return await this.account.get(); // this doesn't handle empty account and use if else
        } catch (error) {
            throw error; // or console log the rror mostly when service not connected
        }
        return null // if issue in try catch or failed to get acc then return null / account not connected yet
    }

    async logout(){ // delete session
        try {
            await this.account.deleteSessions() // will logout from all 
            // if use delete session must use this.account.deleteSession('current') or session id
        } catch (error) {
            console.log("appwrite service :: logout :: error", error);
            
        }

    }


}


const authService= new Authservice();

export default new authService;  // object will have its methods 