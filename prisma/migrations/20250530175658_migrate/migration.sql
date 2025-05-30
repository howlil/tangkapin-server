/*
  Warnings:

  - A unique constraint covering the columns `[IP]` on the table `CCTV` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CCTV_IP_key" ON "CCTV"("IP");
