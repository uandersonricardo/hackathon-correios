import Question from '../models/question'
import User from '../models/user'
import Comment from '../models/comment'
import Answer from '../models/answer'

export const users: User[] = [
  {
    id: 'user1',
    name: 'João Silva',
    email: 'joao.silva@correios.com.br',
    role: 'attendant',
    reputation: 150,
    createdAt: new Date('2023-05-10T10:20:30Z'),
    updatedAt: new Date('2023-06-15T12:30:45Z')
  },
  {
    id: 'user2',
    name: 'Maria Souza',
    email: 'maria.souza@correios.com.br',
    role: 'attendant',
    reputation: 200,
    createdAt: new Date('2023-06-01T09:15:00Z'),
    updatedAt: new Date('2023-07-01T11:45:00Z')
  },
  {
    id: 'user3',
    name: 'Carlos Lima',
    email: 'carlos.lima@correios.com.br',
    role: 'moderator',
    reputation: 500,
    createdAt: new Date('2023-01-20T08:00:00Z'),
    updatedAt: new Date('2023-08-01T14:50:00Z')
  },
  {
    id: 'user4',
    name: 'Ana Pereira',
    email: 'ana.pereira@correios.com.br',
    role: 'attendant',
    reputation: 180,
    createdAt: new Date('2023-07-01T12:00:00Z'),
    updatedAt: new Date('2023-08-02T13:30:00Z')
  },
  {
    id: 'user5',
    name: 'Lucas Fernandes',
    email: 'lucas.fernandes@correios.com.br',
    role: 'attendant',
    reputation: 220,
    createdAt: new Date('2023-03-15T14:20:00Z'),
    updatedAt: new Date('2023-07-25T16:10:00Z')
  }
]

export const questions: Question[] = [
  {
    id: 'question1',
    title: 'Como lidar com pacotes atrasados?',
    content:
      'Estou tendo muitos problemas com pacotes atrasados. Alguém tem alguma dica de como minimizar esse tipo de situação?',
    authorId: 'user1',
    tags: ['atraso', 'entrega'],
    views: 120,
    upvotes: 15,
    downvotes: 2,
    createdAt: new Date('2023-06-10T08:45:00Z'),
    updatedAt: new Date('2023-06-20T10:15:30Z'),
    resolved: false
  },
  {
    id: 'question2',
    title: 'Qual é a melhor forma de organizar as rotas de entrega?',
    content: 'Eu estou tendo dificuldades em organizar as rotas de entrega de forma eficiente. Alguma sugestão?',
    authorId: 'user2',
    tags: ['rota', 'entrega'],
    views: 180,
    upvotes: 20,
    downvotes: 1,
    createdAt: new Date('2023-07-05T14:30:00Z'),
    updatedAt: new Date('2023-07-12T16:00:00Z'),
    resolved: false
  },
  {
    id: 'question3',
    title: 'Como proceder em caso de extravio de encomenda?',
    content: 'O que devemos fazer quando uma encomenda é extraviada? Existe algum procedimento padrão?',
    authorId: 'user4',
    tags: ['extravio', 'procedimento'],
    views: 90,
    upvotes: 12,
    downvotes: 3,
    createdAt: new Date('2023-08-01T09:30:00Z'),
    updatedAt: new Date('2023-08-03T11:00:00Z'),
    resolved: false
  },
  {
    id: 'question4',
    title: 'Como melhorar a comunicação com os clientes?',
    content: 'Quais são as melhores práticas para manter os clientes informados sobre suas entregas?',
    authorId: 'user5',
    tags: ['comunicação', 'clientes'],
    views: 210,
    upvotes: 25,
    downvotes: 0,
    createdAt: new Date('2023-06-20T08:00:00Z'),
    updatedAt: new Date('2023-07-10T09:45:00Z'),
    resolved: true
  }
]

export const comments: Comment[] = [
  {
    id: 'comment1',
    content: 'Eu também estou enfrentando esse problema. O suporte não está ajudando muito.',
    authorId: 'user2',
    questionId: 'question1',
    createdAt: new Date('2023-06-11T10:20:00Z'),
    updatedAt: new Date('2023-06-11T12:30:00Z')
  },
  {
    id: 'comment2',
    content: 'Uma boa ferramenta de planejamento de rotas pode ajudar bastante.',
    authorId: 'user3',
    questionId: 'question2',
    createdAt: new Date('2023-07-06T09:00:00Z'),
    updatedAt: new Date('2023-07-06T10:45:00Z')
  },
  {
    id: 'comment3',
    content: 'Em caso de extravio, a primeira coisa a fazer é entrar em contato com o centro de distribuição.',
    authorId: 'user5',
    questionId: 'question3',
    createdAt: new Date('2023-08-02T13:45:00Z'),
    updatedAt: new Date('2023-08-02T14:30:00Z')
  },
  {
    id: 'comment4',
    content: 'A comunicação proativa sempre ajuda, especialmente enviando atualizações regulares.',
    authorId: 'user4',
    questionId: 'question4',
    createdAt: new Date('2023-06-25T10:00:00Z'),
    updatedAt: new Date('2023-06-25T11:15:00Z')
  }
]

export const answers: Answer[] = [
  {
    id: 'answer1',
    content:
      'Você pode usar o sistema de rastreamento para monitorar os pacotes e informar os clientes sobre qualquer atraso.',
    authorId: 'user3',
    questionId: 'question1',
    upvotes: 10,
    downvotes: 0,
    createdAt: new Date('2023-06-12T11:00:00Z'),
    updatedAt: new Date('2023-06-15T12:00:00Z'),
    accepted: false
  },
  {
    id: 'answer2',
    content: 'Tente usar ferramentas como o Google Maps para otimizar as rotas, e evite horários de pico.',
    authorId: 'user1',
    questionId: 'question2',
    upvotes: 12,
    downvotes: 1,
    createdAt: new Date('2023-07-07T15:00:00Z'),
    updatedAt: new Date('2023-07-10T17:00:00Z'),
    accepted: false
  },
  {
    id: 'answer3',
    content: 'Em caso de extravio, abra um chamado com o suporte e informe ao cliente o quanto antes.',
    authorId: 'user2',
    questionId: 'question3',
    upvotes: 8,
    downvotes: 1,
    createdAt: new Date('2023-08-03T11:30:00Z'),
    updatedAt: new Date('2023-08-04T12:00:00Z'),
    accepted: false
  },
  {
    id: 'answer4',
    content: 'Estabeleça um canal de comunicação direto com o cliente, como WhatsApp ou e-mail.',
    authorId: 'user5',
    questionId: 'question4',
    upvotes: 18,
    downvotes: 0,
    createdAt: new Date('2023-06-26T14:30:00Z'),
    updatedAt: new Date('2023-06-28T16:00:00Z'),
    accepted: true
  }
]
