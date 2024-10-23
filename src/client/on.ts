export interface OnNlpCallback {
  (e: {
    code: number;
    data: {
      replyPro: string;
      interactionType:
        | "OptionInfo"
        | "Image"
        | "Popup"
        | "Video"
        | "ImageOption"
        | "Customize";
      replyDisplay: string;
      interactionContent: string;
    };
  }): void;
}

export interface OnSentenceCallback {
  (e: {
    code: number;
    data: { seqNo: number; status: "start" | "over" };
  }): void;
}

export interface OnErrorCallback {
  (e: { message: string }): void;
}

/**
 * TTS语音播完后触发
 */
export function on(event: "play", callback: () => void): void;

/**
 * 模型初始化完毕后触发
 */
export function on(event: "init", callback: () => void): void;

/**
 * 对话的返回结果，用于富文本的展示
 * 具体说明参考 [附录说明](https://cloud.tencent.com/document/product/1240/104051#%E9%99%84%E5%BD%95%E8%AF%B4%E6%98%8E)
 */
export function on(event: "nlp", callback: OnNlpCallback): void;

/**
 * 大模型模式下的分句播报信息
 * seqNo 对应 nlp 事件里返回的 seqNo，status 播放状态: start 开始/over 结束
 */
export function on(event: "sentence", callback: OnSentenceCallback): void;

/**
 * 有错误发生时触发
 */
export function on(event: "error", callback: OnErrorCallback): void;

export function on(
  event: "init" | "error" | "play" | "nlp" | "sentence",
  callback: any,
) {
  window.IVH.on(event, callback);
}
