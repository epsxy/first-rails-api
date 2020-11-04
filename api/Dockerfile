FROM ruby:2.7.0
RUN apt-get update -qq && apt-get install -y nodejs sqlite3 --no-install-recommends

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/
COPY Gemfile.lock /usr/src/app/

RUN gem install bundler -v 2.1.2
RUN bundle install

COPY . /usr/src/app

# initialise DB
RUN rake db:schema:load
RUN rake db:seed:replant

CMD ["rails", "server", "-b", "0.0.0.0"]