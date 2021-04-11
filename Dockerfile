# name: rlaworhkd430/sql-executor
# working_dir: /tmp
FROM mysql:5.7

WORKDIR /tmp

ENV MYSQL_HOST null

COPY ./init.sql ./init.sql

CMD ["bash", "-c", "mysql -h $MYSQL_HOST --port=3306 < ./init.sql"]