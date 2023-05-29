/*
  Warnings:

  - Added the required column `by` to the `ProjectData` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProjectData" (
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
    "body" TEXT NOT NULL,
    "by" TEXT NOT NULL
);
INSERT INTO "new_ProjectData" ("body", "category", "clientName", "clientWebsite", "createdAt", "id", "image", "objective", "title", "tools", "video") SELECT "body", "category", "clientName", "clientWebsite", "createdAt", "id", "image", "objective", "title", "tools", "video" FROM "ProjectData";
DROP TABLE "ProjectData";
ALTER TABLE "new_ProjectData" RENAME TO "ProjectData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
