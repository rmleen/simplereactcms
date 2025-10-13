import { createSlice, createAsyncThunk   } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
//import { IRepoState } from "../utils";
import RepoServices from "../services";
import { IPageData } from "../utils/interface";



// fetching data
export const getAllBook = createAsyncThunk("getAllBook",
  async (params: IPageData, { rejectWithValue }) => {
  let res: AxiosResponse;
  try {
      res = await RepoServices.getImages()
      console.log("testingres",res.data)
      return res.data;
    
  } catch (err) {
    res = await RepoServices.getImages();
    console.log("errorres",res.data)
    return rejectWithValue("Failed");
  }
})

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
      list: [],
      isLoading: false
  },
  reducers: {
      addMedia(state, action) {
          console.log("inside add media: ", action.payload)
          if (action.payload) {
            state.isLoading = true
              //state.push(action.payload)
          }
      }
  },
  /*
  extraReducers: (builder) =>{
    builder.addCase(getAllGalleryImage.fulfilled, (state:any) => {
      state.isLoading = false;
      console.log("extraloding0") 
    });
    builder.addCase(getAllGalleryImage.pending, (state:any) => {
      state.isLoading = true;
      console.log("extraloding1") 
    });
    builder.addCase(getAllGalleryImage.rejected, (state:any) => {
      state.isLoading = false;
      console.log("extraloding2") 
    });
    
  }
  */
  })
export default gallerySlice




