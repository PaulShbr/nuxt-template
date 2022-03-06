import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import SlowDown from 'express-slow-down';
import winston from 'winston';
import expresswinston from 'express-winston';

const app = express();
/**
 * MIDDLEWARE
 */

/**
 * helmet configuration: https://github.com/helmetjs/helmet#reference
 */
app.use(helmet());
/**
 * slow-down configuration: https://www.npmjs.com/package/express-slow-down
 */
app.use(SlowDown({  
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 100, // allow 100 requests per 15 minutes, then...
    delayMs: 500 // begin adding 500ms of delay per request above 100:
}));

/**
 * rateLimit configuration: https://www.npmjs.com/package/express-rate-limit
 */
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}));

//accessLogger
app.use(expresswinston.logger({
    transports: [
        new winston.transports.File({
            dirname: "logs",
            filename: `access_${new Date()}.log`
        })
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));


/**
 * END MIDDLEWARE
 */

/**
 * ROUTER
 * Router müssen zuerst importiert werde: import <Routername> from 'path/to/router'
 * anschließend an ihrem pfad hinterlegt werden: app.use("path/to/router", <Routername>); 
*/

/**
 * END ROUTER
 */

//ping route to test accessability
app.use("/ping", async (req, res) => {
    res.send("pong");
});

/**
 * express error handler
 */
 app.use(expresswinston.errorLogger({
    transports: [
        new winston.transports.File({
            dirname: "logs",
            filename: `error_${new Date()}.log`
        })
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));

export default app;