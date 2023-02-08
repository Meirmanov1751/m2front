FROM node:16

WORKDIR ./m2front

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run dev

RUN npm run build

CMD ["npm", "start"]
