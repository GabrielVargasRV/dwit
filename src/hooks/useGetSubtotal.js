import { useGetProductById } from './useGetProductById'

export const useGetSubtotal = async (cart,callback) => {

    const getData = async () => {
        let sum = 0
        let products = []
        for (let i = 0; i < cart.length; i++) {
            const res = await useGetProductById(cart[i].id)
            if (res) {
                let price = res.sizes.filter(e => e.size === cart[i].size)[0].price
                price = parseInt(price)
                sum += price
                products.push({
                    ...res,
                    size:cart[i].size,
                    price: price
                })
            }
        }
        return {subTotal:sum,products:products}
    }

    let {subTotal,products} = await getData()
    if(callback) callback({subTotal,products})

    return {subTotal,products}
}