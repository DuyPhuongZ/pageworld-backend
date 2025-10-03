/*
  Warnings:

  - You are about to drop the `user_roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user_roles` DROP FOREIGN KEY `user_roles_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `user_roles` DROP FOREIGN KEY `user_roles_userId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `roleId` INTEGER NULL;

-- DropTable
DROP TABLE `user_roles`;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
