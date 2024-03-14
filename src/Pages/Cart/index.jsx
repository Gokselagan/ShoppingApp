import { Avatar, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { useState } from "react"


export const Cart = ({ carts, setCarts, count, setCount }) => {



    const handleRemoveClick = (id) => {

        const removedItem = carts.filter((item) => item.id !== id)

        setCarts(removedItem);

        setCount(count - 1)
    }

    const handleAddClick = (id) => {
        setCount(count + 1)
    }
    return (
        <Grid container sx={{ mt: 5 }} spacing={2} direction="column" alignItems="center">
            {carts.map((cart) => (
                <Grid item>

                    <Card
                        sx={{ maxWidth: 500, display: "flex", flexDirection: "row", justifyContent: "space-around" }}

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
                        </CardContent>
                    </Card>

                </Grid>
            ))}
        </Grid>
    )
}

