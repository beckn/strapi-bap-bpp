echo "Setting up Strapi Plugins..."

git clone https://github.com/beckn/strapi-plugins src/plugins

(cd src/plugins/plugins && git checkout feat/deg)

(cd src/plugins/plugins/beckn-bpp-adapter && npm install -f && npm run build)

cp config/plugins.js.sample config/plugins.js