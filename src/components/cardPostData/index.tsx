import { Container, Paper, Card, CardContent,Typography, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
import { AddBox } from "@mui/icons-material"
import { Link } from "react-router-dom";
const CardPostData = ({ postdata }: any) => {
  const { isLoading, data } = postdata;

  console.log('postdata',postdata)
  console.log('postdatadata',data.posts)
  return (
    <Container>
      {isLoading && data.posts !== undefined && data.posts !== null ? (
        <Grid container mt={1} mb={2} alignItems="start" rowSpacing={4} columnSpacing={4}>
          {Object.values(data.posts).map((items: any) => {
            console.log('items', items)
            const { id, title, body, views } = items
            return (
              <Grid key={id}>
                <Card component={Paper} elevation={5} sx={{ width: { md: 350, sm: 200, xl: 500 } }}>
                  <Link to={`/posts/detail/${id}`}>
                  <CardHeader title={title} />
                  </Link>
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {body}
                  </Typography>
                  </CardContent>
                  <CardActions>
                    
                    <IconButton LinkComponent="a" >
                    </IconButton>
                    
                  </CardActions>
                </Card>
              </Grid>
            )
          })}

        </Grid>
      ) : <Skeleton height="50vh" />}
    </Container>
  )
}

export default CardPostData

