-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

INSERT INTO `task` (`id`, `title`, `taskListId`) VALUES
(1,	'Первая задача',	1),
(2,	'Вторая задача',	1),
(3,	'Третья задача',	1),
(4,	'Четвертая задача',	1),
(5,	'Пятая задача', 1);

INSERT INTO `task_list` (`id`, `title`, `date`, `boardId`) VALUES
(1,	'Первый список',	'2020-05-02 07:09:23',	1),
(2,	'Второй список',	'2020-05-02 07:10:04',	1),
(3,	'Третий список',	'2020-05-02 07:10:47',	1),
(4,	'Четвертый список',	'2020-05-02 07:11:32',	1);

INSERT INTO `board` (`id`, `title`, `userId`) VALUES
(1,	'Моя доска нумеро уно',	1);

INSERT INTO `user` (`id`, `firstName`, `lastName`, `username`, `password`, `isActive`) VALUES
(1,	'firstname', 'lastname', 'user', 'password',	1);


-- 2020-04-23 07:12:12
