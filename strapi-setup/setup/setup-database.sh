docker-compose -f mysql-docker-compose.yml up -d

# Wait for MySQL to be ready
echo "Waiting for MySQL Database to be ready..."
while ! docker exec mysql-container mysqladmin ping -h localhost -u root -proot --silent; do
    sleep 1
done
echo "MySQL is ready!"

docker cp ./strapi_dump.sql mysql-container:/strapi_dump.sql
docker exec -it mysql-container mysql -uroot -proot -e "CREATE USER 'root'@'%' IDENTIFIED BY 'root'; GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; FLUSH PRIVILEGES;"

docker exec -it mysql-container mysql -uroot -proot -e "CREATE DATABASE strapi_deg_local;"
docker exec -it mysql-container mysql -hlocalhost -uroot -proot strapi_deg_local < ./strapi_dump.sql
echo "Database loaded successfully"