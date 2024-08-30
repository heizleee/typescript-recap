// 아래와 같이 코멘트를 작성하면 typescript가 코멘틀를 읽을 수 있다..!
// @ts-check
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}
/**
 * Exit code
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
  return code + 1;
}