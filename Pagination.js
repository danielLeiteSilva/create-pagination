const { readFileSync } = require("fs")

class Pagination {

    /**
     * @param {Array} listOfObjects - One list of objects for paginate
     * @param {Number} mountPages - Number of page and mount files per page
     */

    constructor(listOfObjects, mountPages) {

        this._listOfObjects = listOfObjects
        this._mountPages = mountPages
        this._jsonConverted = {}
        this._countPages = 0
        this._allPages = {}

        this.paginationJson()
    }

    convertFileInJson() {
        const base64 = readFileSync(this._listOfObjects, { encoding: 'base64' })
        const string = Buffer.from(base64, 'base64').toString()
        this._jsonConverted = JSON.parse(string)
    }

    paginationJson() {

        this.convertFileInJson()

        let list = []
        let qtdPag = Math.ceil((this._jsonConverted.length / this._mountPages))

        let q = this._mountPages
        let aux = 0

        for (let index = 0; index < qtdPag; index++) {

            let data = this._jsonConverted.slice(aux, q)
            list.push(data)
            aux = q
            q = q + this._mountPages

        }

        this._countPages = list.length
        this._allPages = list

    }

    getResultJson() {
        return this._allPages
    }

    getResultString() {
        return JSON.stringify(this._allPages)
    }

    getLengthPagination() {
        return this._countPages
    }

    toString() {
        return "Essa é uma instância"
    }
}


module.exports = Pagination