import { Router } from 'express';
import {getCustomRepository,getRepository} from 'typeorm'
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';
import multer from 'multer'
import uploadConfig from '../config/upload'


const transactionsRouter = Router();
const upload = multer(uploadConfig)

transactionsRouter.get('/', async (request, response) => {
  const transactionRepository = getCustomRepository(TransactionsRepository)
  const transactions = await transactionRepository.find()
  const balance = await transactionRepository.getBalance();
  return response.json({transactions,balance})
});

transactionsRouter.post('/', async (request, response) => {
  const {title, type, value, category} = request.body;
  const createTransaction = new CreateTransactionService();
  const transaction = await createTransaction.execute({title,value,type,category})
  return response.json(transaction)

});

transactionsRouter.delete('/:id', async (request, response) => {
  const deleteTransaction = new DeleteTransactionService();
  await deleteTransaction.execute(request.params.id);
  return response.status(204).send()
});

transactionsRouter.post('/import',
upload.single ('file'),
async (request, response) => {
  const imporTransactions = new ImportTransactionsService()
  const transactions = await imporTransactions.execute(request.file.path);
  return response.json(transactions)
});

export default transactionsRouter;
