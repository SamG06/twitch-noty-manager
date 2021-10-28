FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY src/db ./src/db

# Install app dependencies
RUN npm install

WORKDIR /app/src/db

RUN npx prisma generate

WORKDIR /app

COPY . .

FROM node:16

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app ./

ENV DATABASE_URL="postgresql://postgres:postgres@twitch-noty-manager-postgres-1/postgres?schema=public"

CMD [ "npm", "run", "start" ]