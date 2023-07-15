import { configureStore } from "@reduxjs/toolkit"
import quotes from "../slices/quotes"

const store = configureStore({
    reducer: {
        quotes: quotes.reducer
    }
})

export default store