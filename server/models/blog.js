const mongoose = require('mongoose')
const Schema = mongoose.Schema

let BlogSchema = new Schema({
  author: String,
  title: String,
  content: String,
  image: String
})

var Blogs = mongoose.model('Blogs', BlogSchema)

module.exports = Blogs
