import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export const SideMenu: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }} 
              src='https://lh3.googleusercontent.com/blw0M7fYa_LcufRUmxxam7CJoiYDVJPlRFPkbPh_Ap9w_0mdI-dNhAulLckUaE0lZw5Iyx11nZciPnHhNkhxhk4MwWONnnu80NyOoSzoCIAVrpNLjw5xinDZ6BHYGLMsVYYoJYtHdM09chJaC1cqovV6346Hq69brINRO8oo-U5za3d0PdrYkm_mtpuuuErMQTxC9ecNFc34AMIlk0quAaexW-UOfWYcG3nRxMfJnqq3Qhkfilfrk3xHW1vwvh20BDUW3RLlYP_zpxHuMT9UbZZ07JFqz3l_gn9VpRIZxoH_oLWyvDUTFQO8E6-43Zk58i51A7xJ1h4qcBEf4lfZvP3QMrGdqyuYUrBZWflMuN1r7MatVDR4U-U9JXUVYC6ydcwFm4xO34seWnlxhmrqTe9hi2qaSErQXSIZw27N_8jviCMgCrZWN8bkUGqEBwGH6N6ZGqtIVCJauMLXrzk1dzonL0tqd-ROQRMbym8tvbzCJ_0e2oLxw3nznWWbYFJ-gaMdYUYq3SRrOzy8rN5oD76-qqMhqBMXaKpdY0maOR8Llm74J19J9iPXzBwNMwWob0YCRIgd9-NbAh1cS7jmCQuJmyOecgehwgW7FJ4GDp51g_gWmSnH1dULHVx5atpdEo4OnAeUXvv1oW_afURkwjcRpOiJMerBMWlVrV2yeqq4iY4sEe4tpdEBYTDUQGqW_kjW-yLZLfPBIeXOQmZb68Dydj8Iyp-FG1OBrzmtg5uF57ZgWlSKPvRVxMA=w700-h933-no?authuser=0' />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </List>

          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={theme.spacing(28)} >
        { children }    
      </Box>
    </>
  );
};