FROM mysql:latest

MAINTAINER baeldung.com

RUN chown -R mysql:root /var/lib/mysql/


ENV MYSQL_DATABASE=vehicules_rest
ENV MYSQL_ROOT_PASSWORD=root

ADD vehicules_rest.sql /etc/mysql/data.sql

RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' /etc/mysql/data.sql
RUN cp /etc/mysql/data.sql /docker-entrypoint-initdb.d

EXPOSE 3306