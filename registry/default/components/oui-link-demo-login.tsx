"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Button } from "@/registry/default/ui/oui-button";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { Link } from "@/registry/default/ui/oui-link";
import { TextField } from "@/registry/default/ui/oui-text-field";

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
            <TextField isRequired>
              <FieldLabel>Email</FieldLabel>
              <Input placeholder="m@example.com" />
              <FieldError />
            </TextField>
            <TextField name="password" isRequired>
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
              <Input type="password" />
              <FieldError />
            </TextField>
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
