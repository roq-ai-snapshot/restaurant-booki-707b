interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter', 'Restaurant Owner', 'Restaurant Manager', 'Wait Staff'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menu', 'Make a reservation', 'View table availability'],
  ownerAbilities: [
    'Manage user information',
    'Manage restaurant information',
    'Manage menu items',
    'Manage reservations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/75b9c626-aba4-4a69-9ca8-4286503abefc',
};
