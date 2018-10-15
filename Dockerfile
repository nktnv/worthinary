FROM ruby:2.5.0-slim

RUN apt-get update -qq && apt-get install \
    -y --no-install-recommends git build-essential libpq-dev postgresql-client \
    && rm -rf /var/lib/apt/lists/*

ENV WEB_ROOT /web
RUN mkdir $WEB_ROOT
WORKDIR $WEB_ROOT

EXPOSE 3000
