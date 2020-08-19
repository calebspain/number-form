String.prototype.format = function (template) {

    if (this.length === template.length) {
        return this;
    } else if (this.length > template.length) {
        return this.slice(0, -1);
    }

    var inputArray = this.split("").filter(function (char) {
        return parseInt(char);
    });

    for (var i = 0; i < inputArray.length && i < template.length + 1; i++) {
        template = template.replace("x", inputArray[i]);
    }

    template = template.split("");
    template = template.slice(0, template.indexOf("x")).join("");

    return template;
}

exports.numberForm = function (value, template, event) {
    var key = event.keyCode || event.charCode;

    if (key === 8 || key === 46) {
        return value;
    }

    return value.format(template);
}