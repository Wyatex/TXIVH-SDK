export interface IPlayOption {
  /**
   * 是否开启对话模式, 默认值是 false, 纯文本驱动
   *
   * 为 true 时, 启动对应的对话模式, 客服对话/大模型
   */
  isChat?: boolean;
  /**
   * isChat 为 true 时有效
   *
   * 是否属于同一个会话（多轮），会影响多轮会话的结果
   */
  isNew?: boolean;
  /**
   * isChat 为 false 时有效
   *
   * 为 true 时, 为流式文本驱动。默认值为 false。
   *
   * > 警告：流式文本不支持 SSML 格式
   */
  isStream?: boolean;
  /**
   * isStream 生效时必传
   *
   * 流式文本分片序号, 从1开始计数。
   */
  seqNo?: number;
  /**
   * isStream 生效时必传
   *流式文本的结束标记（每一段流式文本结束必须传入结束标记）。
   */
  isFinal?: boolean;
  /**
   * isStream 生效时必传
   *
   * 流式文本的请求 Id, 长度为32的 uuid, 用来标识是同一个流。
   */
  streamId?: string;
  /**
   * isChat为true时有效，传值时会导致isNew无效，人为标识是否为同一个会话（用于多端查询）。
   * > 注意：型对话时客户传入，长度不超过64位的字符串
   */
  userId?: string;
}

/**
 * 每次调用前先执行 initAudio
 *
 * ```js
 * document.querySelector('#btn').onclick = function (e) {
 *   const txt = document.querySelector('#txt').value.trim();
 *   if (txt) {
 *     IVH.initAudio();
 *     IVH.play(txt, {
 *       isChat: true,
 *     });
 *   }
 * }
 *
 *
 * // 模拟流式接口测试用例, 仅供参考
 * document.querySelector('#btn7').addEventListener('click', e => {
 *   const arr = [
 *     '今天天气不错，',
 *     '风和日丽的，',
 *     '可以出去玩了。'
 *   ];
 *   IVH.initAudio();
 *   const streamId = crypto.randomUUID().replace(/-/g, '')
 *   for (let i = 0; i < arr.length; i++) {
 *     IVH.play(arr[i], {
 *       isStream: true,
 *       seqNo: i + 1,
 *       isFinal: i === arr.length - 1,
 *       streamId,
 *     })
 *   }
 * })
 * ```
 *
 * @param text 要播放的文本，支持[SSML](https://cloud.tencent.com/document/product/1240/81278)规范。（纯动作标签只支持单动作）
 * @param option 自定义类型
 */
export function play(text: object, option: IPlayOption) {
  window.IVH.play(text, option);
}
