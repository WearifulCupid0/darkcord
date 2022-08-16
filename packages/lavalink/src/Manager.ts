import { GatewayClient } from "darkcord";

export class Manager {
  public readonly client: GatewayClient;

  constructor (client: GatewayClient) {
    if (!(client instanceof GatewayClient))
      throw new Error("Only gateway client's are valid.");

    this.client = client;
  }
}