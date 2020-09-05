export function getURL() {
    let env = getEnv();
    if (env === 'development') {
        // env = process.env.VUE_APP_BACKGROUND_APPLICATION_URL
       return env = process.env.VUE_APP_BASE_URL
    } 
    if(env==='production') {
       return  env = process.env.VUE_APP_BASE_URL
    }
}

/**
 * 返回环境信息
 */
export function getEnv(){
    return process.env.NODE_ENV
}