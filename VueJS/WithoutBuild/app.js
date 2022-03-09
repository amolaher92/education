/*
* Create Vue instance object
* */
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            inventory: 22,
            details: ['50% cotton', '30% Wool', '20% Polyester'],
            variant: [
                {id: 123, color: 'green', image: './images/socks_green.jpg', stock: 50},
                {id: 124, color: 'blue', image: './images/socks_blue.jpg', stock: 0}
            ],
            cart: 0,
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variant[this.selectedVariant].image
        },
        inStock() {
            return this.variant[this.selectedVariant].stock
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeToCart() {
            this.cart -= 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    }
});

app.mount('#app')
