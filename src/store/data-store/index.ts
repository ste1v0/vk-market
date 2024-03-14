import { observable, action } from 'mobx'

const dataStore = observable({
    data: [] as { id: number, title: string, price: number, description: string, image: string } [],
    isLoading: false,

    fetchData: action(() => {
        dataStore.isLoading = true

        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Whoops! Something went wrong')
                }

                return res.json()
            })
            .then(data => {
                dataStore.data = data.slice(0, 8)
            })
            .catch(error => {
                console.log('Error fetching data: ', error)
            })
            .finally(() => {
                dataStore.isLoading = false
            })
    })
})

export default dataStore