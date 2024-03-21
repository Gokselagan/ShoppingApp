import { useEffect, useState } from "react"
import Grid from '@mui/material/Grid';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const Shop = ({ carts, setCarts, count, setCount }) => {
    const [products, setProducts] = useState([]);




    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    const addToCart = (product) => {

        if(carts.some(item => item.id === product.id)){
            const updatedCarts = carts.map((item)=>{
                if(item.id === product.id){
                    return {...item, count : item.count + 1};
                }
                return item;
            });
            setCarts(updatedCarts);
        }else {
            setCarts([...carts, {...product, count:1}]);
        }
        setCount(count + 1)
      
    }

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Goksel Store</h1>
            </div>
            <div className="products">
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5px" }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    sx={{ objectFit: "cover" }}
                                    image={product.image}
                                    alt={product.title}
                                />
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
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            Details
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "flex-start" }}
                                        >
                                            <Typography color="text.secondary">
                                                {product.description}
                                            </Typography>
                                            <Typography color="warning.dark">
                                                Rating Rate:
                                                {product.rating.rate}

                                            </Typography>
                                            <Typography
                                                color="warning.dark">
                                                Rating Coount:
                                                {product.rating.count}
                                            </Typography>
                                            <Typography
                                                color="success.main">
                                                Category:
                                                {product.category}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <IconButton
                                        color="primary"
                                        aria-label="add to shopping cart"
                                        size="small"
                                        sx={{ mt: 2 }}
                                        onClick={() => addToCart(product)}
                                    >
                                        Add To Chart
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}