import store from "./store";

export const nextFood = (n) => 
{
    console.log("store", store.getState().food.length - 1);
    let selectedFood = store.getState().selectedFood + n;
    if (selectedFood >= store.getState().food.length) 
    {
        selectedFood = 0;
    }
    else if (selectedFood === -1)
    {
        selectedFood = 18;
    }

    store.setState({
        selectedFood: selectedFood
    })
}

export const addCart = (index) =>
{
    let newCart = [...store.getState().cart]
    for(let i in newCart) 
    {
        let id = newCart[i].id;
        if(index === id)
        {
            newCart[i].quantity = newCart[i].quantity + 1;
            store.setState({
                cart: newCart
           })
            return;
        } 
    }
    newCart.push({
        id: index,
        quantity: 1
    })

    store.setState({
            cart: newCart
    })
}

export const getInfoProduct = (id) =>
{
    let prod = store.getState().food[id];
    return prod;
}

export const addPrices = () =>
{
    let sum = 0;
    for(let i of store.getState().cart)
    {
        let prod = store.getState().food[i.id];
        sum += (prod.price * i.quantity);
    }
    return sum;
}

export const emptyCart = () =>
{
    store.setState({
        cart: []
    })
}

export const deleteProduct = (index) => 
{    
    let list = [...store.getState().cart];
    for(let i in list)
    {
        if(list[i].id === index)
        {
            if(list[i].quantity > 1)
            {
                list[i].quantity -= 1;
                store.setState({
                    cart: list
                })
            }
            else
            {
                list.splice(i,1);
                store.setState({
                    cart: list
                })
            }
            return;
        }
    }
}

export const changeSelectedFood = (index) =>
{
    store.setState({
        selectedFood: index
    })
}

export const setQuantity = (id, value) =>
{
    value = parseInt(value);
    let newCart = [...store.getState().cart]
    for (let i of newCart)
    {
        if (i.id === id)
        {
            i.quantity = value;
            store.setState({
                cart: newCart
            })
            break;
        }
    }
} 