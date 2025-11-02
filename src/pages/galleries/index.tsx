import { Pagination, CardImageData } from "../../components"
import { AppDispatch, RootState } from "../../state"
import { getGalleryImage } from "../../state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "../../utils/interface";
import { Box } from "@mui/material"
import PageHeading from "../../components/pageHeading";
import { IRepoServices } from "../../utils"

const Gallery = () => {
  
  const { userInfo: { data: { login, following } }, galleryImages } =
    useSelector((state: RootState) => state.repo);
  
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<IPageData>({
    username: '',
    page: 1,
    perPage: 10,
  });

  const fetchData = useCallback(() => {
    dispatch(getGalleryImage(state));
    console.log('getGalleryImage',galleryImages, galleryImages.data)

  }, [dispatch, state])
  useEffect(() => {
    fetchData();
  }, [fetchData])

  /* not using single request
  const galleryList = useSelector((state: any) => state.gallery);
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(false);
  function getData(){
    console.log("getDAt");
    try
    {
        let geturl = "https://fakerapi.it/api/v2/images?_quantity=10&_type=any&_height=300"

        axios.get(geturl)
        .then(response => {
            setLoading(true)
            const logdata = { isLoading : true, data: response.data.data };
            setData(logdata)
            console.log('data',response.data);
        }).then(b => {
            setLoading(false)
        });
    }
    catch(ex){
        console.error("An error has occurred: " + ex)
    }
  }
  useEffect(() => {
    getData();
  }, [])
  /**/

  return (
    <>
    <PageHeading  title={'Gallery'}></PageHeading>
      <Box sx={{ m: 11.5 }} />
      <CardImageData imagesdata={galleryImages} />
    </>
  )
}

export default Gallery
