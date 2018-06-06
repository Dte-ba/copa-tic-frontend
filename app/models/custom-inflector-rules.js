import Inflector from "ember-inflector";

const inflector = Inflector.inflector;

inflector.irregular("escuela", "escuelas");
inflector.irregular("equipo", "equipos");
inflector.irregular("actividad", "actividads");
inflector.irregular("insignia", "insignias");

export default {};
