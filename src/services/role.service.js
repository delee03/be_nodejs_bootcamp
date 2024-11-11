export const roleService = {
    create: async function (req) {
        return `This action creates a role`;
    },

    findAll: async function (req) {
        return `This action returns all role`;
    },

    findOne: async function (req) {
        return `This action returns a role with id: ${req.params.id}`;
    },

    update: async function (req) {
        return `This action updates a role with id: ${req.params.id}`;
    },

    remove: async function (req) {
        return `This action removes a role with id: ${req.params.id}`;
    },
};
