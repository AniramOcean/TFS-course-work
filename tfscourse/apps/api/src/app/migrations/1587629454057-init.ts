import {MigrationInterface, QueryRunner} from "typeorm";

export class init1587629454057 implements MigrationInterface {
  name = 'init1587629454057'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    await queryRunner.query("CREATE TABLE `board` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    await queryRunner.query("CREATE TABLE `task_list` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `date` datetime DEFAULT NOW(), `boardId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    await queryRunner.query("CREATE TABLE `task` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `taskListId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    await queryRunner.query("ALTER TABLE `board` ADD CONSTRAINT `FK_35472b1fe48b6330cd349709564` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    await queryRunner.query("ALTER TABLE `task_list` ADD CONSTRAINT `FK_e89214e5c0d14eb5296ebd18e6c` FOREIGN KEY (`boardId`) REFERENCES `board`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    await queryRunner.query("ALTER TABLE `task` ADD CONSTRAINT `FK_e89214e5c0d14eb5296ebd18111` FOREIGN KEY (`taskListId`) REFERENCES `task_list`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    await queryRunner.query("ALTER TABLE `task_list` ADD COLUMN `status` smallint NOT NULL DEFAULT 0", undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `task` DROP FOREIGN KEY `FK_e89214e5c0d14eb5296ebd18111`", undefined);
    await queryRunner.query("ALTER TABLE `task_list` DROP FOREIGN KEY `FK_e89214e5c0d14eb5296ebd18e6c`", undefined);
    await queryRunner.query("ALTER TABLE `board` DROP FOREIGN KEY `FK_35472b1fe48b6330cd349709564`", undefined);
    await queryRunner.query("DROP TABLE `task`", undefined);
    await queryRunner.query("DROP TABLE `task_list`", undefined);
    await queryRunner.query("DROP TABLE `board`", undefined);
    await queryRunner.query("DROP TABLE `user`", undefined);
  }
}
