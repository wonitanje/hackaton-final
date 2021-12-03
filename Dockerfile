FROM node:lts-alpine

WORKDIR /app/client

COPY client/package.json .
COPY client/yarn.lock .
RUN yarn install

COPY client .
RUN yarn start
RUN mv dist ..

# FROM node:16 as api

WORKDIR /app

COPY server/package.json .
COPY server/yarn.lock .
RUN yarn install

COPY server .

# RUN npm config set prefix ~/.local
# RUN PATH=~/.local/bin/:$PATH
# RUN npm install --global -y yarn

EXPOSE ${PORT}

CMD ["yarn", "start"]
