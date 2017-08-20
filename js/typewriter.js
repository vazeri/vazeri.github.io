var str = "<p class=large>Empático, perfeccionista, decidido y de carácter fuerte, con una habilidad única para administrar proyectos multidisciplinarios y navegar a través de retos complejos, puedo ponerme bastante técnico si es necesario, pero prefiero un lenguaje gráfico que me permite comunicarme de manera efectiva, para ofrecer soluciones en:</p>",

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