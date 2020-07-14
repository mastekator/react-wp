# Установка

docker-compose up -d

Используемые плагины для WP:
- >https://github.com/wp-graphql/wp-graphql
- >https://github.com/wp-graphql/wp-graphql-woocommerce
- >https://github.com/wp-graphql/wp-graphiql
- >https://github.com/funkhaus/wp-graphql-cors
- >https://github.com/wp-graphql/wp-graphql-acf

## htaccess

- SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
 
## wp-config

- define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'your-secret-token' )
- define( 'GRAPHQL_DEBUG', true );