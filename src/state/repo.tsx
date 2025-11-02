import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { IRepoState } from "../utils";
import RepoServices from "../services";
import { IPageData, IUserAuth, IUserLogin, IPost, IUserDetail } from "../utils/interface";

const initialState: IRepoState = {
  userInfo: {
    data: {
      name: "",
      avatar_url: "",
      bio: "",
      blog: "",
      company: "",
      followers: 0,
      followers_url: "",
      following: 0,
      following_url: "",
      hireable: false,
      id: 0,
      location: "",
      public_repos: 0,
      login: "",
      repos_url: "",
      starred_url: "",
      twitter_username: null,
      url: "",
    },
    isLoading: false,
  },
  repoInfo: {
    data: {
      topics: [],
      language: "",
      url: "",
      downloads_url: "",
      forks_count: 0,
      html_url: "",
      id: 0,
      name: "",
      description: "",
      open_issues_count: 0,
      stargazers_count: 0,
      default_branch: "",
    },
    isLoading: false,
  },
  login_followers: {
    data: {
      id: 0,
      login: "",
      html_url: "",
      avatar_url: "",
    },
    isLoading: false,
  },
  login_following: {
    data: {
      id: 0,
      login: "",
      html_url: "",
      avatar_url: "",
    },
    isLoading: false,
  },
  userAuth: {
    data: {
      name: "",
      password: "",
      firstName: "",
      token: "",
      image: "",
      id:0
    },
    isLogin: false,
    isLoading: false,
  },
  userDetail: {
    data: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      role: "",
    },
    isLogin: false,
    isLoading: false,
  },
  pagination: {
    data: {
      currentPage: 1,
      itemsPerPage: 6,
    },
    isLoading: false,
  },
  posts: {
    data: {
      posts: {
        id: 0,
        title: "",
        body: "",
        image: "",
        views: 0,
        userid: 0
      },
      limit:0
    },

    isLoading: false,
  },
  postDetail:{
    data: {
      posts: {

        id: 0,
        title: "",
        body: "",
        image: "",
        views: 0,
      },
      limit:0
    },

    isLoading: false,
  },
  galleryImages: {
    data: [],
    isLoading: false,
  },
  preferredTheme: "dark",
}

// fetching user data
export const getUser = createAsyncThunk("getUser", async (username?: string) => {
  try {

    if (username) {
      const res: AxiosResponse = await RepoServices.getUserInfo(username)
      return res.data;
    }
    else {
      let username = "DSDmark";
      const res: AxiosResponse = await RepoServices.getUserInfo(username);
      return res.data;
    }
  } catch (err) {
    console.log(err)
    let username = "DSDmark";
    const res: AxiosResponse = await RepoServices.getUserInfo(username);
    return res.data;
  }
})

export const getUserAuth = createAsyncThunk("getUserAuth", async (params: IUserLogin, { rejectWithValue }) => {
  let res: AxiosResponse;
  try {
      res = await RepoServices.getUserLogin(params)
      console.log("resuserdata",res.data)
      return res.data;
    
  } catch (err) {
    return rejectWithValue("Failed to retrieve");
  }
})

export const editUserDetail = createAsyncThunk("editUserDetail", async (params: IUserDetail, { rejectWithValue }) => {
  let res: AxiosResponse;
  try {
      res = await RepoServices.editUserDetail(params, "")
      return res.data;
    
  } catch (err) {
    return rejectWithValue("Failed to retrieve");
  }
})


export const getLatestPost = createAsyncThunk("getAllPost", async (params: IPageData, { rejectWithValue }) => {
  let res: AxiosResponse;
  try {
      res = await RepoServices.getLatestPosts()
      return res.data;
    
  } catch (err) {
    return rejectWithValue("Failed to retrieve");
  }
})

export const getSinglePost = createAsyncThunk("getSinglePost", async (postId: string, { rejectWithValue }) => {
  let res: AxiosResponse;
  try {
      res = await RepoServices.getSinglePost(postId)
      return res.data;
    
  } catch (err) {
    return rejectWithValue("Failed to retrieve");
  }
})

export const addNewPost = createAsyncThunk("addNewPost", async (params: IPost, { rejectWithValue }) => {
  let res: AxiosResponse;
  try {
      res = await RepoServices.addNewPost(params, "")
      return res.data;
    
  } catch (err) {
    return rejectWithValue("Failed to retrieve");
  }
})

