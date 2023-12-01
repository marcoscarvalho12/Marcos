const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuração do EJS como view engine
app.set('view engine', 'ejs');

// Configuração do body-parser para processar os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota da página de dashboard
app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// Rota da página de cadastro de usuários
app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});
// Rota para processar o formulário de cadastro
app.post('/cadastro', (req, res) => {
    const { nome, email } = req.body;
    // Salvar os dados do usuário no banco de dados ou em algum outro local
    res.redirect('/usuarios');
  });
  
  // Rota para exibir os usuários cadastrados
  app.get('/usuarios', (req, res) => {
    // Obter os dados dos usuários do banco de dados ou de onde você salvou
    const usuarios = [
      { nome: 'João', email: 'joao@example.com' },
      { nome: 'Maria', email: 'maria@example.com' },
    ];
    res.render('usuarios', { usuarios });
  });
  
  // Iniciar o servidor na porta 3000
  app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });
  