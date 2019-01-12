// Type definitions for get-port 4.0
// Project: https://github.com/sindresorhus/get-port
// Definitions by: York Yao <https://github.com/plantain-00>
//                 BendingBender <https://github.com/BendingBender>
//                 MH Rohman <https://github.com/rohmanhm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'get-port' {
  type Options = {
    port?: number | ReadonlyArray<number>;
    host?: string;
  }
  type GetPortFn = (options?: Options) => Promise<number>
  type GetPortExport = GetPortFn
  const GetPort: GetPortExport
  export = GetPort
}
