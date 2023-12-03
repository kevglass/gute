export class GuteLog {
    static INFO: boolean = true;
    static ERROR: boolean = true;
    static WARN: boolean = true;
    static TRACE: boolean = false;

    static log(...args: any) {
        if (GuteLog.INFO) {
            console.log(...args);
        }
    }

    static info(...args: any) {
        if (GuteLog.INFO) {
            console.info(...args);
        }
    }
    
    static error(...args: any) {
        if (GuteLog.ERROR) {
            console.error(...args);
        }
    }

    static warm(...args: any) {
        if (GuteLog.WARN) {
            console.warn(...args);
        }
    }

    static trace(...args: any) {
        if (GuteLog.TRACE) {
            console.trace(...args);
        }
    }
}