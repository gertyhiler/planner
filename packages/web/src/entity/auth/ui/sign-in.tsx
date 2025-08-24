import sdk from "shared/api";
import { Button } from "shared/ui/button";

import { Input } from "ui/input";

export default function SignIn() {
  return (
    <form
      action={async (e: FormData) => {
        "use server";
        const response = await sdk.auth.login(
          e.get("email") as string,
          e.get("password") as string
        );
        console.log(response);
      }}>
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <Button type="submit">Signin</Button>
    </form>
  );
}
