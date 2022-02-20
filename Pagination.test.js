const Pagination = require("./Pagination")
const chai = require('chai')

//Suit of tests 
describe("Pagination", () =>{

    let pagination
    let fileOrListOfObjects
    let quantityOfFilesPerObject

    beforeEach(() => {
        fileOrListOfObjects = "dados.json"
        quantityOfFilesPerObject = 10
        pagination = new Pagination(fileOrListOfObjects, quantityOfFilesPerObject)
    })

    it("Should be validated object is string", () =>{
        let typeOfFile = pagination.getResultString()
        chai.assert.typeOf(typeOfFile, 'string')
    })

    it("Should be validated instance", () =>{
        let validIntanceResponse = pagination.toString()
        chai.assert.equal(validIntanceResponse, 'Essa é uma instância')
    })
    it("Should be validated length pages is number", () =>{
        let isNumber = pagination.getLengthPagination()
        chai.assert.typeOf(isNumber, 'number')
    })
    it("Should be validated if object exists", () =>{
        let objectList = pagination.getResultJson()
        chai.assert.exists(objectList)
    })

})