import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "John",
          lastName: "Doe",
          areas: ["frontend", "backend", "career"],
          description: "I am an experienced web developer and career coach.",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Jane",
          lastName: "Smith",
          areas: ["frontend", "design"],
          description:
            "I love teaching frontend technologies and UI/UX design.",
          hourlyRate: 25,
        },
        {
          id: "c3",
          firstName: "Michael",
          lastName: "Brown",
          areas: ["backend", "database"],
          description: "Backend systems and data architecture are my passion.",
          hourlyRate: 35,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
