<div align="center">
  <h1>plann.er — Backend</h1>
  <p>API REST para planejamento de viagens desenvolvida durante a NLW Journey da Rocketseat.</p>

  <p>
    <img src="https://img.shields.io/badge/Node.js-24-339933?style=flat&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Fastify-4.28-000000?style=flat&logo=fastify&logoColor=white" />
    <img src="https://img.shields.io/badge/Prisma-5.16-2D3748?style=flat&logo=prisma&logoColor=white" />
    <img src="https://img.shields.io/badge/SQLite-3-003B57?style=flat&logo=sqlite&logoColor=white" />
  </p>
</div>

---

## Endpoints

### Viagens

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/trips` | Criar viagem e enviar e-mail de confirmação ao organizador |
| `GET` | `/trips/:tripId` | Buscar detalhes de uma viagem |
| `PUT` | `/trips/:tripId` | Atualizar destino e datas de uma viagem |
| `GET` | `/trips/:tripId/confirm` | Confirmar viagem e notificar os convidados |

### Atividades

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/trips/:tripId/activities` | Cadastrar atividade em uma viagem |
| `GET` | `/trips/:tripId/activities` | Listar atividades agrupadas por dia |

### Participantes

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/trips/:tripId/invites` | Convidar novo participante |
| `GET` | `/trips/:tripId/participants` | Listar participantes da viagem |
| `GET` | `/participants/:participantId` | Buscar dados de um participante |
| `GET` | `/participants/:participantId/confirm` | Confirmar presença na viagem |

### Links

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/trips/:tripId/links` | Cadastrar link importante |
| `GET` | `/trips/:tripId/links` | Listar links da viagem |

## Tecnologias

| Categoria    | Tecnologia                       | Versão |
|--------------|----------------------------------|--------|
| Runtime      | Node.js + TypeScript             | 24 / 5.5 |
| Framework    | Fastify                          | 4.28   |
| ORM          | Prisma                           | 5.16   |
| Banco        | SQLite (dev) / PostgreSQL (prod) | —      |
| Validação    | Zod                              | 3.23   |
| Datas        | dayjs                            | 1.11   |
| E-mail       | Nodemailer + Ethereal            | 6.9    |

## Como rodar localmente

**Pré-requisito:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/renan-tiberto/nlw-journey-backend.git
cd nlw-journey-backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
copy .env.example .env

# Aplique as migrations
npx prisma migrate deploy

# Inicie o servidor
npm run dev   # → http://localhost:3333
```

## Variáveis de ambiente

| Variável       | Descrição                       | Padrão                  |
|----------------|---------------------------------|-------------------------|
| `DATABASE_URL` | URL de conexão com o banco      | `file:./dev.db`         |
| `API_BASE_URL` | URL pública da API              | `http://localhost:3333` |
| `WEB_BASE_URL` | URL pública do frontend         | `http://localhost:3000` |
| `PORT`         | Porta do servidor               | `3333`                  |

> Os e-mails enviados em desenvolvimento são capturados pelo [Ethereal](https://ethereal.email). A URL de visualização de cada e-mail é exibida no console.

## Deploy na Vercel

1. Importe o repositório na [Vercel](https://vercel.com)
2. Adicione as variáveis de ambiente em **Settings → Environment Variables**:
   - `DATABASE_URL` → `file:///tmp/dev.db`
   - `API_BASE_URL` → URL do backend na Vercel
   - `WEB_BASE_URL` → URL do frontend na Vercel
3. Redeploy

> Em produção o banco SQLite roda em `/tmp` — os dados são reiniciados a cada cold start. Para persistência real, substitua por PostgreSQL e atualize `DATABASE_URL`.

## Frontend

O frontend que consome esta API está em [nlw-journey-plann.er](https://github.com/renan-tiberto/nlw-journey-plann.er).

---

Desenvolvido durante a **NLW Journey** · [Rocketseat](https://rocketseat.com.br)
