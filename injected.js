function injected_main() {
    var person = prompt("Please enter your login:", "Harry Potter");
    var data = { type: "FROM_PAGE", text: person };
    window.postMessage(data, "*");
}