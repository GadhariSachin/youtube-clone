import Base from "./js/Base";
import "./main.scss";

var baseInst = new Base("Hi there from Index..!!");
var appContainer = document.getElementById("app");

appContainer.innerHTML = "This is text loading from index js file.";
