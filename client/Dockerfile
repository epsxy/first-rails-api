FROM node:stretch

RUN apt-get update && apt-get install -y nginx

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn install

COPY . /usr/src/app

RUN yarn build

RUN cp -r build/. /var/www/html

RUN rm -rf /usr/src/app

CMD ["nginx","-g","daemon off;"]