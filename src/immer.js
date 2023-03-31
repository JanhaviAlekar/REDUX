import { produce } from 'immer'
let book={title:"Harry potter"};

function publish(book){
    return publish(book, draftBook=>{
        draftBook.isPublish=true;  //creates copy of book no need to use spread op
    })

}
let updated=publish(book);
console.log(book);
console.log(updated);