$.get(chrome.extension.getURL('/injected.js'),
    function (data) {
        window.addEventListener("message", function(event) {
            // We only accept messages from ourselves
            if (event.source != window)
                return;

            if (event.data.type && (event.data.type == "FROM_PAGE")) {
                console.log("Content script received message: " + event.data.text);
            }
        });

        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(script);
        var head = document.getElementsByTagName("body")[0];
        head.setAttribute("onload", "injected_main();");

    }
);