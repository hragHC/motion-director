import OpenAI from "openai";
export const openai=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
export function cors(res){res.setHeader("Access-Control-Allow-Origin","*");res.setHeader("Access-Control-Allow-Methods","POST,OPTIONS");res.setHeader("Access-Control-Allow-Headers","Content-Type")}
export function preflight(req,res){cors(res);if(req.method==="OPTIONS"){res.status(204).end();return true}return false}
export function fail(res,status,error){res.status(status).json({error})}
