import type { AxiosInstance } from "axios";

export const createFeedSearchForumService = (api: AxiosInstance) => {
  return {
    searchForums: async (
      query: string,
      limit: number = 10,
      offset: number = 0
    ) => {
      const response = await api.get(`/search/forums`, {
        params: {
          query,
          limit,
          offset,
        },
      });
      return { data: response.data.data, isMatch: response.data.isMatch };
    },
  };
};

// export const searchForumsService = async (
//   query: string,
//   limit: number,
//   offset: number,
//   userId: number
// ) => {
//   try {
//     const searchResults = await meilisearch.index("forums").search(query, {
//       limit,
//       offset,
//     });
//     const idsFromSearch = searchResults.hits.map((hit: any) => hit.id);
//     const cachedResults = (await redis.mGet(
//       idsFromSearch.map((id) => `forums:${id}`)
//     )) as (string | null)[];

//     const hits: any[] = [];
//     const missedIds: number[] = [];

//     if (cachedResults.length > 0) {
//       cachedResults.forEach((item, idx) => {
//         if (item) hits.push(JSON.parse(item));
//         else missedIds.push(idsFromSearch[idx]);
//       });
//     }

//     // 3️⃣ Fetch missing forums from DB
//     let missedForums: any[] = [];
//     if (missedIds.length > 0) {
//       const forumRows = await db
//         .select({
//           id: forums.id,
//           userId: forums.userId,
//           title: forums.title,
//           description: forums.description,
//           type: forums.type,
//           topic: forums.topic,
//           createdAt: forums.createdAt,
//           updatedAt: forums.updatedAt,
//           mediaUrl: forumMedias.url,
//           mediaType: forumMedias.mediaType,
//           username: sql`${users.firstName} || ' ' || ${users.lastName}`,
//           profileImage: users.profileImage,
//         })
//         .from(forums)
//         .leftJoin(forumMedias, eq(forums.id, forumMedias.forumId))
//         .leftJoin(users, eq(forums.userId, users.id))
//         .where(inArray(forums.id, missedIds));

//       const forumMap = new Map<number, any>();
//       for (const forum of forumRows) {
//         if (!forumMap.has(forum.id)) {
//           const formatted = {
//             id: forum.id,
//             userId: forum.userId,
//             title: forum.title,
//             description: forum.description,
//             type: forum.type,
//             topic: forum.topic,
//             createdAt: forum.createdAt,
//             updatedAt: forum.updatedAt,
//             username: forum.username,
//             profileImage: forum.profileImage,
//             media: [] as { url: string; type: string }[],
//           };
//           forumMap.set(forum.id, formatted);
//           missedForums.push(formatted);
//         }

//         if (forum.mediaUrl) {
//           forumMap.get(forum.id).media.push({
//             url: forum.mediaUrl,
//             type: forum.mediaType,
//           });
//         }
//       }

//       // Write missed forums to Redis
//       for (const forum of missedForums) {
//         await redis.set(`forums:${forum.id}`, JSON.stringify(forum), {
//           EX: 600,
//         });
//       }
//     }

//     // 4️⃣ Merge hits and missed forums, preserving original order
//     const allForumsMap = new Map<number, any>();
//     for (const forum of [...hits, ...missedForums])
//       allForumsMap.set(forum.id, forum);
//     const allForums = idsFromSearch.map((f) => allForumsMap.get(f.id));

//     // 5️⃣ Fetch dynamic fields fresh
//     const dynamicData = await db
//       .select({
//         id: forums.id,
//         viewCount: forums.viewCount,
//         likeCount: sql`COUNT(DISTINCT ${forumLikes.id})`,
//         isLiked: sql`CASE WHEN ${forumLikes.forumId} IS NOT NULL THEN true ELSE false END`,
//       })
//       .from(forums)
//       .leftJoin(
//         forumLikes,
//         and(
//           eq(forumLikes.forumId, forums.id),
//           eq(forumLikes.userId, Number(userId))
//         )
//       )
//       .where(
//         inArray(
//           forums.id,
//           idsFromSearch.map((f) => f.id)
//         )
//       )
//       .groupBy(forums.id, forumLikes.forumId);

//     const forumsWithMedia = allForums.map((f) => {
//       const dynamic = dynamicData.find((d) => d.id === f.id);
//       return {
//         ...f,
//         viewCount: (dynamic?.viewCount ?? 0) + 1,
//         likeCount: Number(dynamic?.likeCount) || 0,
//         isLiked: !!dynamic?.isLiked,
//       };
//     });

//     return { data: forumsWithMedia, hasMore: allForums.length === limit };
//   } catch (error) {
//     console.error("Error searching blogs:", error);
//     throw error;
//   }
// };
