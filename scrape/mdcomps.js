const express = require('express')
let router = express.Router();
const { default: axios } = require("axios")
const cheerio = require("cheerio")
const mongoose = require("mongoose")
const Storage = require("../models/storage")

const promises = []
let i = 1

let resp = 1;

async function getItems() {
    while (resp != 0) {
        await axios.get(`https://mdcomputers.in/storage?page=${i}`)
            .then((response) => {
                const html = response.data
                const $ = cheerio.load(html)
                const element = $('div.product-item-container')
                for (let i = 0; i < element.length; i++) {
                    const item = $(element[i]).find('div.right-block.right-b').find('a')
                    const title = $(item).text().trim()
                    const url = $(item).attr('href')
                    const storage = new Storage({
                        title: title,
                        url: url
                    })
                    storage.save();
                }
                i = i + 1;
            })
            .catch((err) => {
                resp = 0;
                // console.log(err)
            })
    }
}
getItems()

module.exports = { getItems };