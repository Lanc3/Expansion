import { db } from "../../lib/db";
export const nicolaPosts = () => {
  return db.nicolaPost.findMany();
};
export const nicolaPost = ({
  id
}) => {
  return db.nicolaPost.findUnique({
    where: {
      id
    }
  });
};
export const createNicolaPost = ({
  input
}) => {
  return db.nicolaPost.create({
    data: input
  });
};
export const updateNicolaPost = ({
  id,
  input
}) => {
  return db.nicolaPost.update({
    data: input,
    where: {
      id
    }
  });
};
export const deleteNicolaPost = ({
  id
}) => {
  return db.nicolaPost.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsIm5pY29sYVBvc3RzIiwibmljb2xhUG9zdCIsImZpbmRNYW55IiwiaWQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGVOaWNvbGFQb3N0IiwiaW5wdXQiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlTmljb2xhUG9zdCIsInVwZGF0ZSIsImRlbGV0ZU5pY29sYVBvc3QiLCJkZWxldGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcGkvc3JjL3NlcnZpY2VzL25pY29sYVBvc3RzL25pY29sYVBvc3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcblxuZXhwb3J0IGNvbnN0IG5pY29sYVBvc3RzID0gKCkgPT4ge1xuICByZXR1cm4gZGIubmljb2xhUG9zdC5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBjb25zdCBuaWNvbGFQb3N0ID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIubmljb2xhUG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTmljb2xhUG9zdCA9ICh7IGlucHV0IH0pID0+IHtcbiAgcmV0dXJuIGRiLm5pY29sYVBvc3QuY3JlYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU5pY29sYVBvc3QgPSAoeyBpZCwgaW5wdXQgfSkgPT4ge1xuICByZXR1cm4gZGIubmljb2xhUG9zdC51cGRhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVOaWNvbGFQb3N0ID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIubmljb2xhUG9zdC5kZWxldGUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEVBQUU7QUFFWCxPQUFPLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0VBQy9CLE9BQU9ELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsT0FBTyxNQUFNRCxVQUFVLEdBQUdBLENBQUM7RUFBRUU7QUFBRyxDQUFDLEtBQUs7RUFDcEMsT0FBT0osRUFBRSxDQUFDRSxVQUFVLENBQUNHLFVBQVUsQ0FBQztJQUM5QkMsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNRyxnQkFBZ0IsR0FBR0EsQ0FBQztFQUFFQztBQUFNLENBQUMsS0FBSztFQUM3QyxPQUFPUixFQUFFLENBQUNFLFVBQVUsQ0FBQ08sTUFBTSxDQUFDO0lBQzFCQyxJQUFJLEVBQUVGO0VBQ1IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUcsZ0JBQWdCLEdBQUdBLENBQUM7RUFBRVAsRUFBRTtFQUFFSTtBQUFNLENBQUMsS0FBSztFQUNqRCxPQUFPUixFQUFFLENBQUNFLFVBQVUsQ0FBQ1UsTUFBTSxDQUFDO0lBQzFCRixJQUFJLEVBQUVGLEtBQUs7SUFDWEYsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNUyxnQkFBZ0IsR0FBR0EsQ0FBQztFQUFFVDtBQUFHLENBQUMsS0FBSztFQUMxQyxPQUFPSixFQUFFLENBQUNFLFVBQVUsQ0FBQ1ksTUFBTSxDQUFDO0lBQzFCUixLQUFLLEVBQUU7TUFBRUY7SUFBRztFQUNkLENBQUMsQ0FBQztBQUNKLENBQUMifQ==