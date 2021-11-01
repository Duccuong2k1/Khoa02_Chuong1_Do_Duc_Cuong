import { ADD_NUMBER, REMOVE_NUMBER } from "../types/burgerType";

const burgerState = {
    menu: [{
            name: "salad",
            price: 12,
            amount: 1,
        },
        {
            name: "cheese",
            price: 20,
            amount: 1,
        },
        {
            name: "beef",
            price: 50,
            amount: 1,
        },
    ],

    CakeBurger: {
        salad: [{ name: "salad", amount: 1 }],
        cheese: [{ name: "cheese", amount: 1 }],
        beef: [{ name: "beef", amount: 1 }],
    },
}

const burgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            {
                let menuAddUpdate = [...state.menu];
                let cakeBurgerUpdate = {...state.CakeBurger }
                let index = menuAddUpdate.findIndex(item => item.name === action.sanPham.name);
                let indexBurgerSalad = cakeBurgerUpdate.salad.findIndex(item => item.name === action.sanPham.name);
                let indexBurgerCheese = cakeBurgerUpdate.cheese.findIndex(item => item.name === action.sanPham.name);
                let indexBurgerBeef = cakeBurgerUpdate.beef.findIndex(item => item.name === action.sanPham.name);

                if (index !== -1) {
                    if (cakeBurgerUpdate.salad.length === 0 && indexBurgerSalad !== 1 && menuAddUpdate[index].amount === 0) {
                        cakeBurgerUpdate.salad.push({ name: "salad", amount: 1 })
                        menuAddUpdate[index].amount += 1

                    }
                    if (cakeBurgerUpdate.cheese.length === 0 && indexBurgerCheese !== 1 && menuAddUpdate[index].amount === 0) {
                        cakeBurgerUpdate.cheese.push({ name: "cheese", amount: 1 })
                        menuAddUpdate[index].amount += 1
                    }
                    if (cakeBurgerUpdate.beef.length === 0 && indexBurgerBeef !== 1 && menuAddUpdate[index].amount === 0) {
                        cakeBurgerUpdate.beef.push({ name: "beef", amount: 1 })
                        menuAddUpdate[index].amount += 1
                    }
                }
                if (index !== -1) {
                    if (indexBurgerSalad !== -1) {
                        cakeBurgerUpdate.salad.push({ name: "salad", amount: 1 })
                        menuAddUpdate[index].amount += 1
                    } else if (indexBurgerCheese !== -1) {
                        cakeBurgerUpdate.cheese.push({ name: "cheese", amount: 1 })
                        menuAddUpdate[index].amount += 1

                    } else if (indexBurgerBeef !== -1) {
                        cakeBurgerUpdate.beef.push({ name: "beef", amount: 1 })
                        menuAddUpdate[index].amount += 1


                    }
                }

                state.CakeBurger = cakeBurgerUpdate
                state.menu = menuAddUpdate

                return {...state }
            }
        case REMOVE_NUMBER:
            {
                let menuRemoveUpdate = [...state.menu];
                let cakeBurgerUpdate = {...state.CakeBurger }


                let index = menuRemoveUpdate.findIndex(item => item.name === action.sanPham.name);
                let indexBurgerSalad = cakeBurgerUpdate.salad.findIndex(item => item.name === action.sanPham.name);
                let indexBurgerCheese = cakeBurgerUpdate.cheese.findIndex(item => item.name === action.sanPham.name);
                let indexBurgerBeef = cakeBurgerUpdate.beef.findIndex(item => item.name === action.sanPham.name);

                if (index !== -1) {
                    if (menuRemoveUpdate[index].amount > 1) {
                        menuRemoveUpdate[index].amount -= 1
                        if (indexBurgerSalad !== -1) {
                            cakeBurgerUpdate.salad.splice(-1, 1)
                        } else if (indexBurgerCheese !== -1) {
                            cakeBurgerUpdate.cheese.splice(-1, 1)

                        } else if (indexBurgerBeef !== -1) {
                            cakeBurgerUpdate.beef.splice(-1, 1)

                        }
                    } else {
                        menuRemoveUpdate[index].amount = 0
                        if (menuRemoveUpdate[index].amount === 0) {
                            if (indexBurgerSalad !== -1) {
                                cakeBurgerUpdate.salad = []
                            } else if (indexBurgerCheese !== -1) {
                                cakeBurgerUpdate.cheese = []

                            } else if (indexBurgerBeef !== -1) {
                                cakeBurgerUpdate.beef = []

                            }
                        }

                    }
                }
                state.menu = menuRemoveUpdate
                state.CakeBurger = cakeBurgerUpdate
                return {...state }
            }

        default:
            return {...state }
    }
}

export default burgerReducer;