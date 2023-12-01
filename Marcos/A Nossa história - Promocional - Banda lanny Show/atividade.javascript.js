javascrip
// Função para renderizar o template do Handlebars
function renderTemplate(templateId, data) {
  var template = Handlebars.compile($('#' + templateId).html());
  return template(data);
}

// Evento de submit do formulário de login
$('#loginForm').submit(function(e) {
  e.preventDefault();
  
  // Obtenha os valores do e-mail e senha
  var email = $('#email').val();
  var password = $('#password').val();

  // Faça a autenticação aqui (por exemplo, com uma chamada AJAX)
  // Se houver um erro de autenticação, defina a variável 'error' no objeto de dados

  // Exemplo de como renderizar o template do Handlebars com a mensagem de erro
  var data = { error: 'E-mail ou senha inválidos' };
  var html = renderTemplate('login-template', data);
  $('#loginForm').append(html);
});

