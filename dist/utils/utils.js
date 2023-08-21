"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = void 0;
function validateUrl(value) {
    const pattern = new RegExp('^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i');
    return pattern.test(value);
}
exports.validateUrl = validateUrl;
