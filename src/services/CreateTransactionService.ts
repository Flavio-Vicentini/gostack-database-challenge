// import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import {getRepository, getCustomRepository} from 'typeorm'
import Category from '../models/Category'
import TransactionsRepository from '../repositories/TransactionsRepository'
import AppError from '../errors/AppError';
interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({title,type,value,category}:Request): Promise<Transaction> {
      const categoryRepository = getRepository(Category)
      let transactionCategory = await categoryRepository.findOne({where: {title: category}})
      if (!transactionCategory){
        transactionCategory = categoryRepository.create({title:category})
        await categoryRepository.save(transactionCategory)
      }

     const transactionRepository = getCustomRepository(TransactionsRepository);
      const balance = await transactionRepository.getBalance()
      if (type === 'outcome' && value > balance.total){
        throw new AppError ('You do not have enough funds')
      }
      const transaction = transactionRepository.create ({
      title,
      type,
      value,
      category: transactionCategory,
    });

    await transactionRepository.save(transaction);
    console.log(transaction)
    return transaction;
  }
}

export default CreateTransactionService;
