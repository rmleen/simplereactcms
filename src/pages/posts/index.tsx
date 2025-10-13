import { Pagination } from "../../components"
import { AppDispatch, RootState } from "../../state"
import { getLatestPost } from "../../state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "../../utils/interface";
import CardPostData from "../../components/cardPostData";

const Posts = () => {
  const { userInfo: { data: { login, followers } }, posts } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 10,
  });

  const fetchData = useCallback(() => {
    dispatch(getLatestPost(state));
    console.log('getLatestPost',posts,posts.data.limit)
  }, [dispatch, state])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <CardPostData postdata={posts} />
      <Pagination totalEntries={posts.data.limit} setPageData={setState} />
    </>
  )
}

export default Posts
