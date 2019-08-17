//Book class:Represnts a book

class Book{

    constructor(title,author,isbn){
        //method that runs when we instatiate a book
        //use this to assign the parameter values to the object property    
        this.author=author;
        this.title=title;
        this.isbn=isbn;
    }
}

//UI class: handle UI tasks
class UI{

    static displayBooks(){
        const StoredBooks=[
            {
                title:"C Programming",
                author:"Dennis Ritchie",
                isbn:"674398"
            },
            {
                title:"Java Programming",
                author:"Ramya",
                isbn:"893493"
            },
            {
                title:"JavaScript Fundamentals",
                author:"Brad Traversy",
                isbn:"754958"
            }

        ];

       
       
            const books=StoredBooks;
            books.forEach((book)=>UI.addBookToList(book));
    }
            static addBookToList(book){
                //selecting the placeholder from the UI where we will add the books
                const list=document.querySelector("#book-list");

                //creating a new row for each book
                const row=document.createElement('tr');
                row.innerHTML=`<td> ${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="btn btn-danger btn-sm delete" id="deleteBtn">X</a></td>
                `;
                list.appendChild(row);
            }
            static clearFields(){
                document.querySelector('#title').value='';
                document.querySelector('#author').value='';
                document.querySelector('#isbn').value='';
            }
            static deleteBook(e){
                if(e.classList.contains('delete')){
                    e.parentElement.parentElement.remove();
                }
            }

    }



//Store class: Handles Local Storage;



//Events: Add Book, Delete Book

document.addEventListener("DOMContentLoaded",UI.displayBooks);

document.querySelector('#book-form').addEventListener("submit",(e)=>{
    //prevent the actual submit
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;

    //Instatiate Book
    const book=new Book(title,author,isbn);


UI.addBookToList(book);
UI.clearFields();
});
document.querySelector('#book-form').addEventListener('click',(e)=>{

    UI.deleteBook(e);
});

