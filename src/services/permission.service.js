export const permissionService = {
    create: async function (req) {
        return `This action creates a permission`;
    },

    findAll: async function (req) {
        return `This action returns all permission`;
    },

    findOne: async function (req) {
        return `This action returns a permission with id: ${req.params.id}`;
    },

    update: async function (req) {
        return `This action updates a permission with id: ${req.params.id}`;
    },

    remove: async function (req) {
        return `This action removes a permission with id: ${req.params.id}`;
    },
};
