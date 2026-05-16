-- AlterTable: Add user settings preferences
ALTER TABLE "User" ADD COLUMN "themePreference" TEXT DEFAULT 'system',
ADD COLUMN "emailNotifications" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN "pushNotifications" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN "aiGenerationEnabled" BOOLEAN NOT NULL DEFAULT true;
