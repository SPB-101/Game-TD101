#!/bin/bash
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$POSTGRES_DB"  <<-EOSQL
      CREATE SCHEMA if not exists $SCHEMA;
      CREATE TABLE $SCHEMA.topics (
          id SERIAL UNIQUE ,
          title VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE NOT NULL,
          updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
          PRIMARY KEY ("id"));
      CREATE TABLE $SCHEMA.comments (
          id SERIAL UNIQUE,
          message VARCHAR(1000) NOT NULL,
          id_user INTEGER NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE NOT NULL,
          updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
          id_topic INTEGER REFERENCES "topics" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
          PRIMARY KEY ("id"));
      CREATE TABLE $SCHEMA.settings (
          id SERIAL,
          id_user INTEGER NOT NULL UNIQUE,
          theme VARCHAR(255),
          PRIMARY KEY ("id")
      );
      CREATE TABLE IF NOT EXISTS $SCHEMA.likes (
          id SERIAL UNIQUE,
          id_user INTEGER NOT NULL,
          id_comment INTEGER NOT NULL REFERENCES "comments" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
          created_at TIMESTAMP WITH TIME ZONE NOT NULL,
          updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
          UNIQUE ("id_user", "id_comment"),
          PRIMARY KEY ("id")
      );
EOSQL
