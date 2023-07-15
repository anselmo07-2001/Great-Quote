
import { createSlice } from "@reduxjs/toolkit";
import { arrayUnion, collection, doc, getDocs, updateDoc, addDoc, arrayRemove } from "firebase/firestore";


import { db } from "../../firebase.config";




const quotes = createSlice({
    name:"quotes",
    initialState: [],
    reducers: {
        loadData(state,action) {

            let initialState = state.concat(action.payload)
            
            let modifiedState = initialState.map((quote) => {
                const date = new Date(quote.createdAt.seconds * 1000)
                return {
                    ...quote,
                    dateCreated: date
                }
            })

            return state.concat(modifiedState)
        },
        addQuotes(state,action) {

            action.payload = {...action.payload, 
                              dateCreated: new Date(action.payload.createdAt.seconds * 1000)}

            if (action.payload._sortStat === "Descending") {
                delete action.payload._sortStat

                console.log("hit", action.payload)
                state.unshift(action.payload)
            }

            if (action.payload._sortStat === "Ascending") {
                delete action.payload._sortStat
                console.log("hit going to ascending", action.payload)
                state.push(action.payload)
            }
        },
        addComment(state,action) {

            const { quoteId } = action.payload
            const { comment, createdAt, id } = action.payload.quoteComment
            
            const commentData = {
                id: id,
                comment: comment,
                createdAt: createdAt
            }
            
            let quote = state.find((quote) => quote.id === quoteId)

            if (!quote.comments) {
                quote["comments"] = []
                quote["comments"].unshift(commentData)
                return
            }

            quote.comments.unshift(commentData)
       },
       orderQuoteDescending(state) {

            return state.sort((a,b) => {
                return new Date(b.dateCreated) - new Date(a.dateCreated)
            })

       },
       orderQuoteAscending(state) {    

            return state.sort((a,b) => {
                return new Date(a.dateCreated) - new Date(b.dateCreated)
            })

       }
    }
})

//     const sortedComments = refineComments.sort((a,b) => {
//             return new Date(b.createdAt) - new Date(a.createdAt)
//     })


export const addQuote = (action) => {
    return async (dispatch) => {
        console.log(action)
        const collectionRef = collection(db,"quotes")

        const doc = await addDoc(collectionRef, action.payload)
        
        action.payload["id"] = doc.id
    
        dispatch(quotes.actions.addQuotes(action.payload))
    }
}


export const getDataFirestore = () => {
    return async (dispatch,getState) => {
        const collectionRef = collection(db,"quotes")
        const docsRef = await getDocs(collectionRef)

        let data = docsRef.docs.map((doc) => ({...doc.data(), id: doc.id}))
     
        dispatch(quotes.actions.loadData(data))
        dispatch(quotesAction.orderQuoteDescending())
    }
}

export const addCommentAction = (action) => {
    return async (dispatch) => {
        console.log("id here",action.payload.quoteId)
        
        const docRef = doc(db, "quotes", action.payload.quoteId)
        console.log(docRef.exist)

        const newUpdateValue = {
            id: action.payload.commentId,
            comment: action.payload.comment,
            createdAt: action.payload.createdAt
        }

        console.log(newUpdateValue)


        //add element in th array by default, comments array is not exist 
        // only it created comment array field onces an element is created
        await updateDoc(docRef, {
            comments: arrayUnion({...newUpdateValue}),
        })
        
       
        dispatch(quotes.actions.addComment({
            quoteId: action.payload.quoteId,
            quoteComment: newUpdateValue
        }))


    }
}

export const removeComment = (action) => {
    return async() => {
       
       const docRef  = doc(db, "quote", action.quoteId)
       await updateDoc(docRef, {
           comments : arrayRemove([0])
       })
    }
}


export const quotesAction = quotes.actions
export default quotes

// {
//     id: 23123123123,
//     quote: "Time is gold",
//     author: "Jun Rivera",
//     comments: [
//         {
//             id:123123,
//             comment:"Yeah this is true haha",
//             createdAt: '2022-07-14T07:20:22.320Z'
//         },
//         {
//             id:23123,
//             comment:"I will used time effiently now",
//             createdAt: '2022-07-15T07:20:22.320Z'
//         },
//     ]
// },
// {
//     id: 232342342,
//     quote: "Meoww Mwoewnjnjnjnjn",
//     author: "Mingg",
//     comments: []
// },