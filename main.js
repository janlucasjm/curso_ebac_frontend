class NotaAluno {
    constructor(nomeAluno, nota) {
        this.nome = nomeAluno;
        this.nota = nota;
    }

    media() {
        if (this.nota >= 6) {
            return console.log(`Aluno: ${this.nome}; Nota: ${this.nota}.`);
        }
    }
}

const aluno1 = new NotaAluno('Jan', 8);
const aluno2 = new NotaAluno('Gabriel', 4);
aluno1.media();
aluno2.media();