const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')
if (entradaInicial.toLocaleUpperCase() == 'S') {
    console.log("Essas são as categorias disponíveis:");
    console.log('Produtividade e estilo de vida', '/História brasileira',
        '/Américas e sociedade', '/Tecnologia', '/Estilo de vida', '/auto ajuda');
    const entradaCtegoria = readline.question('Qual categoria você escolhe:');
    const retorno = livros.filter(livro => livro.categoria == entradaCtegoria)
    //esse método table que deixa formatado a tabela bonitinha no terminal
    console.table(retorno)
} else {
    console.log('Esses são todos os livros disponíveis:')
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livros)
}