// Kept in parts and shown with spaces around @ so scrapers do not pick up the address
const EMAIL_PARTS = ['lasseronnlie', 'pm.me'];

export const DISPLAY_EMAIL = EMAIL_PARTS.join(' @ ');
export const contactEmail = () => EMAIL_PARTS.join(String.fromCharCode(64));
export const GITHUB_URL = 'https://github.com/wexnox';
