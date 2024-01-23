/*
  Warnings:

  - Added the required column `packageFare` to the `Earning` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Earning_phone_key` ON `Earning`;

-- AlterTable
ALTER TABLE `Earning` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `packageFare` INTEGER NOT NULL;
