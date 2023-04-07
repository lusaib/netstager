export enum LogLevel {
  ERROR = "error",
  WARNING = "warning",
  DEBUG = "debug",
  INFO = "info",
}

interface LogData {
  message: string;
  level: LogLevel;
}

export const log = (level: LogData["level"], message: LogData["message"]) => {
  // const { level, message } = data;
  switch (level) {
    case "warning":
      console.warn(`[WARNING] ${message}`);
      break;
    case "error":
      console.error(`[ERROR] ${message}`);
      break;
    case "info":
      console.info(`[INFO] ${message}`);
      break;
    default:
      console.log(`[${level.toUpperCase()}] ${message}`);
      break;
  }
};
