
import express from 'express'
import { PessoaService } from '../services/PessoaService'

const routes = express.Router()

const pessoaService = new PessoaService()

routes.get('/pessoa', async (req: express.Request, res: express.Response) => {
  const pessoas = await pessoaService.get();
  res.json({data: pessoas})
});

routes.post('/pessoa', async (req: express.Request, res: express.Response) => {
  await pessoaService.create(req.body);
  res.send('ok');
})

routes.get('/pessoa/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  const pessoa = await pessoaService.getById(id)
  res.json({ data: pessoa })
})

export { routes }