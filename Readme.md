# Установка

docker-compose up -d

Используемые плагины для WP:
- >Advanced Custom Fields и ACF to REST API
- >Custom Post Type UI
- >JWT Authentication for WP-API

## htaccess

- RewriteCond %{HTTP:Authorization} ^(.*)
- RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
- SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
 
## wp-config

- define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
- define('JWT_AUTH_CORS_ENABLE', true);