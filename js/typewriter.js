var str = "<p class=large>Emp�tico, perfeccionista, decidido y de car�cter fuerte, con una habilidad �nica para administrar proyectos multidisciplinarios y navegar a trav�s de retos complejos, puedo ponerme bastante t�cnico si es necesario, pero prefiero un lenguaje gr�fico que me permite comunicarme de manera efectiva, para ofrecer soluciones en:</p>",

    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return type();
    setTimeout(type, 5);
}());