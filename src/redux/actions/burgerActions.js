import { ADD_NUMBER, REMOVE_NUMBER } from "../types/burgerType"

export const addNumber = (sanPham) => {
    return {
        type: ADD_NUMBER,
        sanPham
    }
}

export const removeNumber = (sanPham) => {
    return {
        type: REMOVE_NUMBER,
        sanPham
    }
}