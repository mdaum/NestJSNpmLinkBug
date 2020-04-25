Simple Working example of issue in NestJS where built-in exceptions thrown in "npm linked" modules result in 500 errors in consuming app.

In this repo, ModuleB imports ModuleA.

In `moduleB/src/app.module.ts`, you can choose to use unlinked or linked import by commenting/uncommenting.
As a courtesy, `link` and `unlink` scripts are provided in project root.

Two run scripts for ModuleB `npm run startLinked` and `npm run startUnlinked`.
It can be observed that Exceptions thrown in the unlinked version will result in the desired Error Code. In the linked version, it will result in a 500. Example output below:

```
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [NestFactory] Starting Nest application...
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [InstanceLoader] ModuleA dependencies initialized +17ms
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [RoutesResolver] AppController {}: +4ms
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [RouterExplorer] Mapped {, GET} route +3ms
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [RoutesResolver] ModuleAController {}: +0ms
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [RouterExplorer] Mapped {/say/:key, GET} route +2ms
[Nest] 4136   - 04/25/2020, 1:55:46 AM   [NestApplication] Nest application successfully started +3ms
[Nest] 4136   - 04/25/2020, 1:56:00 AM   [ExceptionsHandler] do not know bad word +13581ms
Error: do not know bad word
    at ModuleAController.saySomething (/home/mdaum/NestJSNpmLinkBug/moduleA/dist/app.controller.js:19:19)
    at /home/mdaum/NestJSNpmLinkBug/moduleB/node_modules/@nestjs/core/router/router-execution-context.js:37:29
    at process._tickCallback (internal/process/next_tick.js:68:7)
```

It would appear this is being treated as a regular Error instead of an exception that should be giving the desired non-200 error code.
