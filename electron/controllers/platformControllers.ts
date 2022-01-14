import { platform } from "process"

function getPlatform(res: any, req: any, next: Function) {
    res.status(200).json({
        platform: platform.toString()
    })
}