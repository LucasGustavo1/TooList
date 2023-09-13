class Tarefa {
    descricao: string;
    concluida: boolean;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;
    }

    marcarConcluida() {
        this.concluida = true;
    }

    toString() {
        return `${this.descricao} ${this.concluida ? "(Concluída)" : "(Pendente)"}`;
    }
}

class ListaDeTarefas {
    tarefas: Tarefa[] = [];

    adicionarTarefa(descricao: string) {
        const novaTarefa = new Tarefa(descricao);
        this.tarefas.push(novaTarefa);
    }

    listarTarefas() {
        console.log("Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.toString()}`);
        });
    }

    editarTarefa(index: number, novaDescricao: string) {
        if (index >= 0 && index < this.tarefas.length) {
            this.tarefas[index].descricao = novaDescricao;
        }
    }

    excluirTarefa(index: number) {
        if (index >= 0 && index < this.tarefas.length) {
            this.tarefas.splice(index, 1);
        }
    }

    listarTarefasConcluidas() {
        console.log("Tarefas Concluídas:");
        this.tarefas.forEach((tarefa, index) => {
            if (tarefa.concluida) {
                console.log(`${index + 1}. ${tarefa.toString()}`);
            }
        });
    }

    listarTarefasPendentes() {
        console.log("Tarefas Pendentes:");
        this.tarefas.forEach((tarefa, index) => {
            if (!tarefa.concluida) {
                console.log(`${index + 1}. ${tarefa.toString()}`);
            }
        });
    }
}

class ListaPrioritaria extends ListaDeTarefas {
    adicionarTarefaPrioritaria(descricao: string, prioridade: string) {
        const novaTarefaPrioritaria = new Tarefa(descricao);
        novaTarefaPrioritaria.prioridade = prioridade;
        this.tarefas.push(novaTarefaPrioritaria);
    }

    listarTarefas() {
        console.log("Tarefas Prioritárias:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.toString()} - Prioridade: ${tarefa.prioridade || 'Normal'}`);
        });
    }
}

// Exemplo de uso:
const listaTarefas = new ListaDeTarefas();
listaTarefas.adicionarTarefa("Estudar TypeScript");
listaTarefas.adicionarTarefa("Fazer compras");
listaTarefas.adicionarTarefa("Lavar o carro");
listaTarefas.listarTarefas();

const listaPrioritaria = new ListaPrioritaria();
listaPrioritaria.adicionarTarefaPrioritaria("Enviar relatório", "Alta");
listaPrioritaria.adicionarTarefaPrioritaria("Reunião com equipe", "Média");
listaPrioritaria.listarTarefas();

// Marcar tarefas como concluídas
listaTarefas.tarefas[0].marcarConcluida();
listaPrioritaria.tarefas[1].marcarConcluida();

listaTarefas.listarTarefasConcluidas();
listaTarefas.listarTarefasPendentes();
