-- CreateEnum
CREATE TYPE "WeddingAnalyticsEvent" AS ENUM ('PAGE_VIEW', 'OPEN_INVITATION', 'MAP_CLICK', 'CALENDAR_CLICK', 'RSVP_SUBMIT');

-- CreateTable
CREATE TABLE "Wedding" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "groomShortName" TEXT NOT NULL,
    "brideShortName" TEXT NOT NULL,
    "groomFullName" TEXT NOT NULL,
    "brideFullName" TEXT NOT NULL,
    "groomParents" TEXT,
    "brideParents" TEXT,
    "groomChildOrder" TEXT,
    "brideChildOrder" TEXT,
    "eventDate" TIMESTAMP(3),
    "dateLabel" TEXT,
    "timeLabel" TEXT,
    "venueName" TEXT,
    "venueAddress" TEXT,
    "mapUrl" TEXT,
    "template" TEXT NOT NULL DEFAULT 'RAMA',
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeddingGuest" (
    "id" TEXT NOT NULL,
    "weddingId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "groupName" TEXT,
    "maxGuests" INTEGER NOT NULL DEFAULT 1,
    "inviteToken" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeddingGuest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeddingRsvp" (
    "id" TEXT NOT NULL,
    "weddingId" TEXT NOT NULL,
    "guestId" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "status" "AttendanceStatus" NOT NULL,
    "guestCount" INTEGER NOT NULL DEFAULT 1,
    "message" TEXT,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeddingRsvp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeddingAnalytics" (
    "id" TEXT NOT NULL,
    "weddingId" TEXT NOT NULL,
    "guestId" TEXT,
    "event" "WeddingAnalyticsEvent" NOT NULL,
    "sessionKey" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeddingAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wedding_slug_key" ON "Wedding"("slug");

-- CreateIndex
CREATE INDEX "Wedding_isPublished_idx" ON "Wedding"("isPublished");

-- CreateIndex
CREATE UNIQUE INDEX "WeddingGuest_inviteToken_key" ON "WeddingGuest"("inviteToken");

-- CreateIndex
CREATE INDEX "WeddingGuest_weddingId_createdAt_idx" ON "WeddingGuest"("weddingId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "WeddingRsvp_guestId_key" ON "WeddingRsvp"("guestId");

-- CreateIndex
CREATE INDEX "WeddingRsvp_weddingId_createdAt_idx" ON "WeddingRsvp"("weddingId", "createdAt");

-- CreateIndex
CREATE INDEX "WeddingRsvp_weddingId_status_idx" ON "WeddingRsvp"("weddingId", "status");

-- CreateIndex
CREATE INDEX "WeddingAnalytics_weddingId_event_createdAt_idx" ON "WeddingAnalytics"("weddingId", "event", "createdAt");

-- CreateIndex
CREATE INDEX "WeddingAnalytics_guestId_event_idx" ON "WeddingAnalytics"("guestId", "event");

-- CreateIndex
CREATE INDEX "WeddingAnalytics_sessionKey_idx" ON "WeddingAnalytics"("sessionKey");

-- AddForeignKey
ALTER TABLE "WeddingGuest" ADD CONSTRAINT "WeddingGuest_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingRsvp" ADD CONSTRAINT "WeddingRsvp_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingRsvp" ADD CONSTRAINT "WeddingRsvp_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "WeddingGuest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingAnalytics" ADD CONSTRAINT "WeddingAnalytics_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingAnalytics" ADD CONSTRAINT "WeddingAnalytics_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "WeddingGuest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
