import { authDecoder } from '@redwoodjs/auth-dbauth-api';
import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_nicolaPosts_sdl from "../graphql/nicolaPosts.sdl";
sdls.nicolaPosts_sdl = sdls_nicolaPosts_sdl;
import * as sdls_posts_sdl from "../graphql/posts.sdl";
sdls.posts_sdl = sdls_posts_sdl;
import * as sdls_projectDatas_sdl from "../graphql/projectDatas.sdl";
sdls.projectDatas_sdl = sdls_projectDatas_sdl;
import * as sdls_projects_sdl from "../graphql/projects.sdl";
sdls.projects_sdl = sdls_projects_sdl;
let services = {};
import * as services_nicolaPosts_nicolaPosts from "../services/nicolaPosts/nicolaPosts";
services.nicolaPosts_nicolaPosts = services_nicolaPosts_nicolaPosts;
import * as services_posts_posts from "../services/posts/posts";
services.posts_posts = services_posts_posts;
import * as services_projectDatas_projectDatas from "../services/projectDatas/projectDatas";
services.projectDatas_projectDatas = services_projectDatas_projectDatas;
import * as services_projects_projects from "../services/projects/projects";
services.projects_projects = services_projects_projects;
import { getCurrentUser } from "../lib/auth";
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  authDecoder,
  getCurrentUser,
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhdXRoRGVjb2RlciIsImNyZWF0ZUdyYXBoUUxIYW5kbGVyIiwiZGlyZWN0aXZlcyIsImRpcmVjdGl2ZXNfcmVxdWlyZUF1dGhfcmVxdWlyZUF1dGgiLCJyZXF1aXJlQXV0aF9yZXF1aXJlQXV0aCIsImRpcmVjdGl2ZXNfc2tpcEF1dGhfc2tpcEF1dGgiLCJza2lwQXV0aF9za2lwQXV0aCIsInNkbHMiLCJzZGxzX25pY29sYVBvc3RzX3NkbCIsIm5pY29sYVBvc3RzX3NkbCIsInNkbHNfcG9zdHNfc2RsIiwicG9zdHNfc2RsIiwic2Rsc19wcm9qZWN0RGF0YXNfc2RsIiwicHJvamVjdERhdGFzX3NkbCIsInNkbHNfcHJvamVjdHNfc2RsIiwicHJvamVjdHNfc2RsIiwic2VydmljZXMiLCJzZXJ2aWNlc19uaWNvbGFQb3N0c19uaWNvbGFQb3N0cyIsIm5pY29sYVBvc3RzX25pY29sYVBvc3RzIiwic2VydmljZXNfcG9zdHNfcG9zdHMiLCJwb3N0c19wb3N0cyIsInNlcnZpY2VzX3Byb2plY3REYXRhc19wcm9qZWN0RGF0YXMiLCJwcm9qZWN0RGF0YXNfcHJvamVjdERhdGFzIiwic2VydmljZXNfcHJvamVjdHNfcHJvamVjdHMiLCJwcm9qZWN0c19wcm9qZWN0cyIsImdldEN1cnJlbnRVc2VyIiwiZGIiLCJsb2dnZXIiLCJoYW5kbGVyIiwibG9nZ2VyQ29uZmlnIiwib3B0aW9ucyIsIm9uRXhjZXB0aW9uIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2Z1bmN0aW9ucy9ncmFwaHFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhEZWNvZGVyIH0gZnJvbSAnQHJlZHdvb2Rqcy9hdXRoLWRiYXV0aC1hcGknXG5pbXBvcnQgeyBjcmVhdGVHcmFwaFFMSGFuZGxlciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCBkaXJlY3RpdmVzIGZyb20gJ3NyYy9kaXJlY3RpdmVzLyoqLyoue2pzLHRzfSdcbmltcG9ydCBzZGxzIGZyb20gJ3NyYy9ncmFwaHFsLyoqLyouc2RsLntqcyx0c30nXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnc3JjL3NlcnZpY2VzLyoqLyoue2pzLHRzfSdcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICdzcmMvbGliL2F1dGgnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvbGliL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVHcmFwaFFMSGFuZGxlcih7XG4gIGF1dGhEZWNvZGVyLFxuICBnZXRDdXJyZW50VXNlcixcbiAgbG9nZ2VyQ29uZmlnOiB7IGxvZ2dlciwgb3B0aW9uczoge30gfSxcbiAgZGlyZWN0aXZlcyxcbiAgc2RscyxcbiAgc2VydmljZXMsXG4gIG9uRXhjZXB0aW9uOiAoKSA9PiB7XG4gICAgLy8gRGlzY29ubmVjdCBmcm9tIHlvdXIgZGF0YWJhc2Ugd2l0aCBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgIGRiLiRkaXNjb25uZWN0KClcbiAgfSxcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFdBQVcsUUFBUSw0QkFBNEI7QUFDeEQsU0FBU0Msb0JBQW9CLFFBQVEsMkJBQTJCO0FBQUEsSUFBQUMsVUFBQTtBQUFBLFlBQUFDLGtDQUFBO0FBQUFELFVBQUEsQ0FBQUUsdUJBQUEsR0FBQUQsa0NBQUE7QUFBQSxZQUFBRSw0QkFBQTtBQUFBSCxVQUFBLENBQUFJLGlCQUFBLEdBQUFELDRCQUFBO0FBQUEsSUFBQUUsSUFBQTtBQUFBLFlBQUFDLG9CQUFBO0FBQUFELElBQUEsQ0FBQUUsZUFBQSxHQUFBRCxvQkFBQTtBQUFBLFlBQUFFLGNBQUE7QUFBQUgsSUFBQSxDQUFBSSxTQUFBLEdBQUFELGNBQUE7QUFBQSxZQUFBRSxxQkFBQTtBQUFBTCxJQUFBLENBQUFNLGdCQUFBLEdBQUFELHFCQUFBO0FBQUEsWUFBQUUsaUJBQUE7QUFBQVAsSUFBQSxDQUFBUSxZQUFBLEdBQUFELGlCQUFBO0FBQUEsSUFBQUUsUUFBQTtBQUFBLFlBQUFDLGdDQUFBO0FBQUFELFFBQUEsQ0FBQUUsdUJBQUEsR0FBQUQsZ0NBQUE7QUFBQSxZQUFBRSxvQkFBQTtBQUFBSCxRQUFBLENBQUFJLFdBQUEsR0FBQUQsb0JBQUE7QUFBQSxZQUFBRSxrQ0FBQTtBQUFBTCxRQUFBLENBQUFNLHlCQUFBLEdBQUFELGtDQUFBO0FBQUEsWUFBQUUsMEJBQUE7QUFBQVAsUUFBQSxDQUFBUSxpQkFBQSxHQUFBRCwwQkFBQTtBQU1oRSxTQUFTRSxjQUFjO0FBQ3ZCLFNBQVNDLEVBQUU7QUFDWCxTQUFTQyxNQUFNO0FBRWYsT0FBTyxNQUFNQyxPQUFPLEdBQUczQixvQkFBb0IsQ0FBQztFQUMxQ0QsV0FBVztFQUNYeUIsY0FBYztFQUNkSSxZQUFZLEVBQUU7SUFBRUYsTUFBTTtJQUFFRyxPQUFPLEVBQUUsQ0FBQztFQUFFLENBQUM7RUFDckM1QixVQUFVO0VBQ1ZLLElBQUk7RUFDSlMsUUFBUTtFQUNSZSxXQUFXLEVBQUVBLENBQUEsS0FBTTtJQUNqQjtJQUNBTCxFQUFFLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0VBQ2xCO0FBQ0YsQ0FBQyxDQUFDIn0=