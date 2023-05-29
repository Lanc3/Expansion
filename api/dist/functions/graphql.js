var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var graphql_exports = {};
__export(graphql_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(graphql_exports);
var import_auth_dbauth_api = require("@redwoodjs/auth-dbauth-api");
var import_graphql_server = require("@redwoodjs/graphql-server");
var directives_requireAuth_requireAuth = __toESM(require("../directives/requireAuth/requireAuth"));
var directives_skipAuth_skipAuth = __toESM(require("../directives/skipAuth/skipAuth"));
var sdls_nicolaPosts_sdl = __toESM(require("../graphql/nicolaPosts.sdl"));
var sdls_posts_sdl = __toESM(require("../graphql/posts.sdl"));
var sdls_projectDatas_sdl = __toESM(require("../graphql/projectDatas.sdl"));
var sdls_projects_sdl = __toESM(require("../graphql/projects.sdl"));
var services_nicolaPosts_nicolaPosts = __toESM(require("../services/nicolaPosts/nicolaPosts"));
var services_posts_posts = __toESM(require("../services/posts/posts"));
var services_projectDatas_projectDatas = __toESM(require("../services/projectDatas/projectDatas"));
var services_projects_projects = __toESM(require("../services/projects/projects"));
var import_auth = require("../lib/auth");
var import_db = require("../lib/db");
var import_logger = require("../lib/logger");
let directives = {};
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
sdls.nicolaPosts_sdl = sdls_nicolaPosts_sdl;
sdls.posts_sdl = sdls_posts_sdl;
sdls.projectDatas_sdl = sdls_projectDatas_sdl;
sdls.projects_sdl = sdls_projects_sdl;
let services = {};
services.nicolaPosts_nicolaPosts = services_nicolaPosts_nicolaPosts;
services.posts_posts = services_posts_posts;
services.projectDatas_projectDatas = services_projectDatas_projectDatas;
services.projects_projects = services_projects_projects;
const handler = (0, import_graphql_server.createGraphQLHandler)({
  authDecoder: import_auth_dbauth_api.authDecoder,
  getCurrentUser: import_auth.getCurrentUser,
  loggerConfig: {
    logger: import_logger.logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    import_db.db.$disconnect();
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=graphql.js.map
