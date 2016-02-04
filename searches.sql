CREATE TABLE searches (
  id serial NOT NULL,
  price character varying NOT NULL,
  user_id character varying NOT NULL,
  origin character varying NOT NULL,
  destination character varying NOT NULL,
  created_at timestamp without time zone DEFAULT now() NOT NULL,
  updated_at timestamp without time zone DEFAULT now() NOT NULL,
  CONSTRAINT searches_pkey PRIMARY KEY (id)
);
