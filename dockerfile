FROM node:18

# Nastavíme pracovní adresář
WORKDIR /app

# Kopie prerekvizit
COPY package.json .
COPY yarn.lock .

# Nainstalujeme závislosti
#RUN yarn init -y
#RUN yarn add xmldom express serve @babel/core react react-scripts react-dom slate \
#    slate-react @yoopta/editor @yoopta/paragraph @yoopta/blockquote fs \
#    @yoopta/exports @babel/plugin-proposal-private-property-in-object \
#    xmldom
RUN yarn install

# Zkopírujeme zbytek aplikace do pracovního adresáře
COPY . .
