function dropHandler(ev) {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[i].kind === 'file') {
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('... file[' + i + '].name = ' + file.name);

                var div = document.createElement("div");
                var divname = document.createElement("p");
                var tagfield = document.createElement("input")

                tagfield.setAttribute("type", "text");
                tagfield.id = "tagfield";

                div.id = "thumbnail"
                div.style.width = "50px";
                div.style.height = "50px";
                div.style.background = "#9e9782";
                div.style.color = "white";
                var re = /(?:\.([^.]+))?$/;
                div.innerHTML = re.exec(file.name)[1];

                divname.innerHTML = file.name;

                document.getElementById("thumbnail_zone").appendChild(div);
                document.getElementById("thumbnail_zone").appendChild(divname);
                document.getElementById("thumbnail_zone").append(tagfield);

                tagfield.addEventListener("keydown",checkForTags);

            }
        }
    } else {
        // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
    document.getElementById("drop_zone").style.backgroundColor = "#f0f8ff";

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

function dragLeaveHandler(ev) {
    console.log('File(s) in drop zone');
    document.getElementById("drop_zone").style.backgroundColor = "#d1d1d1";

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

function checkForTags() {

    try {

        console.log(document.getElementById("tagfield").value)

        var res = document.getElementById("tagfield").value.split(" ")

        console.log(res)

    } catch (error) {

        console.log(error)

    }
}