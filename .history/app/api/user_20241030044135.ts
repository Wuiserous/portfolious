// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Destructure all relevant fields, including skill metrics
    const {
      name,
      email,
      image,
      username,
      likes = 0,
      ignites = 0,
      saves = 0,
      comments = 0,
      challengeEngagement = 0,
      challengesCompleted = 0,
      problemsSolved = 0,
      collaborationInvites = 0,
      mentions = 0,
      projectsContributed = 0,
      commitFrequency = 0,
      postFrequency = 0,
      suggestionDrops = 0,
      suggestionsAccepted = 0,
      projectEngagementClicks = 0,
      timeSpent = 0,
      qualityScore = 0,
      utilityScore = 0,
      engagementRate = 0,
      problemSolvingScore = 0,
      leadershipScore = 0,
      innovationScore = 0,
      skillMirrorScore = 0,
    } = req.body;

    // Ensure the required fields are present
    if (!name || !email || !image || !username) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    try {
      const user = await prisma.user.create({
        data: {
          name,
          username
          email,
          avatarUrl: image,
          username,
          // Initialize skill metrics
          likes,
          ignites,
          saves,
          comments,
          challengeEngagement,
          challengesCompleted,
          problemsSolved,
          collaborationInvites,
          mentions,
          projectsContributed,
          commitFrequency,
          postFrequency,
          suggestionDrops,
          suggestionsAccepted,
          projectEngagementClicks,
          timeSpent,
          qualityScore,
          utilityScore,
          engagementRate,
          problemSolvingScore,
          leadershipScore,
          innovationScore,
          skillMirrorScore,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user.", error });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users.", error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
