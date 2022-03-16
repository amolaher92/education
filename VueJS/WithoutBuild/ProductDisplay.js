app.component('review-user', {
    template: `
         <form v-on:submit.prevent="onSubmit">
            <h3>Leave review</h3>
            <label for="name" class="text-5xl">Name:</label>
            <input type="text" id="name" v-model="name">
            <label for="review">Review</label>
            <textarea id="review" v-model="textarea"></textarea>
            <label for="rating"></label>
            <select id="rating" v-model.number="rating">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
            </select>
            <input type="button" value="submit">
        </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = '',
                this.review = '',
                this.rating = null
        },
    }
});
