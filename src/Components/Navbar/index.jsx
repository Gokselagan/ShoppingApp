import websiteImg from "../../WebsiteImg.jpg"
import { AppBar, Avatar, Badge, Box, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





export const Navbar = ({count}) => {

   
    return (
        <Box>
            <AppBar position="static" color="inherit">
                <Toolbar sx={{ display: "flex", justifyContent:"space-between" }}>
                    <Avatar src={websiteImg} alt="websiteImg" sx={{ width: 56, height: 56 }}
                        component={Link}
                        to="/"
                    />
                    <Stack sx={{display:"flex", flexDirection:"row", alignItems:"center", gap:3}}>
                        <Badge showZero badgeContent={count} component={Link} color="secondary" to="/cart">
                            <ShoppingCartIcon fontSize="large"/>
                        </Badge>

                        <Typography sx={{fontWeight:"800", fontSize:"24px"}}>
                            <Link to="/">
                                Shop
                            </Link>
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}