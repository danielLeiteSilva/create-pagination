const { writeFileSync } = require('fs')

const Pagination = require('./Pagination')

const pagination = new Pagination("dados.json", 10)

const resultPage = pagination.getString()

const result = pagination.getList()

const qtd = pagination.getLength()

writeFileSync("dad.json", resultPage)