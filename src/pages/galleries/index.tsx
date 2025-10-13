import { Pagination, CardImageData } from "../../components"
import { AppDispatch, RootState } from "../../state"
import { getGalleryImage } from "../../state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "../../utils/interface";
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

  return (
    <>
      <CardImageData imagesdata={galleryImages} />
    </>
  )
}

export default Gallery
