import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createPlayerScoreInfo({playerName, playerEmail, playerScore}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    playerName,
                    playerEmail,
                    playerScore,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async deleteUserInfo(postId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId
            )
            return true
        } catch (error) {
            alert("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getUserInfo(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            alert("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getUserData(email){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("playerEmail", [email])
                ]
            )
        } catch (error) {
            alert("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getHighScores(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.orderDesc("playerScore")
                ]
            )
        } catch (error) {
            console.log("Appwrite serive :: getHighScores :: error", error.message);
            return false
        }
    }
}


const appwriteService = new Service()
export default appwriteService