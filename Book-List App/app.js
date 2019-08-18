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

       
       
            const books=Store.getBooks();
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

            static showAlertMessage(message,className){
                //creating element
                const div=document.createElement('div');
                div.className=`alert alert-${className}`;
                //text node for adding text to the element
                div.appendChild(document.createTextNode(message));
                //inserting the element before form
                const container=document.querySelector('.container');
                const form=document.querySelector('#book-form');
                //first arg- the new child, second arg-child to be inserted
                container.insertBefore(div,form);
                setTimeout(function(){
                    document.querySelector('.alert').remove();
                },3000);

            }

    }



//Store class: Handles Local Storage
//We cannot store objects in local storage, it has to  be a string so we use JSON.stringify and JSON.parse
class Store{

    static getBooks(){
        let books;
        if(localStorage.getItem('books')==null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;

    }
    static addBook(book){
        const list=Store.getBooks();
        list.push(book);

        localStorage.setItem('books',JSON.stringify(list));

    }
    static removeBook(isbn){
        const list=Store.getBooks();

        list.forEach((book,index)=>{
            if(book.isbn==isbn){
                list.splice(index,1);
            }
        });

        localStorage.setItem('books',JSON.stringify(list));

    }
}



//Events: Add Book, Delete Book

document.addEventListener("DOMContentLoaded",UI.displayBooks);

document.querySelector('#book-form').addEventListener("submit",(e)=>{
    //prevent the actual submit
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;

    if(title=='' || author==''|| isbn==''){
        UI.showAlertMessage("Please fill all the fields","danger");
    }
    else{
        const book=new Book(title,author,isbn);


        UI.addBookToList(book);
        Store.addBook(book);
        UI.clearFields();
        UI.showAlertMessage("Book Added Successfully","success");
    }
    //Instatiate Book
   
});

//event propogation of whatever has been clicked in the 
document.querySelector('#book-list').addEventListener('click',(e)=>{

    UI.deleteBook(e.target);
UI.showAlertMessage("Book removed successfully","success");
Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    
});

