FROM mysql:5.7

# According to the documentation, files in the following folder
# will be executed during container initialization
# Ref: https://hub.docker.com/_/mysql
#
# We will use it to create the database and populate it
COPY *.sql /docker-entrypoint-initdb.d/
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/
RUN chmod a+x /docker-entrypoint-initdb.d/*