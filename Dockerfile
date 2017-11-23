from node:latest

RUN useradd --user-group --create-home --shell /bin/false nodejs

ENV HOME=/home/nodejs

COPY package.json package-lock.json $HOME/app/
RUN chown -R nodejs:nodejs $HOME/*
USER nodejs
WORKDIR $HOME/app
RUN npm install

CMD ["npm", "run", "start"]