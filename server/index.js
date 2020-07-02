const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()
const path = require('path')
const plaid = require('plaid')

dotenv.config()
const client = new plaid.Client(
  process.env.PLAID_CLIENT_ID,
  process.env.PLAID_SECRET,
  process.env.PLAID_PUBLIC_KEY,
  plaid.environments.sandbox
)

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'plaid-link.html'))
})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/plaid_token_exchange', async (req, res, next) => {
  const {publicToken} = req.body
  const {access_token} = await client.exchangePublicToken(publicToken)
  const {accounts, item} = await client.getAccounts(access_token)

  client.getBalance(access_token, (err, result) => {
    const accounts = result.accounts;
    console.log('balance account:', accounts)
  });
  client.getTransactions(access_token, '2020-06-01', '2020-07-01', {
    count: 50,
    offset: 0,
  }, (error, result) => {
    try {
      const transactions = result.transactions;
      transactions.map((transaction) => {
        console.log(transaction.amount)
      })
      // console.log('transaction:', transactions)
    } catch (error) {
      console.log(error)
    }
    
  });

  console.log({
    accounts,
    item
  })
})

app.listen(8080, () => 
  console.log("Listening to port: 8080")
)