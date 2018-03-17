#Introduction

## Install && Setup mysql
```
brew install mysql
brew services start mysql
mysql -u root
create database snakes
use snakes
```

## Setup Environment
```
npm install
npm run buildEnv
npm run setup:rest-server
npm run db:setup:rest-server
```

### Start the Servers
```
npm run start
```