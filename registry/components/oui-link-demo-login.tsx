import { TextFieldEx } from "@/registry/components/oui-text-field-ex";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/components/ui/card";
import { Button } from "@/registry/components/ui/oui-button";
import { Label } from "@/registry/components/ui/oui-label";
import { Link } from "@/registry/components/ui/oui-link";

export default function Component() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <TextFieldEx label="Email" placeholder="m@example.com" isRequired />
            <TextFieldEx
              name="password"
              type="password"
              isRequired
              label={
                <div className="flex items-center">
                  <Label>Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm"
                    underline="hover"
                  >
                    Forgot your password?
                  </Link>
                </div>
              }
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" underline="always">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
