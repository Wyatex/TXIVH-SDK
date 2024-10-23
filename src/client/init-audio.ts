/**
 * **初始化 AudioContext**
 *
 * 由于 iOS 的音频自动播放限制，必须在行为事件的回调里 init ：
 *
 * 正确示例，在用户行为事件回调函数的层级里调用 initAudio。
 * ```js
 * document.querySelector('#btn').onclick = function (e) {
 *   IVH.initAudio();
 *   const txt = document.querySelector('#txt').value.trim();
 *   if (txt) {
 *     setTimeout(() => {
 *       IVH.play(txt);
 *     }, 1000);
 *   }
 * }
 * ```
 * 错误示例，在其他函数层级里initAudio，这时 iOS 系统会认为是非用户行为。
 * ```
 * document.querySelector('#btn').onclick = function (e) {
 *   const txt = document.querySelector('#txt').value.trim();
 *   if (txt) {
 *     setTimeout(() => {
 *       IVH.initAudio();
 *       IVH.play(txt);
 *     }, 1000);
 *   }
 * }
 * ```
 */
export function initAudio() {
  window.IVH.initAudio();
}
