import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";

import Header from "./components/Header";
import AllQuotes from "./pages/AllQuotes";
import AddQuote from "./pages/AddQuote"
import Quote from "./pages/Quote"
import { useEffect } from "react";
import { getDataFirestore } from "./feature/slices/quotes";
import { quotesAction } from "./feature/slices/quotes";





function App() {

   const dispatch = useDispatch()

   useEffect(() => {
        dispatch(getDataFirestore())
   })
   
  return (
     <>
        <Header/>
        <Routes>
            <Route path="/" index element={<AllQuotes/>}/>
            <Route path="AllQuote" element={<AllQuotes/>}/>
            <Route path="AllQuote/quote/:id" element={<Quote/>}/>
            <Route path="AddQuote" element={<AddQuote/>}/>    
        </Routes>
     </>
  );
}

export default App;
