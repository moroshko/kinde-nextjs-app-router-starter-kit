import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

declare global {
  interface KindeAccessToken {
    organization_properties?: {
      org_handle?: {
        v: string;
      };
    };
  }
}

export const getOrgHandle = async () => {
  const { getAccessToken } = getKindeServerSession();
  const accessToken = await getAccessToken();
  const orgHandle = accessToken?.organization_properties?.org_handle?.v;

  return orgHandle ?? null;
};
