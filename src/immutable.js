import { Map } from "immutable";
let book=Map({title:"Harry potter"});

function publish(book){
//     isPublished=true;
return book.set("isPublish",true);
}

book= publish(book);
console.log(book.get("title"));
// to log real in js format
console.log(book.toJS());