declare module 'daruk' {
  interface Context {
    render: (tpl: string, data?: any) => Promise<any>;
  }
}