export const getGalleryImage = createAsyncThunk("getGalleryImage", async (params: IPageData) => {
  let res: AxiosResponse;
  try {
      res = await RepoServices.getImages()
      console.log("restdata",res.data)
      return res.data;
    
  } catch (err) {
    res = await RepoServices.getImages();
    console.log("errorres",res.data)
    return res.data;
  }
})

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.preferredTheme = action.payload.data;
    },
    setPageValue: (state, action) => {
      state.pagination.data.itemsPerPage = action.payload.perPage
      state.pagination.data.currentPage = action.payload.page
    },
    /*
    setGallery: (state, action)=>{
      state.galleryImages.data = action.payload
      state.galleryImages.isLoading = action.payload.status == 200 ? true : false
    }
    */
  },
  extraReducers: (builder) => {
   
    builder.addCase(getUser.fulfilled, (state, action) => {
      return {
        ...state, userInfo: { data: { ...action.payload }, isLoading: true }
      }
    });
    
    builder.addCase(getUser.pending, (state) => {
        state.userInfo.isLoading = false;
      });
    builder.addCase(getUser.rejected, (state) => {
        state.userInfo.isLoading = false;
      });
      
    builder.addCase(getUserAuth.fulfilled, (state, action) => {
        let m = {
          name: "",
          password: "",
          firstName: "",
          token: "",
          image: "",
          id:0
        };
        let islogin=false;
        console.log('build', action.payload)
        if ('accessToken' in action.payload && action.payload.accessToken !== undefined && action.payload.accessToken != null ){
          m.id = action.payload.id;
          m.token = action.payload.accessToken;
          m.name = action.payload.username;
          m.image = action.payload.image;
          m.firstName = action.payload.firstName;
          m.id = action.payload.id;
          islogin = true;
          console.log('buildm', m)
        }else if ('message 'in action.payload){
          m.name = action.payload.message;
        };
        return { ...state, userAuth: { data: m, isLogin: islogin, isLoading: true } };
      });
    builder.addCase(getUserAuth.pending, (state) => {
        state.userAuth.isLoading = false;
      });
    builder.addCase(getUserAuth.rejected, (state) => {
        state.userAuth.isLoading = true;
        state.userAuth.data.name = "Invalid";
      });


      builder.addCase(getLatestPost.fulfilled, (state, action) => {
        return { ...state, posts: { data: { ...action.payload }, isLoading: true } }
      });
      builder.addCase(getLatestPost.pending, (state) => {
        state.posts.isLoading = false;
      });
      builder.addCase(getLatestPost.rejected, (state) => {
        state.posts.isLoading = false;
      });

      builder.addCase(getSinglePost.fulfilled, (state, action) => {
        let m = {
          posts: {
            id: 0,
            title: "",
            body: "",
            image: "",
            views: 0,
            userid: 0,
          },
          limit:0
        }
        if ('id' in action.payload && action.payload.id !== undefined && action.payload.id != null ){
          m.posts.id = action.payload.id;
          m.posts.title = action.payload.title;
          m.posts.body = action.payload.body;
          m.posts.image = action.payload.image;
          m.posts.views = action.payload.views;
        }
        return { ...state, postDetail: { data: m, isLoading: true } }
      });
      builder.addCase(getSinglePost.pending, (state) => {
        state.postDetail.isLoading = false;
      });
      builder.addCase(getSinglePost.rejected, (state) => {
        state.postDetail.isLoading = false;
      });

      builder.addCase(addNewPost.fulfilled, (state, action) => {
        let m = {
          posts: {
            id: 0,
            title: "",
            body: "",
            image: "",
            views: 0,
          },
          limit:0
        }
        if ('id' in action.payload && action.payload.id !== undefined && action.payload.id != null ){
          m.posts.id = action.payload.id;
          m.posts.title = action.payload.title;
        }
        return { ...state, postDetail: { data: m, isLoading: true } }
      });
      builder.addCase(addNewPost.pending, (state) => {
        state.postDetail.isLoading = false;
      });
      builder.addCase(addNewPost.rejected, (state) => {
        state.postDetail.isLoading = false;
      });


      builder.addCase(getGalleryImage.fulfilled, (state, action) => {
        return { ...state, galleryImages: { data: { ...action.payload }, isLoading: true } }
      });
      builder.addCase(getGalleryImage.pending, (state) => {
        state.galleryImages.isLoading = false;
      });
      builder.addCase(getGalleryImage.rejected, (state) => {
        state.galleryImages.isLoading = false;
      });
/**/
  }
})

export const { setTheme, setPageValue } = repoSlice.actions

export default repoSlice.reducer

