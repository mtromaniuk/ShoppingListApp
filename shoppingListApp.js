const name = 'Mateusz';
if (typeof Vue != 'undefined') {
    var vm = new Vue({
        el: "#app",
        data() {
            return {
                inputDataModel: '',
                products: [],
                filterShowBought: null,
                sortAllAsscending: true
            }
        },
        methods: {
            addNewProduct() {
                if (this.inputDataModel.length > 0) {
                    this.products.push({
                        name: this.inputDataModel,
                        price: 0,
                        isChecked: false,
                        productBought: false,
                    
                    });

                    this.inputDataModel = '';
                }
            },
            deleteItem(index) {
                this.products.splice(index, 1);
            },
            sortAllNames() {
                if (this.sortAllAsscending == true) {
                    this.products.name = this.products.sort((a, b) => a.name > b.name ? 1 : -1);

                    this.sortAllAsscending = !this.sortAllAsscending;
                } else {
                    this.products.name = this.products.sort((a, b) => a.name < b.name ? 1 : -1);

                    this.sortAllAsscending = !this.sortAllAsscending;
                }
            },

            sortAllPrices() {
                if (this.sortAllAsscending == true) {
                    this.products.price = this.products.sort((a, b) => a.price > b.price ? 1 : -1);

                    this.sortAllAsscending = !this.sortAllAsscending;
                } else {
                    this.products.price = this.products.sort((a, b) => a.price < b.price ? 1 : -1);

                    this.sortAllAsscending = !this.sortAllAsscending;
                }
            },

            shouldProductDisplay(productBought) {
                if (this.filterShowBought === null) {
                    return true;
                }
                return this.filterShowBought === productBought;
            }
        },
        computed: {
            calculatePrice() {
                const calculatedPrice = this.products.reduce((acc, product) => {
                    if (product.productBought) {
                        return acc + parseFloat(product.price);
                    }
                    return acc;
                }, 0);

                return calculatedPrice;
            },
            listOfCheckedElement() {
                const lsitOfElement = this.products.reduce((acc, product) => {
                    if (product.productBought) {
                        return acc + 1;
                    }
                    return acc;
                }, 0);
            
                return lsitOfElement;
            }
        }
    })
} else {
    document.body.innerHTML = `<div>Hej ${name} Aplikacja nie działa</div>`;
}