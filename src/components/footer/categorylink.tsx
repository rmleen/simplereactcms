import { Stack, Link as MuiLink, List, ListItemText, ListItem } from "@mui/material";

const Categorylink = () => {
  return (

    
    <Stack direction="row" justifyContent="space-around">
      <List >
        <ListItem >
          <ListItemText>
            About
          </ListItemText>
        </ListItem>
        
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            Author: Lee
          </MuiLink>
        </ListItem>
      </List>
    </Stack>
  )
}

export default Categorylink
