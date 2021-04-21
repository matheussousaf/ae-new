interface AuthProps {
  token: string;
}

export function signIn(): Promise<AuthProps> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "x21eiomm2x1e2x1e80921" });
    }, 1000);
  });
}
