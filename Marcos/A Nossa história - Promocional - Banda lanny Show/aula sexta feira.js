app.get('/users/add', (req, res) => {
res.render('userform')
})

app.post('/users/save', (req, res) => {
const name = req.body.name
const age = req.body.age

const user = { name: name, age: age }
res.render('viewuser', { user: user })

})