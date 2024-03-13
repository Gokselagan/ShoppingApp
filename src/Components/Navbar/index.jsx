import websiteImg from "../../WebsiteImg.jpg"
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./styles.css";





export const Navbar = () => {
    return (
        <Box>
            <AppBar position="static" color="inherit">
                <Toolbar sx={{ display: "flex"}}>
                    <Avatar src={websiteImg} alt="websiteImg" sx={{width: 56, height:56}}
                    component={Link}
                    to="/"
                    />

                    <Button component={Link} to="/cart" color="inherit" >
                        <i class="fa-solid fa-cart-shopping"></i>
                    </Button>

                    <Typography>
                        <Link to="/">
                            Shop
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}