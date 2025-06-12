import conf from "../conf/conf";
import { Client, ID, Account, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteprojectid);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredimage, status, userid }) {
    try {
      const post = await this.databases.createDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        slug,
        { title, slug, content, featuredimage, status, userid }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async updatepost(slug, { title, content, featuredimage, status }) {
    try {
      const result = await this.databases.updateDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
        }
      );
    } catch (error) {
      console.log(error);
    }
    // slug is our document id
  }

  async deldocument({ slug }) {
    try {
      const deleteddocx = await this.databases.deleteDocument(
        conf.appwritedatabaseid,
        conf.appwritecollectionid,
        slug
      );
      return true
    } catch (error) {

      console.log(error);
      return false;
    }
  }

  async getpost({slug}){
    try {
        return await this.databases.getDocument(conf.appwritedatabaseid, conf.appwritecollectionid, slug);
        
    } catch (error) {
        console.log(error);
        return false
    }
  }

  async getposts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(conf.appwritedatabaseid,
            conf.appwritecollectionid, 
            queries // could add queries from here also


        )
    } catch (error) {
        console.log(error );
        return false
    }
    
  }

  async uploadfile(file){  // blob to be send actual file
    try {
        return await this.bucket.createFile(
            conf.appwritebucketid,
            ID.unique(),
            file
        )
        
    } catch (error) {
        console.log(error);
        return false
    }
  }

  async deletefile(fileid){
    try {
        await this.bucket.deleteFile(conf.appwritebucketid, fileid);
        return true;
        
    } catch (error) {
        console.log(error);
        return false
    }

  }

  async getfilepreview(fileid){
    return  this.bucket.getFilePreview(conf.appwritebucketid, fileid)  // not a promise
  }

}

const serviceobject = new Service();

export default serviceobject;
