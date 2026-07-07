function addPost(){

let name = document.getElementById("name").value;
let message = document.getElementById("message").value;


if(name === "" || message === ""){
 alert("名前とメッセージを書いてね😊");
 return;
}


let post = document.createElement("div");

post.className="card";


post.innerHTML =
"<h3>🌻 " + name + "さん</h3>" +
"<p>" + message + "</p>";


document.getElementById("posts").appendChild(post);


document.getElementById("name").value="";
document.getElementById("message").value="";

}
