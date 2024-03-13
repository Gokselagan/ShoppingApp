import websiteImg from "../../WebsiteImg.jpg"
import { AppBar, Avatar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./styles.css";





export const Navbar = () => {
    return (
        <Box>
            <AppBar position="static" color="inherit">
                <Toolbar sx={{ display: "flex", justifyContent:"space-between" }}>
                    <Avatar src={websiteImg} alt="websiteImg" sx={{ width: 56, height: 56 }}
                        component={Link}
                        to="/"
                    />
                    <Stack sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <Button component={Link} to="/cart" color="inherit">
                            <ShoppingCartIcon fontSize="large"/>
                        </Button>

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