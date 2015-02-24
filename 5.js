// 5 - Basic: Every Some

function checkUsersValid (goodUsers) {
    return function (submittedUsers) {
        return submittedUsers.every(function (submittedUser) {
            return goodUsers.some(function (goodUser) {
                return goodUser.id == submittedUser.id;
            });
        });
    };
}

// I don't understand the logic of this...

module.exports = checkUsersValid;