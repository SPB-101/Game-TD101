#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$POSTGRES_DB"  <<-EOSQL
     create schema if not exists $SCHEMA;
     CREATE TABLE $SCHEMA.topics (
          id  SERIAL UNIQUE ,
          title VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE NOT NULL,
          updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
          PRIMARY KEY ("id"));
     CREATE TABLE $SCHEMA.messages (
          id  SERIAL UNIQUE,
          message VARCHAR(1000) NOT NULL,
          id_user INTEGER NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE NOT NULL,
          updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
          id_topic INTEGER REFERENCES "topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
          PRIMARY KEY ("id"));
     CREATE TABLE $SCHEMA.settings (
          id serial,
          id_user INTEGER NOT NULL UNIQUE,
          theme varchar(255),
          primary key ("id")
      );
EOSQL
