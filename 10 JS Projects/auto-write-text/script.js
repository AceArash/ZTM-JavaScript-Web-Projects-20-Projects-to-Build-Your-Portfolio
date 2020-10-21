// basic script file setup

// write JavaScript Only!

const text = "This is an Auto Write Text that runs on DHTML!"

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    }

}

setInterval(writeText, 120);