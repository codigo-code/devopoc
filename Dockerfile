FROM node:12
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
#RUN npm install # DESCOMENTAR para que funcione choca con glovo
COPY --chown=node:node . .
#ENV PORT 3000
EXPOSE 3000
CMD ["npm", "run", "start"]