import { useEffect, useState } from "react"
import Grid from '@mui/material/Grid';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";




export const Shop = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Goksel Store</h1>
            </div>
            <div className="products">
                <ul>
                    {
                        products.map((product) => (
                            <Box
                                key={product.id}
                                spacing={2}
                            >
                                {/* <img src={product.image} />
                                {product.title}
                                {product.category}
                                {product.price}
                                {product.rating.rate}
                                {product.rating.count}
                                {product.description} */}

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Card>
                                            <CardMedia component="img"
                                                height="180" image={product.image} />
                                        </Card>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography color="GrayText">
                                                Price
                                                ${product.price}
                                            </Typography>
                                            <Accordion>
                                                <AccordionSummary
                                                >
                                                    Details
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Description:
                                                        {product.description}
                                                    </Typography>
                                                    <Typography>
                                                        Rating:
                                                        {product.rating.rate}
                                                        {product.rating.count}
                                                    </Typography>
                                                    <Typography>
                                                        Category:
                                                        {product.category}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <IconButton>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                </ul>
            </div>
        </div>
    )
}