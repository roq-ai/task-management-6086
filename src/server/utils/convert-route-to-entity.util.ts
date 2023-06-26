const mapping: Record<string, string> = {
  clients: 'client',
  companies: 'company',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
