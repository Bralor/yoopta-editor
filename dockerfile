# Použijeme základní obraz s Node.js
FROM node:18

# Nastavíme pracovní adresář
WORKDIR /app

# Nainstalujeme závislosti
RUN yarn add express serve @babel/core react react-scripts react-dom slate \
    slate-react @yoopta/editor @yoopta/paragraph @yoopta/blockquote \
    @yoopta/exports @babel/plugin-proposal-private-property-in-object

# Zkopírujeme zbytek aplikace do pracovního adresáře
COPY . .

# Sestavíme aplikaci pro produkční prostředí
RUN yarn build

# Nainstalujeme sloužící server
RUN yarn global add serve

# Exponujeme port
EXPOSE 5002

# Definujeme příkaz, který bude spuštěn při startu kontejneru
CMD ["serve", "-s", "build", "-l", "5002"]
