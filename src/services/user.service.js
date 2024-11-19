export const userService = {
    create: async function (req) {
        return `This action creates a user`;
    },

    findAll: async function (req) {
        return `This action returns all user`;
    },

    findOne: async function (req) {
        return `This action returns a user with id: ${req.params.id}`;
    },

    update: async function (req) {
        return `This action updates a user with id: ${req.params.id}`;
    },

    remove: async function (req) {
        return `This action removes a user with id: ${req.params.id}`;
    },
    uploadAvatar: async (req) => {
        const file = req.file;
        console.log(file);
        return "Upload ảnh thành công";
    },
};
