

export const Cart = ({ carts, setCarts }) => {

    console.log("carttaki kart: ", carts)
    return (
        <>
            {carts.map((cart) => (
                <div style={{ marginTop: "20px" }}>
                    {cart.title}
                    {cart.price}
                    <img src={cart.image} height="80" />
                </div>
            ))}
        </>
    )
}