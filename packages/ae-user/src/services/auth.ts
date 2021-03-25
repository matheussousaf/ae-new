interface AuthProps {
  token: string;
}

export function signIn(): Promise<AuthProps> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "123938291" });
    }, 1000);
  });
}
