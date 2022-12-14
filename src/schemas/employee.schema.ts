import Joi from "joi";

export const createEmployeeSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  idDepartment: Joi.number().allow(null).required(),
});

export const updateEmployeeSchema = Joi.object().keys({
  name: Joi.string().min(5),
  idDepartment: Joi.number().allow(null),
});

export const createProjectEmployeeSchema = Joi.object().keys({
  hourlyRate: Joi.number().min(1).required(),
});

export const updateProjectEmployeeSchema = Joi.object().keys({
  hourlyRate: Joi.number().min(1).required(),
});