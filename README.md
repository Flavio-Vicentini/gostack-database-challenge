![folder](https://github.com/Flavio-Vicentini/gostack-primeiro-projeto-node/blob/master/assets/to_readme/folder_gostack.png)
# Desafio Banco de Dados e Upload de Arquivos no NodeJS
Projeto desenvolvido para treinar os conhecimentos adquiridos do BootCamp GoStack da RocketSeat. A aplicação tem a finalidade de armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagens dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.

O desafio era implementar as seguintes rotas:

1. POST /transactions: A rota deve receber title, value, type, e category dentro do corpo da requisição, sendo o type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro do seu banco de dados, possuindo os campos id, title, value, type, category_id, created_at, updated_at;
2. DELETE /transactions/:id : A rota deve deletar uma transação com o id presente nos parâmetros da rota;
3. POST /transactions/import: A rota deve permitir a importação de um arquivo com formato .csv contendo as mesmas informações necessárias para criação de uma transação id, title, value, type, category_id, created_at, updated_at, onde cada linha do arquivo CSV deve ser um novo registro para o banco de dados, e por fim retorne todas as transactions que foram importadas para seu banco de dados.



E assim passar nos testes automatizados:

- *should be able to create a new transaction:* Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.
- *should create tags when inserting new transactions:* Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que não existe, essa seja criada e inserida no campo category_id da transação com o id que acabou de ser criado.
- *should not create tags when they already exists:* Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que já existe, seja atribuído ao campo category_id da transação com o id dessa categoria existente, não permitindo a criação de categorias com o mesmo title.
- *should be able to list the transactions:* Para que esse teste passe, sua aplicação deve permitir que seja retornado um array de objetos contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.
- *should not be able to create outcome transaction without a valid balance:* Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa (total de income), retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }.
- *should be able to delete a transaction:* Para que esse teste passe, você deve permitir que a sua rota de delete exclua uma transação, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.
- *should be able to import transactions:* Para que esse teste passe, sua aplicação deve permitir que seja importado um arquivo csv, contendo o seguinte modelo. Com o arquivo importado, você deve permitir que seja criado no banco de dados todos os registros e categorias que estavam presentes nesse arquivo, e retornar todas as transactions que foram importadas.

---

## Features

*NodeJs* -
*Typescript* -
*Postgres* -
*TypeORM* -
*Multer* -
*ESLint* -
*Prettier*
