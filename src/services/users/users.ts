import {
  GetUserProps,
  LoginProps,
  LoginResponse,
  StoreUsersProps,
} from "../../types/users/users";
import { axiosFlarol } from "../axios";

export const login = async ({
  email,
  password,
}: LoginProps): Promise<LoginResponse> => {
  try {
    const { data } = await axiosFlarol.post<LoginResponse>("users/login", {
      email,
      password,
    });

    return data;
  } catch (e: any) {
    return e;
  }
};

export const storeUsers = async ({
  name,
  email,
  password,
  confirm_password,
}: StoreUsersProps) => {
  try {
    const { data } = await axiosFlarol.post<StoreUsersProps>("users", {
      name,
      email,
      password,
      confirm_password,
    });

    return data;
  } catch (e: any) {
    return e;
  }
};

export const getUsers = async (): Promise<GetUserProps> => {
  try {
    const { data } = await axiosFlarol.get<GetUserProps>("users");

    return data;
  } catch (e: any) {
    return e;
  }
};
