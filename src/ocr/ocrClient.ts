// This file is auto-generated, don't edit it
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import ocr_api20210707, * as $ocr_api20210707 from '@alicloud/ocr-api20210707';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
import * as $tea from '@alicloud/tea-typescript';
import { ALIBABA_CLOUD_ACCESS_KEY_ID, ALIBABA_CLOUD_ACCESS_KEY_SECRET } from "../configuration"

export default class Client {

    /**
     * 使用AK&SK初始化账号Client
     * @param accessKeyId
     * @param accessKeySecret
     * @return Client
     * @throws Exception
     */
    static createClient(accessKeyId: string, accessKeySecret: string): ocr_api20210707 {
        let config = new $OpenApi.Config({
            // 必填，您的 AccessKey ID
            accessKeyId: accessKeyId,
            // 必填，您的 AccessKey Secret
            accessKeySecret: accessKeySecret,
        });
        // Endpoint 请参考 https://api.aliyun.com/product/ocr-api
        config.endpoint = `ocr-api.cn-hangzhou.aliyuncs.com`;
        return new ocr_api20210707(config);
    }

    static async main(Url: string): Promise<void> {
        // 请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID 和 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
        // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例使用环境变量获取 AccessKey 的方式进行调用，仅供参考，建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378664.html
        let client = Client.createClient(ALIBABA_CLOUD_ACCESS_KEY_ID, ALIBABA_CLOUD_ACCESS_KEY_SECRET);
        let recognizeIdcardRequest = new $ocr_api20210707.RecognizeIdcardRequest({
            Url: Url
        });
        let runtime = new $Util.RuntimeOptions({});
        try {
            // 复制代码运行请自行打印 API 的返回值
            await client.recognizeIdcardWithOptions(recognizeIdcardRequest, runtime);
        } catch (error) {
            // 错误 message
            console.log(error.message);
            // 诊断地址
            console.log(error.data["Recommend"]);
            Util.assertAsString(error.message);
        }
    }

}