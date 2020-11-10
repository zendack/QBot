export const environment = {
    production: false,
    apiBaseUrl: "https://contosocgw.azurewebsites.net/api/Request/",
    selfUrl: "https://contosocgw-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d14eccd2-7a60-4e78-9ac2-7cbf1a15855c",
        clientId: "3b5479f4-8468-4fa4-8986-9cbf04db9dec",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
