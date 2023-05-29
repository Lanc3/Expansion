var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var projects_exports = {};
__export(projects_exports, {
  createProject: () => createProject,
  deleteProject: () => deleteProject,
  project: () => project,
  projects: () => projects,
  updateProject: () => updateProject
});
module.exports = __toCommonJS(projects_exports);
var import_db = require("../../lib/db");
const projects = () => {
  return import_db.db.project.findMany();
};
const project = ({
  id
}) => {
  return import_db.db.project.findUnique({
    where: {
      id
    }
  });
};
const createProject = ({
  input
}) => {
  return import_db.db.project.create({
    data: input
  });
};
const updateProject = ({
  id,
  input
}) => {
  return import_db.db.project.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteProject = ({
  id
}) => {
  return import_db.db.project.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createProject,
  deleteProject,
  project,
  projects,
  updateProject
});
//# sourceMappingURL=projects.js.map
