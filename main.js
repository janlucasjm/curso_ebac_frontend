$(document).ready(function () { //código que depende de jQuery precisa estar dentro dessa função
    $('.container button').click(function(e) {
        e.preventDefault();
        const novaListaDeTarefa = $('#nova-lista-tarefas').val();
        const novoItemDeTarefa = $(`<li> ${novaListaDeTarefa} </li>`); //criando uma lista
        $(novoItemDeTarefa).appendTo('ul'); //aplicando uma lista dentro de um 'ul'
        $('#nova-lista-tarefas').val(''); //limpando campo de escrita
    })

    const clickLi = $('ul').on('click', 'li', function () {
        $(this).toggleClass('completado'); //toggleClass é uma função usada para adicionar uma classe ou remover
    })
})