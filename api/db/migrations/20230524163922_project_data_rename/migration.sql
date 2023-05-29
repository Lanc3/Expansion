/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Project";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProjectData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientWebsite" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "tools" TEXT NOT NULL,
    "body" TEXT NOT NULL
);
