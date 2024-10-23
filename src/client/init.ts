export interface ModelOption {
  mode: Array<string>;
}

/**
 * 初始化传参
 * 详情：[官方文档](https://cloud.tencent.com/document/product/1240/104051#.3Cspan-style.3D.22color.3A-blue.3B.22.3Einit-.E5.88.9D.E5.A7.8B.E5.8C.96.3C.2Fspan.3E)
 */
export interface IInitOption {
  /**
   * 容器元素对象，或者为找到容器元素的selector，例如“#元素id”
   */
  element: string;
  /**
   * 参考：[使用流程](https://cloud.tencent.com/document/product/1240/104050)
   */
  virtualmanProjectId: string;
  /**
   * 参考[产品介绍](https://cloud.tencent.com/document/product/1240/104050)。
   * 如果不设置，必须 setPrivatization 里设置 appKey 和 accessToken。
   * 没 setPrivatization, 且设置了 sign, 为公有云鉴权
   */
  sign?: string;
  /**
   * 与 modelData 二选一，优先级低模型地址, 相对地址/绝对地址都可
   * * > 说明：
   * >
   * > 可支持zip链接，参考 [初始化解压功能](https://cloud.tencent.com/document/product/1240/104051#initzip)。
   */
  modelPath?: string;
  /**
   * 与 modelPath 二选一，优先级高模型数据，fetch 获取后，转 arrayBuffer 即可。
   */
  modelData?: ArrayBuffer;
  /**
   * 与 actionData 二选一，优先级低动作地址, 相对地址/绝对地址都可
   * > 说明：
   * >
   * > 可支持zip链接，参考 [初始化解压功能](https://cloud.tencent.com/document/product/1240/104051#initzip)。当传入动作文件的 zip 时，数组里第一个值为url链接即可，其他值会忽略
   * >
   * > **使用zip时**
   * >
   * > **设置静默动作**：是把zip包里的”对应动作.json“改名为”default_action_idle.json“即可。
   * >
   * > **设置开场动作**：是把zip包里的”对应动作.json“改名为”opening_action_once.json“即可。
   */
  actionPath?: string[];
  /**
   * 与 actionPath 二选一，优先级高
   *
   * 动作数据
   */
  actionData?: Array<string>;
  /**
   * 动作数组里的下标，会当成静默动作, 默认值为0
   *
   * > **注意：当传入动作 zip 文件时，该参数不生效。**
   */
  defaultActionIdx?: number;
  /**
   * 动作数组里的下标，不能和静默动作一样且值有效，会在init后执行一遍
   *
   * > **注意：当传入动作 zip 文件时，该参数不生效。**
   */
  openingActionIdx?: number;
  /**
   * 模型渲染参数
   */
  modelOption?: ModelOption;
  /**
   * 与 configData 二选一，优先级低
   *
   * 配置文件地址，相对地址/绝对地址都可。
   * > 注意：
   * >
   * > 如果下载的模型资产压缩包内有配置文件，请 init 时加载进去。
   */
  configPath?: string;
  /**
   * 与 configPath 二选一，优先级高
   *
   * json 数据，fetch 获取后，转 json 即可。
   * > 注意：
   * >
   * > 如果下载的模型资产压缩包内有配置文件，请 init 时加载进去。
   */
  configData?: object;
  /**
   * 是否是国际版，默认值为false（国内版）
   *
   * > **警告：国内 | 国际版账号和接口不通用，如果不匹配会导致接口异常。**
   */
  isIntl?: boolean;
}

export function init(option: IInitOption) {
  return window.IVH.init(option);
}
