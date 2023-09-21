import axios from "axios";

export type StoreUsersProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  walletDescription: string;
  walletAmount: number;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type LoginResponse = {
  email: string;
  name: string;
  token: string;
};

export const login = async ({
  email,
  password,
}: LoginProps): Promise<LoginResponse> => {
  try {
    const { data } = await axios.post<LoginResponse>(
      "http://192.168.3.41:3000/users/login",
      {
        email,
        password,
      }
    );
    return data;
  } catch (e: any) {
    return e;
  }
};

export const storeUsers = async ({
  name,
  email,
  password,
  confirmPassword,
}: StoreUsersProps) => {
  try {
    const { data } = await axios.post("http://192.168.3.41:3000/users", {
      name,
      email,
      password,
      confirm_password: confirmPassword,
      wallet_amount: 1000,
      wallet_description: new Date().getTime().toString(),
    });
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get("http://192.168.3.41:3000/users");
    return data;
  } catch (e: any) {
    return e;
  }
};
