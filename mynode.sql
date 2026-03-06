create database if not exists mynode;
use mynode;
create table if not exists produtos(
   codProduto int auto_increment primary key,
   descricao varchar(80) not null,
   quantidade int
);
insert into produtos(descricao, quantidade) values ('mesa', 5);
insert into produtos(descricao, quantidade) values ('cadeira', 10);
insert into produtos(descricao, quantidade) values ('mouse', 8);
select * from produtos;
