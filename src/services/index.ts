import { httpRequest, IRepoServices } from "../utils"
import { IPageData, IUser, IUserAuth,IUserLogin } from "../utils/interface";


const BASE_URL = ""
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
  getRepo(params: IParams) {
    const { username, page, perPage } = params;
    return httpRequest.get(BASE_URL + username + `/repos?type=owner&sort=stars&direction=asc&page=${page}&per_page=${perPage}`)
  }

  getImages() {
    return httpRequest.get('https://fakerapi.it/api/v2/images?_quantity=50&_type=any&_height=300')
  }

  getUserLogin(params: IUserLogin) {
    let obj = params;
    return httpRequest.post(currenturl + '/auth/login', obj)
  }

  getUserDetail(userid: number) {
    return httpRequest.get(currenturl + '/users/' + userid)
  }

  getLatestPosts() {
    return httpRequest.get(currenturl + '/posts')
  }

  addNewPost(params: IParams) {
    const { username, page, perPage } = params;
    return httpRequest.post(currenturl + '/posts/add', params)
  }
  
  deletePost(postid: number) {
    return httpRequest.delete(currenturl + '/posts/' + postid)
  }

}

export default new RepoServices;
