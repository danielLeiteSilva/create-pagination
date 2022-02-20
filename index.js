const { writeFileSync } = require('fs')

const Pagination = require('./Pagination')

const pagination = new Pagination("dados.json", 10)

const resultPage = pagination.getResultString()

const result = pagination.getResultJson()

const qtd = pagination.getLengthPagination()

console.log(qtd)



writeFileSync("dad.json", resultPage)