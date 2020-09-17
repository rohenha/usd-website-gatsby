var graph = require('fb-react-sdk');

export function getFacebookContent(fields: string) {
    graph.setAccessToken(process.env.FACEBOOK_GRAPH_TOKEN);
    return new Promise(resolve => {
        graph.get("unionsportivedionysienne", { fields: fields }, (_err: any, res: any) => {
            resolve(res);
        });
    })
};

// const addScript = (id: string, src: string) => new Promise((resolve: any, reject: any) => {
//     const element = document.getElementById(id);
//     if (element) {
//         return resolve(true);
//     }
//     const script = document.createElement('script');
//     script.setAttribute('type', 'text/javascript');
//     script.setAttribute('id', id);
//     script.setAttribute('src', src);
//     script.addEventListener('load', () => {
//         resolve(true);
//     });
//     script.addEventListener('error', () => reject(new Error(`Error loading ${id}.`)));
//     script.addEventListener('abort', () => reject(new Error(`${id} loading aborted.`)));
//     document.getElementsByTagName('head')[0].appendChild(script);
// });

// export async function addFacebookScript() {
//     const id = 'facebookAuth';
//     const src = 'https://connect.facebook.net/fr_FR/sdk.js';
//     return addScript(id, src);
// };

// export async function initFacebookSDK() {
//     return new Promise((resolve: any) => {
//         addFacebookScript().then(() => {
//             FB.init({
//                 appId            : process.env.FACEBOOK_APP_ID,
//                 autoLogAppEvents : true,
//                 xfbml            : true,
//                 version          : 'v8.0'
//             });
//             resolve(true);
//         });
//     });
// }

// export function getFacebookContentNew(fields: string) {
//     return new Promise((resolve: any, reject: any) => {
//         FB.api('/unionsportivedionysienne', {
//             fields: fields,
//             access_token: process.env.FACEBOOK_GRAPH_TOKEN
//         }, function(response: any) {
//             if (!response || response.error) {
//                 reject('Error occured');
//             } else {
//                 resolve(response);
//             }
//         });
//     })
// }