export interface ITarefa {
    id: string;
    titulo: string;
    descricao: string;
    atribuido: string;
    data: string;
    coluna: "incompleto" | "progresso" | "completo";
    //color: string;
    sortIndex: number;
}