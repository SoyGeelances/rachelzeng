export const WEBFORMS_CONFIG = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ??
    import.meta.env.VITE_WEBFORMS_ACCESS_KEY ??
    "15f0a02f-8fc4-4810-857f-5c8af4b4cc0b",
  scriptUrl: "https://web3forms.com/client/script.js",
};

export const hasWebformsConfig = Boolean(WEBFORMS_CONFIG.accessKey);
