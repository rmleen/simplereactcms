import { Container, Paper, Card, CardMedia, CardActions, Typography, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
import { AutofpsSelect } from "@mui/icons-material"

const CardImageData = ({ imagesdata }: any) => {
  console.log('login_data',imagesdata)
  const isLoading = imagesdata.isLoading;
  const carddata = imagesdata.data.data
  console.log(isLoading)
  
  return (
    <Container maxWidth={false} disableGutters >
      <Grid container sx={{width:'100%'}} mt={1} mb={2} alignItems="start" rowSpacing={4} columnSpacing={4}>
      {isLoading ? 
        carddata.map((item:any, i:number) => { 
          console.log(item);
          return (
          <Grid key={i}>
            <Card component={Paper} elevation={5} sx={{ width: { md: 400, sm: 200, xl: 650 } }}>
              <CardHeader title={item.title} />
              <CardMedia component="img" height="215" image={item.url} />
              <CardActions>
                <IconButton LinkComponent="a" href={item.url}>
                <AutofpsSelect />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          )})
        :(<Skeleton height="40vh" />)
      }
      </Grid>
    </Container>
  )
}

export default CardImageData

