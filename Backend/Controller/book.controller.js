import Book from "../Model/book.model.js"

export const getBook = async (req,resp)=>{
    try {
 const book = await Book.find()
 resp.status(200).json(book)
    } catch(error) {
   console.log("Error:", error)
   resp.status(500).json(error)
    }
}

