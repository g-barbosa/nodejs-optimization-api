import { model as pessoaSchema } from '../config/database/schemas/PessoaSchema'
import { redis as cache } from '../config/redis'

export class PessoaService {
  constructor() {}

  async get() {
    return await pessoaSchema.find().limit(100);
  }

  async create(body: any) {
    try {
      const pessoa = {
        name: body.name,
        telefone: body.telefone
      }
    
      await pessoaSchema.create(pessoa);
    } catch (e) {
      console.log(e)
    }
  }

  async getById(id: string) {
    const exists = await cache.get(`pessoas:${id}`)

    if (exists) {
      return JSON.parse(exists)
    } else {
      const pessoa = await pessoaSchema.findById(id)
      cache.set(`pessoas:${id}`, JSON.stringify(pessoa))
      return pessoa
    }
  }
}
