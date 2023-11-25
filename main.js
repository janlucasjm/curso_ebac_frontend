function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Profissao(nome, cargo, especializacao) {
    this.cargo = cargo;
    this.especializacao = especializacao;

    Pessoa.call(this, nome);
}

function Lazer(atividade, hobbies) {
    this.atividade = atividade;
    this.hobbies = hobbies;

    Pessoa.call(this);
}

const funcionario1 = new Profissao('Jaqueline', 'Medica', 'Ortopedista');
const lazer1 = new Lazer('Correr', 'Ler livros');

const funcionario2 = new Profissao('Luan', 'Engenheiro', 'Metalurgia');
const lazer2 = new Lazer('Jogar bola', 'estudar');

console.log(`Olá, me chamo ${funcionario1.nome}, atualmente sou ${funcionario1.cargo}, especializado em ${funcionario1.especializacao}.`);
console.log(`Gosto bastante de ${lazer1.atividade} e também amo ${lazer1.hobbies}!`);


console.log(`Olá, me chamo ${funcionario2.nome}, atualmente sou ${funcionario2.cargo}, especializado em ${funcionario2.especializacao}.`);
console.log(`Gosto bastante de ${lazer2.atividade} e também amo ${lazer2.hobbies}!`);

