// 4 - Basic: Filter

function getShortMessages (messages) {
    return messages.map(function(obj) {
        return obj.message;
    }).filter(filterMessage);
}

function filterMessage (message) {
    return message.length < 50;
}

module.exports = getShortMessages;

// Official Solution:
module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
        return item.message.length < 50;
    }).map(function(item) {
        return item.message;
    });
};