# Issue Reproduction

When running WallabyJs (version 1.0.37) in Visual Studio Code, receive the following error:

```
​​​​​0 failing tests, 0 passing​​​​​
​​​​​​​​​​
​​Error: Cannot find module "subfolder/Example"​​
  at ​spec/subfolder/Example.spec.ts:1​
  at ​spec/subfolder/Example.spec.ts:1​
​​Module not found: Error: Cannot resolve module 'subfolder/Example' in ./spec/subfolderModuleNotFoundError: Module not found: Error: Cannot resolve module 'subfolder/Example' in /home/steve/.vscode/extensions/WallabyJs.wallaby-vscode-1.0.37/projects/c7af71b67db8de26/instrumented/spec/subfolder​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/webpack/lib/Compilation.js:229:38​​
​​  at onDoneResolving (/home/steve/development/wallaby-bug-repro/node_modules/webpack/lib/NormalModuleFactory.js:29:20)​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/webpack/lib/NormalModuleFactory.js:85:20​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/async/lib/async.js:726:13​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/async/lib/async.js:52:16​​
​​  at done (/home/steve/development/wallaby-bug-repro/node_modules/async/lib/async.js:241:17)​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/async/lib/async.js:44:16​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/async/lib/async.js:723:17​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/async/lib/async.js:167:37​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:24:19​​
​​  at onResolved (/home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/Resolver.js:38:18)​​
​​  at innerCallback (/home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/Resolver.js:94:11)​​
​​  at loggingCallbackWrapper (/home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/createInnerCallback.js:21:19)​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/tapable/lib/Tapable.js:134:6​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/ModulesInDirectoriesPlugin.js:54:23​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/Resolver.js:191:15​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/ModulesInDirectoriesPlugin.js:45:26​​
​​  at loggingCallbackWrapper (/home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/createInnerCallback.js:21:19)​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/tapable/lib/Tapable.js:134:6​​
​​  at Tapable.<anonymous> (/home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/ModuleAsDirectoryPlugin.js:30:12)​​
​​  at Storage.finished (/home/steve/development/wallaby-bug-repro/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)​​
​​  at /home/steve/development/wallaby-bug-repro/node_modules/graceful-fs/polyfills.js:284:29​​
​​  at FSReqWrap.oncomplete (fs.js:82:15)​​
​​​​
```

Webpack configuration specifies the `.ts` extension and the `src` folder as the location from which to resolve packages.

Note that TypeScript compiler can resolve `subfolder/Example` from other files.  See `FileThatImportsSuccessfully.ts` for an example.