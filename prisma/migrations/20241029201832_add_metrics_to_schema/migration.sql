-- AlterTable
ALTER TABLE "User" ADD COLUMN     "challengeEngagement" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "challengesCompleted" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "collaborationInvites" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "comments" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "commitFrequency" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "engagementRate" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "ignites" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "innovationScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "leadershipScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "mentions" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "postFrequency" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "problemSolvingScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "problemsSolved" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "projectEngagementClicks" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "projectsContributed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "qualityScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "saves" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "skillMirrorScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "suggestionDrops" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "suggestionsAccepted" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "timeSpent" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "utilityScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0;
