# preparing database

Do the following thing through root.
```sql
create database shopdb;
create user shopper identified by 'shoppass';
use shopdb;
grant all privileges on shopdb to shopper;
grant all privileges on shopdb.* to shopper;
```