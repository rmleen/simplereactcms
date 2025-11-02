import { ReactNode } from "react"
import { AxiosResponse } from "axios"
import { PaletteMode } from "@mui/material";

export interface IUserLogin {
  username?: string;
  password?: string;
 }

export interface IUserAuth {
  data: {
    name: string;
    password: string;
    firstName: string;
    token: string;
    image:string;
    id:number;
  },
  isLogin: boolean,
  isLoading: boolean;
}

export interface IUserDetail {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
    image: string;
    role: string;
  },
  isLogin: boolean,
  isLoading: boolean;
}

export interface IPost {
  data: {
    posts:{
      id: number | null,
      title: string,
      body: string,
      image: string,
      views: number | null,
      userid: number | null
    },
    limit: number;
  },
  isLoading: boolean;
}

export interface IPostDetail {
  data: {
    posts:{
      id:number,
      title: string,
      body: string,
      image: string,
      views: number
    },
    limit: number;
  },
  isLoading: boolean;
}

export interface IUser {
  data: {
    name: string;
    
    avatar_url: string;
    bio: string;
    blog: string;
    public_repos: number;
    company: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    hireable: boolean;
    id: number;
    location: string;
    login: string;
    repos_url: string;
    starred_url: string;
    twitter_username: string | null;
    
    url: string;
  },
  isLoading: boolean;
}

export interface IRepo {
  data: {
    topics: string[];
    language: string;
    url: string;
    downloads_url: string;
    forks_count: number;
    html_url: string;
    id: number;
    name: string;
    description: string;
    open_issues_count: number;
    stargazers_count: number;
    default_branch: string;
  },
  isLoading: boolean;
}

export interface IPagination {
  data: {
    currentPage: number,
    itemsPerPage: number,
  },
  isLoading: boolean;
}

export interface ISavei {
  name: string
  bio: string
  profile: string
  repos: string
  img: string
}

export interface INavbar {
  name: string;
  location: string;
}

export interface IPageData {
  username: string;
  page: number;
  perPage: number;
}

export interface IFollowing {
  data: {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
  },
  isLoading: boolean;
}

export interface IFollowers {
  data: {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
  },
  isLoading: boolean;
}


export interface IGalleryimages {
  data: [],
  isLoading: boolean;
}

export interface IRepoState {
  preferredTheme: PaletteMode,
  pagination: IPagination,
  userAuth: IUserAuth,
  userDetail: IUserDetail,
  posts: IPost,
  postDetail: IPostDetail,
  //
  userInfo: IUser,
  repoInfo: IRepo,
  login_followers: IFollowers,
  login_following: IFollowing,

  galleryImages: IGalleryimages
}

export interface IRepoServices {
  getUserInfo(username?: string): Promise<AxiosResponse<any>>;
}

export interface IProps {
  children: ReactNode;
}
