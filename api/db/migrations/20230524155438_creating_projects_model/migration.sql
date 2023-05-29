-- CreateTable
CREATE TABLE "Projects" (
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
