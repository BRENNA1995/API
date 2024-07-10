import { UsuarioRepository, usuario } from "../interfaces/usuario.interface";
import { usuarioRepositoryPrisma } from "../repositories/usuario.repository";

class UsuariouseCase {
  private usuarioRepository: UsuarioRepository;

  constructor() {
    this.usuarioRepository = new usuarioRepositoryPrisma();
  }
  async create(data: usuario): Promise<Boolean> {
    const verifyUsuarioExists = await this.usuarioRepository.findByEmail(data.email);
    let resultado = false;
    if (!verifyUsuarioExists) {
      await this.usuarioRepository.create(data);
      resultado = true;
    }
    return resultado;
  }
  async usuarioBooleanByEmailSenha(email: string, senha: string): Promise<Boolean | null> {
    const verifyEmailSenha = await this.usuarioRepository.usuariofindByEmailSenha(email, senha)
    let resultado = false
    if (verifyEmailSenha) {
      resultado = true
    }
    return resultado;
  }
  async findUsernameByEmail(email: string): Promise<string> {
    const verifyEmailSenha = await this.usuarioRepository.findUsernameByEmail(email)
    return verifyEmailSenha;
  }
  async updateByIdStatusBloqueio(id: number): Promise<usuario | null> {
    const result = await this.usuarioRepository.updateByIdStatusBloqueio(id);
    return result;
  }
  async updateByIdStatusLiberar(id: number): Promise<usuario | null> {
    const result = await this.usuarioRepository.updateByIdStatusLiberar(id);
    return result;
  }
  async getAllUsuarios(): Promise<usuario[]> {
    return await this.usuarioRepository.getAllUsuarios()
  }
  async deleteUsuario(id: number): Promise<usuario> {
    const result = await this.usuarioRepository.deleteUsuario(id);
    return result;
  }
}
export { UsuariouseCase };
