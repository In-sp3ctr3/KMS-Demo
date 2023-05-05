# Build the client
FROM node:16-alpine AS client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Build the server
FROM node:16-alpine AS server
WORKDIR /app/server
COPY package*.json ./
RUN npm install --production
COPY --from=client /app/client/build ./public
COPY . .
EXPOSE 3000
CMD ["npm", "start"]