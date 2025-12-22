export type UserProfile = "ADMIN" | "ATENDENTE";

export type SituacaoAgendamento =
  | "AGENDADO"
  | "EM_ATENDIMENTO"
  | "REAGENDADO"
  | "FINALIZADO"
  | "NAO_COMPARECEU"

export interface Usuario {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  guiche: number;
  secretaria: Secretaria;
  perfil: UserProfile;
}

export interface UsuarioLogin {
  id: number;
  nome: string;
  perfil: UserProfile;
  token: string;
}

export interface Agendamento {
  agendamentoId: number
  secretariaId?: number
  senha: string
  usuarioNome: string
  usuarioTipo?: string
  servicoNome: string
  situacao: SituacaoAgendamento
  tipoAtendimento: string
  horaAgendamento: string
  horaChamada?: string
}

export interface Secretaria {
  id: number;
  nome: string;
  sigla: string;
}
