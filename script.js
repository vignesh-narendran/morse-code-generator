$(document).ready(function () {
    space = " ";
    $("#clear").click(function () {
        $("#solBox").val("");
    });
    $(".button").click(function () {
        if (this.id == "dot") {
            var innerText = $("#textbox").val();
            $("#textbox").val(innerText + ".");
        } else if (this.id == "dash") {
            var innerText = $("#textbox").val();
            $("#textbox").val(innerText + "-");
        }
        setTimeout(function () {
            var finText = $("#textbox").val();
            $("#textbox").val("");
            switch (finText) {
                case ".-": {
                    $("#solBox").val($("#solBox").val() + "a");
                    break;
                }
                case "-...": {
                    $("#solBox").val($("#solBox").val() + "b");
                    break;
                }
                case "-.-.": {
                    $("#solBox").val($("#solBox").val() + "c");
                    break;
                }
                case "-..": {
                    $("#solBox").val($("#solBox").val() + "d");
                    break;
                }
                case ".": {
                    $("#solBox").val($("#solBox").val() + "e");
                    break;
                }
                case "..-.": {
                    $("#solBox").val($("#solBox").val() + "f");
                    break;
                }
                case "--.": {
                    $("#solBox").val($("#solBox").val() + "g");
                    break;
                }
                case "....": {
                    $("#solBox").val($("#solBox").val() + "h");
                    break;
                }
                case "..": {
                    $("#solBox").val($("#solBox").val() + "i");
                    break;
                }
                case ".---": {
                    $("#solBox").val($("#solBox").val() + "j");
                    break;
                }
                case "-.-": {
                    $("#solBox").val($("#solBox").val() + "k");
                    break;
                }
                case ".-..": {
                    $("#solBox").val($("#solBox").val() + "l");
                    break;
                }
                case "--": {
                    $("#solBox").val($("#solBox").val() + "m");
                    break;
                }
                case "-.": {
                    $("#solBox").val($("#solBox").val() + "n");
                    break;
                }
                case "---": {
                    $("#solBox").val($("#solBox").val() + "o");
                    break;
                }
                case ".--.": {
                    $("#solBox").val($("#solBox").val() + "p");
                    break;
                }
                case "--.-": {
                    $("#solBox").val($("#solBox").val() + "q");
                    break;
                }
                case ".-.": {
                    $("#solBox").val($("#solBox").val() + "r");
                    break;
                }
                case "...": {
                    $("#solBox").val($("#solBox").val() + "s");
                    break;
                }
                case "-": {
                    $("#solBox").val($("#solBox").val() + "t");
                    break;
                }
                case "..-": {
                    $("#solBox").val($("#solBox").val() + "u");
                    break;
                }
                case "...-": {
                    $("#solBox").val($("#solBox").val() + "v");
                    break;
                }
                case ".--": {
                    $("#solBox").val($("#solBox").val() + "w");
                    break;
                }
                case "-..-": {
                    $("#solBox").val($("#solBox").val() + "x");
                    break;
                }
                case "-.--": {
                    $("#solBox").val($("#solBox").val() + "y");
                    break;
                }
                case "--..": {
                    $("#solBox").val($("#solBox").val() + "z");
                    break;
                }
                case "..--": {
                    $("#solBox").val($("#solBox").val() + space);
                    break;
                }
                default: {
                    break;
                }
            }
        }, 2000);
    });
});