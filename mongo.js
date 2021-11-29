const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})
const Person = mongoose.model('Person', personSchema)

if (process.argv.length > 5) {
  console.log('Too much arguments')
  process.exit(1)
}

if(process.argv.length === 5) {

  const password = process.argv[2]
  const name = process.argv[3]
  const number = process.argv[4]

  const url = `mmongodb+srv://juho:${password}@cluster0.14x95.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

  mongoose.connect(url)

  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(response => {
    console.log(`Added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

if(process.argv.length === 3) {
  const password = process.argv[2]
  const url = `mmongodb+srv://juho:${password}@cluster0.14x95.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

  mongoose.connect(url)

  Person.find({}).then(result => {
    console.log('Phonebook:')
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}