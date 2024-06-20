import { UsuarioRepository, isAdminUpdate, statusUpdate, usuario, usuarioCreated } from "../interfaces/usuario.interface"
import { usuarioRepositoryPrisma } from "../repositories/usuario.repository"

class UsuariouseCase {
   private usuarioRepository: UsuarioRepository

   constructor() {
      this.usuarioRepository = new usuarioRepositoryPrisma()
   }
   async create(data: usuarioCreated): Promise<usuario> {
      const verifyUsuarioExists = await this.usuarioRepository.findById(data.id)
      if (verifyUsuarioExists) {
         throw new Error('Filme já existe');
      }
      const result = await this.usuarioRepository.create(data)
      return result;
   }
   async findAll(): Promise<usuario[]> {
      const result = await this.usuarioRepository.findAll()
      return result
   }
   async findById(id: number): Promise<usuario | null> {
      const result = await this.usuarioRepository.findById(id)
      return result;
   }
   async updateByIdStatus(id: number, data: statusUpdate): Promise<usuario | null> {
      const result = await this.usuarioRepository.updateByIdStatus(id, data)
      return result;
   }
   async updateByIdAdmin(id: number, data: isAdminUpdate): Promise<usuario | null> {
      const result = await this.usuarioRepository.updateByIdAdmin(id, data)
      return result;
   }
}
export { UsuariouseCase }
