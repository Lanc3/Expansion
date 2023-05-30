// api/src/graphql/mutations/updatePostLikes.js

import { db } from "../../lib/db";
export const updatePostLikes = async ({
  id
}) => {
  const post = await db.post.update({
    where: {
      id
    },
    data: {
      likeAmount: {
        increment: 1
      }
    }
  });
  return post;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsInVwZGF0ZVBvc3RMaWtlcyIsImlkIiwicG9zdCIsInVwZGF0ZSIsIndoZXJlIiwiZGF0YSIsImxpa2VBbW91bnQiLCJpbmNyZW1lbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvbXV0YXRpb25zL3VwZGF0ZVBvc3RMaWtlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkvc3JjL2dyYXBocWwvbXV0YXRpb25zL3VwZGF0ZVBvc3RMaWtlcy5qc1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQb3N0TGlrZXMgPSBhc3luYyAoeyBpZCB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5wb3N0LnVwZGF0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgICBkYXRhOiB7XG4gICAgICBsaWtlQW1vdW50OiB7XG4gICAgICAgIGluY3JlbWVudDogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4gcG9zdFxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxFQUFFO0FBRVgsT0FBTyxNQUFNQyxlQUFlLEdBQUcsTUFBQUEsQ0FBTztFQUFFQztBQUFHLENBQUMsS0FBSztFQUMvQyxNQUFNQyxJQUFJLEdBQUcsTUFBTUgsRUFBRSxDQUFDRyxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUNoQ0MsS0FBSyxFQUFFO01BQUVIO0lBQUcsQ0FBQztJQUNiSSxJQUFJLEVBQUU7TUFDSkMsVUFBVSxFQUFFO1FBQ1ZDLFNBQVMsRUFBRTtNQUNiO0lBQ0Y7RUFDRixDQUFDLENBQUM7RUFFRixPQUFPTCxJQUFJO0FBQ2IsQ0FBQyJ9