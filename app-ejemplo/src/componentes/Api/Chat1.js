import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-iGrCqxg9SLz2qlF2mrSTsNyY",
    apiKey: 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,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();