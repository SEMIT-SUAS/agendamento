export type UserProfile = "ADMIN" | "ATENDENTE";

export interface Usuario {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  guiche: number;
  secretariaId: number;
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
  situacao: "AGENDADO" | "EM_ATENDIMENTO" | "REAGENDADO" | "CANCELADO" | "NAO_COMPARECEU"
  tipoAtendimento: string
  horaAgendamento: string
  horaChamada?: string
}
