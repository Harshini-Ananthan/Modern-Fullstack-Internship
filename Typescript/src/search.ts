const foods = [
    {
        id:1,
        name: 'Dosa',
        price: 70
    },
    {
        id: 2,
        name: 'Briyani',
        price: 599
    },
    {
        id: 3,
        name: 'Pizza',
        price: 199
    }
]

const search_item = "pi";
const filtered_item = foods.filter((food) => {
    return food.name.toLowerCase().includes(search_item.toLowerCase());
})
console.log(filtered_item);