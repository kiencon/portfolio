FROM node:20-alpine

USER node

WORKDIR /home/next/app

COPY --chown=node:node package.json ./

RUN npm install

COPY --chown=node:node . .

RUN ls

RUN rm -rf .next

RUN npm run build

EXPOSE 3001

CMD [ "npm", "run",  "start" ]