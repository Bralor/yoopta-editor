FROM node:18

# Nastavíme pracovní adresář
WORKDIR /app

# Kopie prerekvizit
COPY package.json .
COPY yarn.lock .

# Nainstalujeme závislosti
#RUN yarn add express serve @babel/core react react-scripts react-dom slate \
    #slate-react @yoopta/editor @yoopta/paragraph @yoopta/blockquote fs \
    #@yoopta/exports @babel/plugin-proposal-private-property-in-object
RUN yarn install

# Zkopírujeme zbytek aplikace do pracovního adresáře
COPY . .

# Spusť endpoint
CMD ["/bin/sh"]
