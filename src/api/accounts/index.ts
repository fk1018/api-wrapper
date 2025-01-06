// src/api/axle-configuration-templates/index.ts
import { createAccount } from "./create-account";
import { listAccounts } from "./list-accounts";
export const accounts = { list: listAccounts, create: createAccount };
