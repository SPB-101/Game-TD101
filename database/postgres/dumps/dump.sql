--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

-- Started on 2021-05-16 17:41:39 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16408)
-- Name: messages; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.messages (
    id_message bigint NOT NULL,
    message character(1000) NOT NULL,
    id_theme bigint NOT NULL,
    id_user bigint NOT NULL,
    create_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.messages OWNER TO root;

--
-- TOC entry 201 (class 1259 OID 16403)
-- Name: settings; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.settings (
    id_user bigint NOT NULL,
    theme boolean NOT NULL
);


ALTER TABLE public.settings OWNER TO root;

--
-- TOC entry 200 (class 1259 OID 16385)
-- Name: themes; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.themes (
    id_theme bigint NOT NULL,
    title character(255) NOT NULL
);


ALTER TABLE public.themes OWNER TO root;

--
-- TOC entry 2819 (class 2606 OID 16429)
-- Name: messages id_message_unique; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT id_message_unique UNIQUE (id_message) INCLUDE (id_message);


--
-- TOC entry 2812 (class 2606 OID 16389)
-- Name: themes id_theme_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.themes
    ADD CONSTRAINT id_theme_pkey PRIMARY KEY (id_theme);


--
-- TOC entry 2814 (class 2606 OID 16431)
-- Name: themes id_theme_unique; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.themes
    ADD CONSTRAINT id_theme_unique UNIQUE (id_theme) INCLUDE (id_theme);


--
-- TOC entry 2816 (class 2606 OID 16407)
-- Name: settings id_user_unique; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT id_user_unique UNIQUE (id_user) INCLUDE (id_user);


--
-- TOC entry 2821 (class 2606 OID 16422)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id_message) INCLUDE (id_message);


--
-- TOC entry 2817 (class 1259 OID 16420)
-- Name: fki_id_theme; Type: INDEX; Schema: public; Owner: root
--

CREATE INDEX fki_id_theme ON public.messages USING btree (id_theme);


--
-- TOC entry 2822 (class 2606 OID 16415)
-- Name: messages id_theme_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT id_theme_fkey FOREIGN KEY (id_theme) REFERENCES public.themes(id_theme) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


-- Completed on 2021-05-16 17:41:39 UTC

--
-- PostgreSQL database dump complete
--

