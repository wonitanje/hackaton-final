# Instalation
### Install docker and docker-compose on your machine

# Run
### Docker-compose
```
docker-compose up
```

# Postgresql
### Installation
```
# npm
npm i -g sequelize-cli
# yarn 
yarn global add sequelize-cli
```

### Tables
```
# migration
npx sequelize-cli db:migrate
# seed (Not written now)
npx sequelize-cli db:seed
# drop
npx sequelize-cli db:drop
```