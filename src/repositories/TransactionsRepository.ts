import { EntityRepository, Repository, getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
   public async getBalance(): Promise<Balance> {
     const transactions = await this.find();

    const { outcome, income} = transactions.reduce ( (acumulador, transaction) => {
      if (transaction.type === 'income'){
        acumulador.income += Number(transaction.value)
      }else {
        acumulador.outcome += Number(transaction.value)
      }

      return acumulador;
    },{
      income: 0,
      outcome:0,
      total:0
    })
    const total = income - outcome;
    return {income, outcome, total}
  }
}

export default TransactionsRepository;
