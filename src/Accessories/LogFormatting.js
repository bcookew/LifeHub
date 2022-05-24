/**
 * Provides formatting for an input message when success is true Else returns a formatted default error string
 * @param {string} str - Message to format and log
 * @param {JSON} sysMsg - Optional JSON msg to log
 * @returns {void} prints and returns nothing
 */

module.exports.print = (str, sysMsg=undefined) => {
    console.log(`
    ${"-".repeat(str.length)}
    ${str}
    ${"-".repeat(str.length)}
    
    `, sysMsg ? sysMsg : "");
}