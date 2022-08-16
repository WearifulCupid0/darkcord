import { GatewayClient } from "darkcord";

export function getShardId(guildId: string | number, client: GatewayClient) {
  if (typeof client.options.gateway?.totalShards !== "number") return 0;
  const id = typeof guildId === "string" ? parseInt(guildId) : guildId;
  return (id >> 22) % client.options.gateway.totalShards;
}