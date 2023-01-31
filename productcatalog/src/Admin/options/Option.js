import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, TextField } from '@mui/material';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { useNavigate } from 'react-router-dom';
const style = {
  width: '100%',
  maxWidth: 1500,
  bgcolor: 'background.paper',
};
export default function Option() {
    const navigate=useNavigate()
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Product" /><Button onClick={()=>navigate("/adminproductlist")} variant='contained' color='error' startIcon={<PrivacyTipIcon></PrivacyTipIcon>} >Detay</Button>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Category" /><Button onClick={()=>navigate("/admincategorylist")} variant='contained' color='error' startIcon={<PrivacyTipIcon></PrivacyTipIcon>} >Detay</Button>
      </ListItem>
      <ListItem button>
        <ListItemText primary="Brand" /><Button onClick={()=>navigate("/adminbrandlist")} variant='contained' color='error' startIcon={<PrivacyTipIcon></PrivacyTipIcon>} >Detay</Button>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Color" /><Button onClick={()=>navigate("/admincolorlist")} variant='contained' color='error' startIcon={<PrivacyTipIcon></PrivacyTipIcon>} >Detay</Button>
      </ListItem>
      <ListItem button>
        <ListItemText primary="Offer" /><Button onClick={()=>navigate("/adminofferlist")} variant='contained' color='error' startIcon={<PrivacyTipIcon></PrivacyTipIcon>} >Detay</Button>
      </ListItem>
      <ListItem button>
        <ListItemText primary="Using Status" /><Button onClick={()=>navigate("/adminusingstatuslist")} variant='contained' color='error' startIcon={<PrivacyTipIcon></PrivacyTipIcon>} >Detay</Button>
      </ListItem>
    </List>
  );
}