const { readFileSync } = require("fs")

class Pagination {

    /**
     * @param {Array} listOfObjects - One list of objects for paginate
     * @param {Number} mountPages - Number max of files per page
     */

    constructor(listOfObjects, mountPages) {

        this._listOfObjects = listOfObjects
        this._mountPages = mountPages
        this._listConverted = {}
        this._countPages = 0
        this._allPages = {}

        this.paginationList()
    }

    convertFileInJson() {
        const base64 = readFileSync(this._listOfObjects, { encoding: 'base64' })
        const string = Buffer.from(base64, 'base64').toString()
        this._listConverted = JSON.parse(string)
    }

    paginationList() {
        this.convertFileInJson()

        let listsOfObjects = []
        let quantityOfPages = Math.ceil((this._listConverted.length / this._mountPages))

        let q = this._mountPages
        let aux = 0
        for (let index = 0; index < quantityOfPages; index++) {
            let data = this._listConverted.slice(aux, q)
            listsOfObjects.push(data)
            aux = q
            q = q + this._mountPages
        }

        this._countPages = listsOfObjects.length
        this._allPages = listsOfObjects
    }

    getList() {
        return this._allPages
    }

    getString() {
        return JSON.stringify(this._allPages)
    }

    getLength() {
        return this._countPages
    }

    toString() {
        return "Essa é uma instância"
    }
}


module.exports = Pagination