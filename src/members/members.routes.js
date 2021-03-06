import AccountOverview from "./overview.page";

export const ApplicationPath = "/account";

const MemberRoutes = [
  {
    path: [`${ApplicationPath}`],
    component: AccountOverview,
    isAuthed: true,
  },
];

export default MemberRoutes;
