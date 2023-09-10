'use client';

import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/api/authentication";
import { Label } from "../ui/label";
import Link from "next/link";

function LoginForm() {
    async function actionLogin(formData: FormData) {
        console.log(formData);
        const res = await login(formData)
        console.log(res);
      }
    
  return (
    <form action={actionLogin}>
      <div className="mt-6">
        <Label htmlFor="username">Username</Label>
        <Input name="username" id="username" required autoComplete="email" className="mt-1" />
      </div>

      <div className="mt-2">
        <Label htmlFor="password">Password</Label>
        <Input name="password" id="password" required autoComplete="current-password" className="mt-1" />
      </div>

      <Button variant="secondary" type="submit" className="mt-5 w-full">Register</Button>
      <Link href='/' >
        <Button variant="outline" type="button" size="sm" className="mt-5 w-full">Login</Button>
      </Link>
    </form>
  );
}

export default LoginForm;
