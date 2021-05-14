CREATE TABLE `m_user` (
  `id` int(11) NOT NULL COMMENT 'id',
  `name` varchar(10) DEFAULT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ユーザー'