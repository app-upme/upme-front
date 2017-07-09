export default {
  "components": {
    "app-login": {
      "errors.blank": "Preencha email e senha para continuar",
      "buttons.enter": "Entrar",
      "placeholders": {
        "email": "Informe seu email",
        "password": "Digite sua senha"
      }
    },
    "form-group": {
      "placeholders": {
        "name": "Nome da turma",
        "description": "Descrição da turma"
      },
      "buttons.submit": "Salvar turma"
    },
    "form-user": {
      "placeholders": {
        "name": "Nome do aluno",
        "email": "Email do aluno",
        "age": "Idade",
        "gender": "Selecione o gênero"
      },
      "gender.options": {
        "male": "Masculino",
        "female": "Feminino"
      },
      "labels.start_training_at": "Inicio do treinamento",
      "buttons.submit": "Salvar praticante"
    },
    "form-vo2max": {
      "placeholders.distance": "Informe a distância percorrida",
      "labels":{
        "distance": "Distância",
        "training_date": "Data do treino"
      },
      "buttons.submit": "Salvar treino"
    }
  },
  "pages": {
    "login.title": "Bem-vindo treinador!",
    "dashboard": {
      "groups": "Turmas",
      "history": "Histórico",
      "placeholders.search": "Buscar turma",
      "dialog.title": "Adicionar turma"
    },
    "groups": {
      "show": {
        "title": "Histórico - {{group}}",
        "users": "Praticantes",
        "placeholders.search": "Buscar aluno",
        "dialog.title": "Adicionar praticante"
      }
    },
    "users": {
      "show": {
        "title": "Inicio do treinamento: {{started_at}}",
        "trainings": "Treinamentos",
        "dialog.title": "Adicionar treino"
      }
    }
  }
};
