
/**
 * fügt cors header hinzu
 * * um alle origins zuzuladden
 * sonst: array der erlaubten origins
 * @param res Express Response Object
 * @param allowedOrigins erlaubte cors origins
 * @returns Express Response Object
 */
export function addCors(res:Response, allowedOrigins:string|string[]):Response {
    res.headers.append("Access-Control-Allow-Origin", Array.isArray(allowedOrigins) ? allowedOrigins.join(", ") : allowedOrigins);
    return res;
}