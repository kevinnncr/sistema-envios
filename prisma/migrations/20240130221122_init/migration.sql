-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "PhoneNumber" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipments" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "destination" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "responsableid" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "delivered" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "remitter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "remitter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receiver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "receiver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_responsableid_fkey" FOREIGN KEY ("responsableid") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
