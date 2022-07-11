function element(id) {
    return document.getElementById(id);
}

function cmdWriteInput(key) {
    element("txtInput").value += key;
};

function cmdCalculate() {
    try {
        element("txtOutput").value = eval(element("txtInput").value);
    } catch (error) {
        element("txtOutput").value = "invalid syntax";
    }
};

function cmdClearDisplay() {
    element("txtInput").value = "";
    element("txtOutput").value = "";
};
