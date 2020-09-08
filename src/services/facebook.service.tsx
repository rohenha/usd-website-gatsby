var graph = require('fb-react-sdk');

export function getFacebookContent(fields: string) {
    graph.setAccessToken(process.env.FACEBOOK_GRAPH_TOKEN);
    return new Promise(resolve => {
        graph.get("unionsportivedionysienne", { fields: fields }, (_err: any, res: any) => {
            resolve(res);
        });
    })
};