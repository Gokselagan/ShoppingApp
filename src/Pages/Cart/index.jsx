import { Avatar, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";


export const Cart = ({ carts, setCarts, count, setCount }) => {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        carts.forEach((item) => {
            total += item.price * item.count;
        });
        setTotalPrice(total.toFixed(2));
    }, [carts]);

    const handleRemoveClick = (id) => {
        const updatedCarts = carts.map((item) => {
            if (item.id === id && item.count > 0) {
                return { ...item, count: item.count - 1 };
            }
            return item;
        }).filter(item => item.count > 0);
        setCarts(updatedCarts);
        setCount(count - 1);
    };

    const handleAddClick = (id) => {
        const updatedCarts = carts.map((item) => {
            if (item.id === id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        setCarts(updatedCarts);
        setCount(count + 1);
    };



    return (
        <Grid container sx={{ mt: 5 }} spacing={2} direction="column" alignItems="center">
            {carts.map((cart) => (
                <Grid item>

                    <Card
                        sx={{ maxWidth: 500, display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100vw" }}

                    >
                        <Avatar
                            alt={cart.title}
                            src={cart.image}
                            sx={{ width: 120, height: 120 }}
                        />
                        <CardContent>
                            <Typography>{cart.title}</Typography>
                            <Typography>Price: ${cart.price}</Typography>
                            <Button onClick={() => handleAddClick(cart.id)}>Add</Button>
                            <Button onClick={() => handleRemoveClick(cart.id)}>Remove</Button>
                            <Typography>Count: {cart.count}</Typography>
                        </CardContent>
                    </Card>

                </Grid>
            ))}
            {totalPrice > 0 ? <Typography>Your Total: ${totalPrice}</Typography> : <Typography fontSize="24px" fontWeight="700" color="error">Your Basket is Empty</Typography>}
        </Grid>
    )
}

