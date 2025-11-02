import { httpRequest, IRepoServices } from "../utils"
import { IPageData, IPost, IUser, IUserAuth,IUserDetail,IUserLogin } from "../utils/interface";


const BASE_URL = "https://api.github.com/users/"
//const BASE_URL = process.env.REACT_APP_BASE_URL

const currenturl = "https://dummyjson.com";

interface IParams {
  username?: string;
  page?: number;
  perPage?: number;
};



class RepoServices implements IRepoServices {
  getUserInfo(username: string) {
    return httpRequest.get(BASE_URL + username);
  }
  getImages() {
    //return httpRequest.get('https://fakestoreapi.com/products')
    return httpRequest.get('https://fakerapi.it/api/v2/images?_quantity=50&_type=any&_height=300')
  }

  getUserLogin(params: IUserLogin) {
    let obj = params;
    return httpRequest.post(currenturl + '/auth/login', obj , "")
  }

  getUserDetail(userid: number) {
    return httpRequest.get(currenturl + '/users/' + userid)
  }

  editUserDetail(params: IUserDetail, token:string) {
    let payload = {
      "firstName":params.data.firstName,
      "lastName":params.data.lastName,
      "email":params.data.email,
      "image":params.data.image
    }
    return httpRequest.put(currenturl + '/users/' + params.data.id, payload, token)
  }

  getLatestPosts() {
    return httpRequest.get(currenturl + '/posts')
  }

  getSinglePost(postid: string) {
    return httpRequest.get(currenturl + '/posts/' + postid)
  }

  addNewPost(params: IPost, token:string) {
    let payload = {
      "title":params.data.posts.title,
      "body":params.data.posts.body,
      "image":params.data.posts.image,
      "userId":params.data.posts.userid
    }
    return httpRequest.post(currenturl + '/posts/add', payload, token)
  }

  editPost(params: IPost, token:string) {
    let payload = {
      "title":params.data.posts.title,
      "body":params.data.posts.body,
      "image":params.data.posts.image
    }
    return httpRequest.put(currenturl + '/posts/' + params.data.posts.id, payload, token)
  }

  deletePost(postid: number, token:string) {
    return httpRequest.delete(currenturl + '/posts/' + postid, token)
  }

}

export default new RepoServices;
