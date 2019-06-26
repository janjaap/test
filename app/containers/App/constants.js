/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'registraties/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const AUTHENTICATE_USER = 'registraties/App/AUTHENTICATE_USER';
export const AUTHORIZE_USER = 'registraties/App/AUTHORIZE_USER';

export const SHOW_GLOBAL_ERROR = 'registraties/App/SHOW_GLOBAL_ERROR';
export const RESET_GLOBAL_ERROR = 'registraties/App/RESET_GLOBAL_ERROR';

export const LOGIN = 'registraties/App/LOGIN';
export const LOGOUT = 'registraties/App/LOGOUT';
