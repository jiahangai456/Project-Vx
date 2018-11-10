CREATE DATABASE jhvx CHARSET=utf8;
USE jhvs;
CREATE TABLE lbimg(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(50)
);
INSERT INTO lbimg VALUES(
    NULL,"http://127.0.0.1:3000/img/lb1.png","图片1"
);
INSERT INTO lbimg VALUES(
    NULL,"http://127.0.0.1:3000/img/lb2.png","图片1"
);
INSERT INTO lbimg VALUES(
    NULL,"http://127.0.0.1:3000/img/lb3.png","图片1"
);
INSERT INTO lbimg VALUES(
    NULL,"http://127.0.0.1:3000/img/lb4.jpg","图片1"
);

CREATE TABLE spimg(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(50),
    dtitle VARCHAR(50),
    price VARCHAR(10)
);

INSERT INTO spimg VALUES(
    NULL,"http://127.0.0.1:3000/img/sp1.png","无籽红提新鲜葡萄","热卖水果","23"
);
INSERT INTO spimg VALUES(
    NULL,"http://127.0.0.1:3000/img/sp2.png","进口新鲜香蕉水果","进口水果","15"
);
INSERT INTO spimg VALUES(
    NULL,"http://127.0.0.1:3000/img/sp3.png","红心火龙果","热卖水果","21"
);
INSERT INTO spimg VALUES(
    NULL,"http://127.0.0.1:3000/img/sp4.png","精品红富士水果","热卖水果","13"
);