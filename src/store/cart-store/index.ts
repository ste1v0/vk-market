import { observable, action } from 'mobx'
import dataStore from '../data-store'

const cartStore = observable({
    cart: [] as { id: number, title: string, price: number, description: string, image: string, count? : number}[],
    countTotal: () => {
        return cartStore.cart.reduce((total, current) => total + (current.count ?? 0), 0)
    },

    sum: () => {
        return cartStore.cart.reduce((total, current) => total + (current.price * (current.count ?? 0)), 0)
    },

    isInCart: (id : number) => {
        return cartStore.cart.find(e => e.id === id)
    },

    removeIdFromCart: action((id : number) => {
        cartStore.cart = cartStore.cart.filter(e => e.id !== id)
    }),

    addToCart: action((id : number) => {
        const itemToBeAdded = dataStore.data.find(e => e.id === id)

        if (itemToBeAdded) {
            const addedItem = cartStore.cart.find(e => e.id === id)
            if (addedItem) {
                if (addedItem.count === 10) {
                    return
                }
                addedItem.count = (addedItem.count ?? 0) + 1
            } else {
                cartStore.cart.push(itemToBeAdded)
                cartStore.cart[cartStore.cart.length - 1].count = 1
            }
        }
    }),

    removeFromCart: action((id : number) => {
        const itemToBeRemoved = cartStore.cart.find(e => e.id === id)

        if (!itemToBeRemoved) {
            return
        }

        itemToBeRemoved.count = (itemToBeRemoved.count ?? 0) - 1

        if (itemToBeRemoved.count === 0) {
            cartStore.cart = cartStore.cart.filter(e => e.id !== id)
        }
    })
})

export default cartStore