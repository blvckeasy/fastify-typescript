export type TDatabaseOpts = Readonly<{
  readonly host?: string;
  readonly port?: number;
  readonly user?: string;
  readonly password?: string;
  readonly database?: string;
  readonly logger?: boolean;
}>