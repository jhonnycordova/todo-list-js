FROM node:16.4-slim
WORKDIR /code

COPY package.json .
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH="/code/node_modules/.bin:$PATH"
ENV PATH=$PATH:/home/node/.npm-global/bin
RUN yarn
RUN yarn global add nodemon

EXPOSE 80
RUN apt-get update && apt-get install git zsh curl -y

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
COPY . .

CMD ["yarn", "dev"]
